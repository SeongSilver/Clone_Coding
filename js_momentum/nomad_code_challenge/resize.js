const body = document.querySelector("body");
const hello = document.querySelector("h1");

hello.style.color = "rgb(255,255,255)";

function handleSresize() {
    const windowSize = window.innerWidth;

    if (windowSize > 0 && windowSize <= 500) {
        body.style.backgroundColor = "rgb(46, 140, 213)";
    } else if (windowSize > 500 && windowSize <= 800) {
        body.style.backgroundColor = "rgb(143, 78, 173)";
    } else {
        body.style.backgroundColor = "rgb(238, 188, 18)";
    }
}

window.addEventListener("resize", handleSresize);
