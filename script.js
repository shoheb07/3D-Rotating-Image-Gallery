const gallery = document.getElementById("gallery");

let angle = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        angle += 60;
    }
    if (e.key === "ArrowLeft") {
        angle -= 60;
    }
    gallery.style.animation = "none";
    gallery.style.transform = `rotateY(${angle}deg)`;
});
