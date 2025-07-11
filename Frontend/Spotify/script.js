// console.log("lets write javascript");
// let playing_song = new Audio();
// var temp;
// var soud_value;
// let intervalId;
// let currentSongIndex;
// let songLinks = [];
// let folder;

// const url = "http://127.0.0.1:5500";


// async function get_song_links(folder) {
//   let a = await fetch(`${url}/Music/${folder}`);
//   // console.log(folder);
//   let responce = await a.text();

//   let div = document.createElement("div");
//   div.innerHTML = responce;

//   let as = div.getElementsByTagName("a");

//   let songs = [];

//   for (let i = 0; i < as.length; i++) {
//     const element = as[i];
//     if (element.href.endsWith(".mp3")) {
//       songs.push(element.href.split(`/${folder}/`)[1]);
//     }
//   }

//   return songs;
// }
// async function load_display_songs(list) {
//   //   console.log(songLinks);

//   let songDiv = document.querySelector(".lib");
//   songDiv.innerHTML = "";
//   if (list.length == 0 || !list) {
//     const dd = document.createElement("div");
//     dd.innerHTML = "<div>No songs found in this folder</div>";
//     document.querySelector(".lib").appendChild(dd);
//     return;
//   }
//   // Assuming songLinks contains URL-encoded names
//   for (let i = 0; i < list.length; i++) {
//     // Decode the song name
//     let decodedSongName = decodeURIComponent(list[i]);

//     // Create a new div with the class 'song-list'
//     let songListDiv = document.createElement("div");
//     songListDiv.classList.add("song-list");

//     // Create the img element
//     let img = document.createElement("img");
//     img.src = "image/music.svg";
//     img.width = 20;
//     img.alt = "music-image";

//     // Create the h3 element for the song name
//     let h3 = document.createElement("h3");
//     h3.textContent = decodedSongName; // Set the decoded song name

//     // Create the play button div
//     let playDiv = document.createElement("div");
//     playDiv.classList.add("play-but");
//     playDiv.innerHTML =
//       'Play Now <img width="20px" src="image/play-button-with-ring-thick.svg" alt="play-button">';

//     // Append the elements to the songListDiv
//     songListDiv.appendChild(img);
//     songListDiv.appendChild(h3);
//     songListDiv.appendChild(playDiv);

//     // Append the new songListDiv to the parent container (.lib)
//     songDiv.appendChild(songListDiv);
//   }
// }
// async function volume() {
//   document.querySelector(".volume_image").innerHTML =
//     '<img src="music_image/low_volume.svg" alt="volume">';
//   document.querySelector(".soundbar").innerHTML =
//     '<input id="volume-slider" type="range" min="0" max="1" step="0.01" value="0.2">';
//   playing_song.volume = 0.2;
//   let vol = document.querySelector(".volume_image");
//   let pitch = document.querySelector(".soundbar").firstElementChild;
//   pitch.addEventListener("input", function () {
//     const sliderValue = pitch.value;
//     playing_song.volume = sliderValue;
//     if (playing_song.volume == 0) {
//       vol.firstElementChild.src =
//         "${url}/music_image/mute.svg";
//     } else if (playing_song.volume > 0.5) {
//       vol.firstElementChild.src =
//         "${url}/music_image/high_volume.svg";
//     } else {
//       vol.firstElementChild.src =
//         "${url}/music_image/low_volume.svg";
//     }
//   });
//   if (vol) {
//     vol.addEventListener("click", () => {
//       if (
//         vol.firstElementChild.src !=
//         "${url}/music_image/mute.svg"
//       ) {
//         temp = vol.firstElementChild.src;
//         vol.firstElementChild.src =
//           "${url}/music_image/mute.svg";
//         sound_value = playing_song.volume;
//         playing_song.volume = 0;
//       } else {
//         vol.firstElementChild.src = temp;
//         playing_song.volume = sound_value;
//       }
//     });
//   }
// }
// async function event_player() {
//   const players = document.querySelectorAll(".song-list");
//   // console.log(players);

//   players.forEach((element, index) => {
//     element.addEventListener("click", async () => {
//       playSongAtIndex(index);
//       // console.log(i);
//     });
//   });
// }
// function playSongAtIndex(i) {
//   // console.log(folder);
//   // console.log(songLinks);
//   if (i < 0 || i >= songLinks.length) return;
//   currentSongIndex = i;

//   playing_song.pause();
//   playing_song.src = `${url}/Music/${folder}/${songLinks[i]}`;
//   playing_song.play();
//   musicbar();

//   playing_song.addEventListener("loadedmetadata", () => {
//     let pause_show = document.getElementById("play_now");
//     pause_show.src = "music_image/pause-circle.svg";
//     document.querySelector(".song_title").innerHTML = decodeURIComponent(
//       songLinks[currentSongIndex]
//     );
//     document.querySelector(".live_duration").innerHTML = " 00:00 / 00:00";
//   });
// }
// // async function event_player() {
// //   const players = document.querySelectorAll(".lib .song-list");
// //   // console.log(players)

// //   players.forEach((element) => {
// //     // console.log(element);
// //     element.addEventListener("click", async () => {
// //       playing_song.pause();

// //       playing_song.src = `http://127.0.0.1:5500/Spotify/Music/${
// //         element.querySelector("h3").textContent
// //       }`;
// //       playing_song.play();
// //       musicbar();

// //       playing_song.addEventListener("loadedmetadata", () => {
// //         const durationInSeconds = playing_song.duration;
// //         let pause_show = document.getElementById("play_now");
// //         pause_show.src = "music_image/pause-circle.svg";
// //         document.querySelector(".song_title").innerHTML =
// //           element.querySelector("h3").textContent;
// //         document.querySelector(".live_duration").innerHTML = " 00:00 / 00:00";
// //       });
// //     });
// //   });
// // }
// async function player_button() {
//   const playing = document.getElementById("play_now");
//   // console.log(playing);
//   playing.addEventListener("click", () => {
//     if (
//       playing_song.paused &&
//       document.querySelector(".song_title").innerHTML == ""
//     ) {
//       return;
//     }
//     if (playing_song.paused) {
//       playing_song.play();
//       musicbar();
//       playing.src = "music_image/pause-circle.svg";
//     } else {
//       playing_song.pause();
//       playing.src = "music_image/play-circle.svg";
//     }
//   });
//   document.addEventListener("keydown", function (event) {
//     // Check if the pressed key is the spacebar
//     if (event.key === " ") {
//       event.preventDefault(); // Prevent default spacebar behavior (e.g., scrolling)
//       if (
//         playing_song.paused &&
//         document.querySelector(".song_title").innerHTML == ""
//       ) {
//         return;
//       }
//       if (playing_song.paused) {
//         playing_song.play();
//         playing.src = "music_image/pause-circle.svg";
//       } else {
//         playing_song.pause();
//         playing.src = "music_image/play-circle.svg";
//       }
//     }
//   });
// }
// async function update_time() {
//   function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const secondsLeft = Math.floor(seconds % 60);
//     return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
//   }

//   playing_song.addEventListener("timeupdate", () => {
//     const currentTime = playing_song.currentTime;
//     document.querySelector(".live_duration").innerHTML = `${formatTime(
//       currentTime
//     )} / ${formatTime(playing_song.duration)}`;

//     const mus = document.querySelector(".move_music").firstElementChild;
//     mus.value = playing_song.currentTime / playing_song.duration;
//     // mus.style.transition = "all 1s ease";
//     // requestAnimationFrame(update_time);
//   });
// }
// async function mobile_preview() {
//   const bur = document.querySelector(".burger");
//   const crs = document.querySelector(".cross");

//   bur.addEventListener("click", async () => {
//     const leftElement = document.querySelector(".left");

//     // Apply the transition to the left property
//     leftElement.style.transition = "left 0.5s ease-in-out";
//     leftElement.style.left = "75%";
//     document.querySelector(".right").style.filter = "blur(3px)";
//   });
//   crs.addEventListener("click", async () => {
//     const leftElement = document.querySelector(".left");

//     // Apply the transition to the left property
//     leftElement.style.transition = "left 0.5s ease-in-out";
//     leftElement.style.left = "-110%";
//     document.querySelector(".right").style.filter = "blur(0px)";
//   });
// }
// async function musicbar() {
//   // if(playing_song.pause)
//   // {
//   //   return;
//   // }
//   clearInterval(intervalId);
//   const x = document.querySelector(".pointer");
//   intervalId = setInterval(() => {
//     const progressPercentage =
//       (playing_song.currentTime / playing_song.duration) * 100;
//     const playbarWidth = x.clientWidth;
//     const pointerPosition = (progressPercentage / 100) * playbarWidth;

//     x.style.left = `${progressPercentage}%`;

//     if (playing_song.ended) {
//       clearInterval(intervalId);
//       x.style.left = "0%";
//       document.getElementById("play_now").src = "music_image/play-circle.svg";
//       if (currentSongIndex < songLinks.length - 1) {
//         currentSongIndex++;
//         playSongAtIndex(currentSongIndex);
//       } else {
//         currentSongIndex = 0; // Loop back to the first song
//         playSongAtIndex(currentSongIndex);
//       }
//     }
//   }, 1);

//   const play_bar = document.querySelector(".move_music");
//   play_bar.addEventListener("click", (event) => {
//     const playbarRect = play_bar.getBoundingClientRect();
//     const clickX = (event.clientX - playbarRect.left) / 870;

//     x.style.left = `${clickX}%`;
//     playing_song.currentTime = clickX * playing_song.duration;
//   });

//   document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       playing_song.currentTime -= 5;
//       // console.log("left");
//     } else if (event.key === "ArrowRight") {
//       playing_song.currentTime += 5;
//       // console.log("right");
//     }
//   });
// }
// async function next_previous() {
//   const p = document.getElementById("previous_now");
//   const n = document.getElementById("next_now");

//   p.addEventListener("click", () => {
//     currentSongIndex = currentSongIndex - 1;
//     if (currentSongIndex < 0) {
//       currentSongIndex = songLinks.length - 1;
//     }
//     playSongAtIndex(currentSongIndex);
//   });
//   n.addEventListener("click", () => {
//     currentSongIndex = currentSongIndex + 1;
//     if (currentSongIndex >= songLinks.length) {
//       currentSongIndex = 0;
//     }
//     playSongAtIndex(currentSongIndex);
//   });
// }
// async function load_and_display_card(card) {
//   // console.log(card[1]);
//   if (!card || card.length === 0) {
//     alert("No Songs List Found !!!");
//     return null;
//   }
//   const cardContainer = document.querySelector(".card-cointainer");

//   for (let i = 0; i < card.length; i++) {
//     const imgSrc = `${url}/Music/${card[i]}/Image.jpg`;
//     const cardTitle = card[i];
//     const cd = await fetch(
//       `${url}/Music/${card[i]}/description.txt`
//     );
//     const cardDescription = await cd.text();

//     // Create the 'plalist-card' div
//     const playlistCardDiv = document.createElement("div");
//     playlistCardDiv.classList.add("plalist-card");

//     // Create the 'play' div with an img element inside
//     const playDiv = document.createElement("div");
//     playDiv.classList.add("play", "flex");

//     const playImg = document.createElement("img");
//     playImg.src = "image/play-button.svg";
//     playImg.width = 25;
//     playImg.alt = "play-button";
//     playDiv.appendChild(playImg);

//     // Create the card image element
//     const cardImg = document.createElement("img");
//     cardImg.classList.add("card_image");
//     cardImg.src = imgSrc;
//     cardImg.alt = "picture";

//     // Create the h2 element for the title
//     const h2 = document.createElement("h2");
//     h2.textContent = decodeURIComponent(cardTitle);
//     // h2.textContent = cardTitle;

//     // Create the p element for the description
//     const p = document.createElement("p");
//     p.textContent = cardDescription;

//     // Append the elements to the 'plalist-card' div
//     playlistCardDiv.appendChild(playDiv);
//     playlistCardDiv.appendChild(cardImg);
//     playlistCardDiv.appendChild(h2);
//     playlistCardDiv.appendChild(p);

//     // Append the 'plalist-card' div to the parent container
//     cardContainer.appendChild(playlistCardDiv);
//   }
// }
// async function event_card(card) {
//   // Use block-scoped `let` to ensure `i` is captured correctly
//   for (let i = 0; i < card.length; i++) {
//     const cards = document.querySelectorAll(".plalist-card");
//     cards.forEach((card, index) => {
//       card.addEventListener("click", async () => {
//         // console.log("Card clicked:", index);
//         const h2 = card.querySelector("h2");
//         if (h2) {
//           let f = h2.innerHTML;

//           if (f.includes(" ")) {
//             f = f.replace(/ /g, "%20");
//           }
//           folder = f;
//           console.log(folder);
//           songLinks = await get_song_links(folder);
//           await load_display_songs(songLinks);
//           event_player();
//         }
//       });
//     });
//   }
// }


// async function card_container() {
//   let a = await fetch(`${url}/Music`);
//   let responce = await a.text();
//   // console.log(a);
//   let as = document.createElement("div");
//   as.innerHTML = responce;
//   let lik = as.querySelectorAll("a");
//   let card = [];
//   console.log(as);
//   lik.forEach((link) => {
//     let href = link.getAttribute("href");

//     // Add a check to exclude parent directory link (if present) and only include valid files/folders
//     if (href && href !== "../ " && href.startsWith("/Spotify/Music/")) {
//       let x = href.split("/Music/", [2]);
//       // folder = x[1];
//       card.push(x[1]);
//     }
//   });
//   console.log(card);

//   await load_and_display_card(card);
//   await event_card(card);
//   document.querySelector(".pointer").style.left = "0%";
// }







// async function main() {
//   await card_container();
//   next_previous();
//   player_button();
//   update_time();
//   volume();
//   mobile_preview();
// }

// main();






console.log("lets write javascript");
let playing_song = new Audio();
var temp;
var sound_value;
let intervalId;
let currentSongIndex;
let songLinks = [];
let folder;

const url = "http://127.0.0.1:5500";

async function get_song_links(folder) {
  let a = await fetch(`${url}/Music/${folder}`);
  let responce = await a.text();
  let div = document.createElement("div");
  div.innerHTML = responce;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }
  return songs;
}

async function load_display_songs(list) {
  let songDiv = document.querySelector(".lib");
  songDiv.innerHTML = "";
  if (!list || list.length == 0) {
    const dd = document.createElement("div");
    dd.innerHTML = "<div>No songs found in this folder</div>";
    songDiv.appendChild(dd);
    return;
  }
  for (let i = 0; i < list.length; i++) {
    let decodedSongName = decodeURIComponent(list[i]);
    let songListDiv = document.createElement("div");
    songListDiv.classList.add("song-list");
    let img = document.createElement("img");
    img.src = "image/music.svg";
    img.width = 20;
    img.alt = "music-image";
    let h3 = document.createElement("h3");
    h3.textContent = decodedSongName;
    let playDiv = document.createElement("div");
    playDiv.classList.add("play-but");
    playDiv.innerHTML =
      'Play Now <img width="20px" src="image/play-button-with-ring-thick.svg" alt="play-button">';
    songListDiv.appendChild(img);
    songListDiv.appendChild(h3);
    songListDiv.appendChild(playDiv);
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
      vol.firstElementChild.src = "music_image/mute.svg";
    } else if (playing_song.volume > 0.5) {
      vol.firstElementChild.src = "music_image/high_volume.svg";
    } else {
      vol.firstElementChild.src = "music_image/low_volume.svg";
    }
  });
  if (vol) {
    vol.addEventListener("click", () => {
      if (vol.firstElementChild.src.includes("mute.svg")) {
        vol.firstElementChild.src = temp;
        playing_song.volume = sound_value;
      } else {
        temp = vol.firstElementChild.src;
        vol.firstElementChild.src = "music_image/mute.svg";
        sound_value = playing_song.volume;
        playing_song.volume = 0;
      }
    });
  }
}

async function event_player() {
  const players = document.querySelectorAll(".song-list");
  players.forEach((element, index) => {
    element.addEventListener("click", async () => {
      playSongAtIndex(index);
    });
  });
}

function playSongAtIndex(i) {
  if (i < 0 || i >= songLinks.length) return;
  currentSongIndex = i;
  playing_song.pause();
  playing_song.src = `${url}/Music/${folder}/${songLinks[i]}`;
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

async function player_button() {
  const playing = document.getElementById("play_now");
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
    if (event.key === " ") {
      event.preventDefault();
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
  });
}

async function mobile_preview() {
  const bur = document.querySelector(".burger");
  const crs = document.querySelector(".cross");
  bur.addEventListener("click", async () => {
    const leftElement = document.querySelector(".left");
    leftElement.style.transition = "left 0.5s ease-in-out";
    leftElement.style.left = "75%";
    document.querySelector(".right").style.filter = "blur(3px)";
  });
  crs.addEventListener("click", async () => {
    const leftElement = document.querySelector(".left");
    leftElement.style.transition = "left 0.5s ease-in-out";
    leftElement.style.left = "-110%";
    document.querySelector(".right").style.filter = "blur(0px)";
  });
}

async function musicbar() {
  clearInterval(intervalId);
  const x = document.querySelector(".pointer");
  intervalId = setInterval(() => {
    const progressPercentage =
      (playing_song.currentTime / playing_song.duration) * 100;
    x.style.left = `${progressPercentage}%`;
    if (playing_song.ended) {
      clearInterval(intervalId);
      x.style.left = "0%";
      document.getElementById("play_now").src = "music_image/play-circle.svg";
      if (currentSongIndex < songLinks.length - 1) {
        currentSongIndex++;
        playSongAtIndex(currentSongIndex);
      } else {
        currentSongIndex = 0;
        playSongAtIndex(currentSongIndex);
      }
    }
  }, 1);
  const play_bar = document.querySelector(".move_music");
  play_bar.addEventListener("click", (event) => {
    const playbarRect = play_bar.getBoundingClientRect();
    const clickX = ((event.clientX - playbarRect.left) / playbarRect.width) * 100;
    x.style.left = `${clickX}%`;
    playing_song.currentTime = (clickX / 100) * playing_song.duration;
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      playing_song.currentTime -= 5;
    } else if (event.key === "ArrowRight") {
      playing_song.currentTime += 5;
    }
  });
}

async function next_previous() {
  const p = document.getElementById("previous_now");
  const n = document.getElementById("next_now");
  p.addEventListener("click", () => {
    currentSongIndex--;
    if (currentSongIndex < 0) currentSongIndex = songLinks.length - 1;
    playSongAtIndex(currentSongIndex);
  });
  n.addEventListener("click", () => {
    currentSongIndex++;
    if (currentSongIndex >= songLinks.length) currentSongIndex = 0;
    playSongAtIndex(currentSongIndex);
  });
}

async function load_and_display_card(card) {
  if (!card || card.length === 0) {
    alert("No Songs List Found !!!");
    return null;
  }
  const cardContainer = document.querySelector(".card-cointainer");
  cardContainer.innerHTML = "";
  for (let i = 0; i < card.length; i++) {
    if (!card[i]) continue;
    const imgSrc = `${url}/Music/${card[i]}/Image.jpg`;
    const cardTitle = card[i];
    const cd = await fetch(`${url}/Music/${card[i]}/description.txt`);
    const cardDescription = await cd.text();
    const playlistCardDiv = document.createElement("div");
    playlistCardDiv.classList.add("plalist-card");
    const playDiv = document.createElement("div");
    playDiv.classList.add("play", "flex");
    const playImg = document.createElement("img");
    playImg.src = "image/play-button.svg";
    playImg.width = 25;
    playImg.alt = "play-button";
    playDiv.appendChild(playImg);
    const cardImg = document.createElement("img");
    cardImg.classList.add("card_image");
    cardImg.src = imgSrc;
    cardImg.alt = "picture";
    const h2 = document.createElement("h2");
    h2.textContent = decodeURIComponent(cardTitle);
    const p = document.createElement("p");
    p.textContent = cardDescription;
    playlistCardDiv.appendChild(playDiv);
    playlistCardDiv.appendChild(cardImg);
    playlistCardDiv.appendChild(h2);
    playlistCardDiv.appendChild(p);
    cardContainer.appendChild(playlistCardDiv);
  }
}

async function event_card(card) {
  const cards = document.querySelectorAll(".plalist-card");
  cards.forEach((card, index) => {
    card.addEventListener("click", async () => {
      const h2 = card.querySelector("h2");
      if (h2) {
        let f = h2.innerHTML;
        if (f.includes(" ")) f = f.replace(/ /g, "%20");
        folder = f;
        console.log(folder);
        songLinks = await get_song_links(folder);
        await load_display_songs(songLinks);
        event_player();
      }
    });
  });
}

async function card_container() {
  let a = await fetch(`${url}/Music`);
  let responce = await a.text();
  let as = document.createElement("div");
  as.innerHTML = responce;
  let lik = as.querySelectorAll("a");
  let card = [];
  lik.forEach((link) => {
    let href = link.getAttribute("href");
    if (href && href !== "../" && href.includes("/Music/")) {
      let x = href.split("/Music/");
      if (x[1]) card.push(x[1].replace(/\/$/, ""));
    }
  });
  console.log("Card folders found:", card);
  await load_and_display_card(card);
  await event_card(card);
  document.querySelector(".pointer").style.left = "0%";
}

async function main() {
  await card_container();
  next_previous();
  player_button();
  update_time();
  volume();
  mobile_preview();
}

main();
