const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const BACKGROUND_IMAGE = "bgImage";
//HTML에 JS로 태그 추가해주는 것
const bgImage = document.createElement("img");
bgImage.classList.add(BACKGROUND_IMAGE);
bgImage.src= `img/${chosenImage}`;

document.body.appendChild(bgImage);