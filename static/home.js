// get all necessary elements
const sound = document.getElementById("sound");
const links = document.querySelectorAll("ul a");
const audioClick = document.getElementById("audioClick");
const audioHover = document.getElementById("audioHover");
const bgm = document.getElementById("backgroundMusic");

//adjust music volume
bgm.volume = 0.5;

//click listener for the sound icon
sound.addEventListener("click", () => {
  //play background music on click
  bgm.play();

  //toggle mute icon on click
  sound.classList.toggle("fa-volume-up");

  //toggle mute conditional statement
  if (bgm.muted === false) {
    bgm.muted = true;
  } else {
    bgm.muted = false;
  }

  //play sound effect
  clickSound();
});

// sound.addEventListener("click", clickMute);

//event listener for sound icon
sound.addEventListener("mouseenter", hoverSound);

//select all links
for (let i = 0; i < links.length; i++) {
  //click event listener for links
  links[i].addEventListener("click", clickSound);

  //hover event listener for links
  links[i].addEventListener("mouseenter", hoverSound);
}

//click sound effect
function clickSound() {
  audioClick.play();
}

//hover sound effect
function hoverSound() {
  audioHover.play();
}
