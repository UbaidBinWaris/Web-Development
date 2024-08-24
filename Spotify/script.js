console.log("lets write javascript");
let playing_song = new Audio();

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
  let songLinks = await get_song_links();
  //   console.log(songLinks);

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
async function event_player() {
  const players = document.querySelectorAll(".lib .song-list");
  // console.log(players)

  players.forEach((element) => {
    // console.log(element);
    element.addEventListener("click", async () => {
      playing_song.pause();

      playing_song.src = `http://127.0.0.1:5500/Spotify/Music/${
        element.querySelector("h3").textContent
      }`;
      playing_song.play();

      playing_song.addEventListener("loadedmetadata", () => {
        const durationInSeconds = playing_song.duration;
        let pause_show = document.getElementById("play_now");
        pause_show.src = "music_image/pause-circle.svg";
        document.querySelector(".song_title").innerHTML =
          element.querySelector("h3").textContent;
        document.querySelector(".live_duration").innerHTML = " 00:00 / 00:00";
      });
      
    });
  });
}
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
  });
}
async function mobile_preview() {
  const bur = document.querySelector(".burger");
  bur.addEventListener("click", async () => {
    console.log("hello")
  });
}
async function main() {
  await load_display_songs();
  event_player();

  player_button();
  update_time();
  // document.addEventListener("DOMContentLoaded", mobile_preview);
  mobile_preview();
}

main();


