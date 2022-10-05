const body = document.querySelector("body");

const images = ["airport1.jpg","airport2.jpg","airport3.jpg","airport4.jpg"]

const chooseImg = images[Math.floor(Math.random()*images.length)];

function backgroundImg(){
    const image = new Image();
    image.src=`img/${chooseImg}`;
    image.classList.add('bgImg');
    body.appendChild(image);
}
backgroundImg();
