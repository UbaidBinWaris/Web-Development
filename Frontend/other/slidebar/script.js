document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".open-btn");
    const closeBtn = document.querySelector(".close-btn");
    const leftSidebar = document.querySelector(".left");
  
    // Open the sidebar
    openBtn.addEventListener("click", function () {
        console.log("working")
      leftSidebar.classList.add("show");
    });
  
    // Close the sidebar
    closeBtn.addEventListener("click", function () {
      leftSidebar.classList.remove("show");
    });
  });
  console.log("hi");
  