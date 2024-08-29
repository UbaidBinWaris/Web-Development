let x= document.querySelector(".pointer");
const c= document.querySelector(".mus");
document.getElementsByTagName(Audio).play;
let intervalId;

let p=document.querySelector(".play");

p.addEventListener("click", function() {
    clearInterval(intervalId);

    // Set an interval to update the pointer position every 100 milliseconds
    intervalId = setInterval(() => {
        // Calculate the progress percentage and update the pointer position
        const progressPercentage = (c.currentTime / c.duration) * 100;
        const playbarWidth = document.querySelector(".playbar").clientWidth;
        const pointerPosition = (progressPercentage / 100) * playbarWidth;

        x.style.left = `${pointerPosition}px`;

        // Stop the interval when the audio ends
        if (c.ended) {
            clearInterval(intervalId);
            x.style.left = '0px'; // Reset the pointer position when the audio ends
        }
    }, 100); // Update every 100 milliseconds (can be adjusted for smoother animation)
});