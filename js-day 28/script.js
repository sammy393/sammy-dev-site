function changeImage() {
    const img = document.getElementById("myImage");
    img.src = "https://picsum.photos/200?random=" + Math.floor(Math.random() * 100);
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}
