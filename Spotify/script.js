console.log("lets write javascript");
let playing_song = new Audio();
var temp;
var soud_value;
let intervalId;
let currentSongIndex = 0;
let songLinks = [];

async function get_song_links() {
  let a = await fetch("http://127.0.0.1:5500/Spotify/Music/");
  let responce = await a.text();
  // console.log(responce);

  let div = document.createElement("div");
  div.innerHTML = responce;

  let as = div.getElementsByTagName("a");

  let songs = [];

  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/Music/")[1]);
    }
  }

  return songs;
}
async function load_display_songs() {
  songLinks = await get_song_links();
  //   console.log(songLinks);

  document.querySelector(".pointer").style.left = "0%";

  let songDiv = document.querySelector(".lib");
  // Assuming songLinks contains URL-encoded names
  for (let i = 0; i < songLinks.length; i++) {
    // Decode the song name
    let decodedSongName = decodeURIComponent(songLinks[i]);

    // Create a new div with the class 'song-list'
    let songListDiv = document.createElement("div");
    songListDiv.classList.add("song-list");

    // Create the img element
    let img = document.createElement("img");
    img.src = "image/music.svg";
    img.width = 20;
    img.alt = "music-image";

    // Create the h3 element for the song name
    let h3 = document.createElement("h3");
    h3.textContent = decodedSongName; // Set the decoded song name

    // Create the play button div
    let playDiv = document.createElement("div");
    playDiv.classList.add("play-but");
    playDiv.innerHTML =
      'Play Now <img width="20px" src="image/play-button-with-ring-thick.svg" alt="play-button">';

    // Append the elements to the songListDiv
    songListDiv.appendChild(img);
    songListDiv.appendChild(h3);
    songListDiv.appendChild(playDiv);

    // Append the new songListDiv to the parent container (.lib)
    songDiv.appendChild(songListDiv);
  }
}
async function volume() {
  document.querySelector(".volume_image").innerHTML =
    '<img src="music_image/low_volume.svg" alt="volume">';
  document.querySelector(".soundbar").innerHTML =
    '<input id="volume-slider" type="range" min="0" max="1" step="0.01" value="0.2">';
  playing_song.volume = 0.2;
  let vol = document.querySelector(".volume_image");
  let pitch = document.querySelector(".soundbar").firstElementChild;
  pitch.addEventListener("input", function () {
    const sliderValue = pitch.value;
    playing_song.volume = sliderValue;
    if (playing_song.volume == 0) {
      vol.firstElementChild.src =
        "http://127.0.0.1:5500/Spotify/music_image/mute.svg";
    } else if (playing_song.volume > 0.5) {
      vol.firstElementChild.src =
        "http://127.0.0.1:5500/Spotify/music_image/high_volume.svg";
    } else {
      vol.firstElementChild.src =
        "http://127.0.0.1:5500/Spotify/music_image/low_volume.svg";
    }
  });
  if (vol) {
    vol.addEventListener("click", () => {
      if (
        vol.firstElementChild.src !=
        "http://127.0.0.1:5500/Spotify/music_image/mute.svg"
      ) {
        temp = vol.firstElementChild.src;
        vol.firstElementChild.src =
          "http://127.0.0.1:5500/Spotify/music_image/mute.svg";
        sound_value = playing_song.volume;
        playing_song.volume = 0;
      } else {
        vol.firstElementChild.src = temp;
        playing_song.volume = sound_value;
      }
    });
  }
}
async function event_player() {
  const players = document.querySelectorAll(".lib .song-list");

  players.forEach((element, index) => {
    element.addEventListener("click", async () => {
      playSongAtIndex(index); // Play the selected song
    });
  });
}
function playSongAtIndex(index) {
  if (index < 0 || index >= songLinks.length) return; // Check for valid index
  currentSongIndex = index; // Update current song index

  playing_song.pause();
  playing_song.src = `http://127.0.0.1:5500/Spotify/Music/${songLinks[currentSongIndex]}`;
  playing_song.play();
  musicbar();

  playing_song.addEventListener("loadedmetadata", () => {
    let pause_show = document.getElementById("play_now");
    pause_show.src = "music_image/pause-circle.svg";
    document.querySelector(".song_title").innerHTML = decodeURIComponent(
      songLinks[currentSongIndex]
    );
    document.querySelector(".live_duration").innerHTML = " 00:00 / 00:00";
  });
}
// async function event_player() {
//   const players = document.querySelectorAll(".lib .song-list");
//   // console.log(players)

//   players.forEach((element) => {
//     // console.log(element);
//     element.addEventListener("click", async () => {
//       playing_song.pause();

//       playing_song.src = `http://127.0.0.1:5500/Spotify/Music/${
//         element.querySelector("h3").textContent
//       }`;
//       playing_song.play();
//       musicbar();

//       playing_song.addEventListener("loadedmetadata", () => {
//         const durationInSeconds = playing_song.duration;
//         let pause_show = document.getElementById("play_now");
//         pause_show.src = "music_image/pause-circle.svg";
//         document.querySelector(".song_title").innerHTML =
//           element.querySelector("h3").textContent;
//         document.querySelector(".live_duration").innerHTML = " 00:00 / 00:00";
//       });
//     });
//   });
// }
async function player_button() {
  const playing = document.getElementById("play_now");
  // console.log(playing);
  playing.addEventListener("click", () => {
    if (
      playing_song.paused &&
      document.querySelector(".song_title").innerHTML == ""
    ) {
      return;
    }
    if (playing_song.paused) {
      playing_song.play();
      musicbar();
      playing.src = "music_image/pause-circle.svg";
    } else {
      playing_song.pause();
      playing.src = "music_image/play-circle.svg";
    }
  });
  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is the spacebar
    if (event.key === " ") {
      event.preventDefault(); // Prevent default spacebar behavior (e.g., scrolling)
      if (
        playing_song.paused &&
        document.querySelector(".song_title").innerHTML == ""
      ) {
        return;
      }
      if (playing_song.paused) {
        playing_song.play();
        playing.src = "music_image/pause-circle.svg";
      } else {
        playing_song.pause();
        playing.src = "music_image/play-circle.svg";
      }
    }
  });
}
async function update_time() {
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);
    return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
  }

  playing_song.addEventListener("timeupdate", () => {
    const currentTime = playing_song.currentTime;
    document.querySelector(".live_duration").innerHTML = `${formatTime(
      currentTime
    )} / ${formatTime(playing_song.duration)}`;

    const mus = document.querySelector(".move_music").firstElementChild;
    mus.value = playing_song.currentTime / playing_song.duration;
    // mus.style.transition = "all 1s ease";
    // requestAnimationFrame(update_time);
  });
}
async function mobile_preview() {
  const bur = document.querySelector(".burger");
  const crs = document.querySelector(".cross");

  bur.addEventListener("click", async () => {
    const leftElement = document.querySelector(".left");

    // Apply the transition to the left property
    leftElement.style.transition = "left 0.5s ease-in-out";
    leftElement.style.left = "75%";
    document.querySelector(".right").style.filter = "blur(3px)";
  });
  crs.addEventListener("click", async () => {
    const leftElement = document.querySelector(".left");

    // Apply the transition to the left property
    leftElement.style.transition = "left 0.5s ease-in-out";
    leftElement.style.left = "-110%";
    document.querySelector(".right").style.filter = "blur(0px)";
  });
}
async function musicbar() {
  // if(playing_song.pause)
  // {
  //   return;
  // }
  clearInterval(intervalId);
  const x = document.querySelector(".pointer");
  intervalId = setInterval(() => {
    const progressPercentage =
      (playing_song.currentTime / playing_song.duration) * 100;
    const playbarWidth = x.clientWidth;
    const pointerPosition = (progressPercentage / 100) * playbarWidth;

    x.style.left = `${progressPercentage}%`;

    if (playing_song.ended) {
      clearInterval(intervalId);
      x.style.left = "0%";
      document.getElementById("play_now").src = "music_image/play-circle.svg";
    }
  }, 1);

  const play_bar = document.querySelector(".move_music");
  play_bar.addEventListener("click", (event) => {
    const playbarRect = play_bar.getBoundingClientRect();
    const clickX = (event.clientX - playbarRect.left) / 870;

    x.style.left = `${clickX}%`;
    playing_song.currentTime = clickX * playing_song.duration;
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      playing_song.currentTime -= 5;
      // console.log("left");
    } else if (event.key === "ArrowRight") {
      playing_song.currentTime += 5;
      // console.log("right");
    }
  });
}
async function next_previous() {
  const p = document.getElementById("previous_now");
  const n = document.getElementById("next_now");

  p.addEventListener("click", () => {
    currentSongIndex--; // Move to the previous song
    if (currentSongIndex < 0) {
      currentSongIndex = songLinks.length - 1; // Loop back to the last song
    }
    playSongAtIndex(currentSongIndex);
  });

  n.addEventListener("click", () => {
    currentSongIndex++; // Move to the next song
    if (currentSongIndex >= songLinks.length) {
      currentSongIndex = 0; // Loop back to the first song
    }
    playSongAtIndex(currentSongIndex);
  });
}
async function main() {
  await load_display_songs();
  event_player();
  player_button();
  update_time();
  volume();
  mobile_preview();
  next_previous();
  card_container();
}

main();
