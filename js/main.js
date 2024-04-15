const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];
let actualPhoto = 0;
let functionActive = nextPhoto;
let activeOn = true;
let nextOn = true;
printInDom(images);
printInDomTh(images);
clickTh()
const next = document.querySelector(".my-next");
const prev = document.querySelector(".my-previous");
const active = document.getElementById("my-stop-button");
const invert = document.getElementById("my-order-button");
next.addEventListener("click", function () {
  nextPhoto();
})
prev.addEventListener("click", function () {
  prevPhoto();
})

timer = setInterval(function () {
  functionActive();
}, 3000);
active.addEventListener("click", function () {
  if (activeOn) {
    clearInterval(timer);
    activeOn = false;
  } else {
    timer = setInterval(function () {
      functionActive();
    }, 3000);
    activeOn = true;
  }
})

invert.addEventListener("click", function () {
  if (nextOn) {
    functionActive = prevPhoto;
    nextOn = false;
  } else {
    functionActive = nextPhoto;
    nextOn = true;
  }
})
