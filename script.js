document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const sceneButton = document.getElementById("scene-switcher");
    const musicButton = document.getElementById("music-toggle");
    const music = document.getElementById("background-music");

    let currentScene = 1;
    const maxScenes = 4;
    body.classList.add("scene-1");

    sceneButton.addEventListener("click", () => {
        body.classList.add("fade-scene");
        setTimeout(() => {
            body.classList.remove(`scene-${currentScene}`);
            currentScene = (currentScene % maxScenes) + 1;
            body.classList.add(`scene-${currentScene}`);
            body.classList.remove("fade-scene");
        }, 300);
    });

    let playing = false;
    musicButton.addEventListener("click", () => {
        if (playing) {
            music.pause();
            musicButton.textContent = "Phát nhạc";
        } else {
            music.play().catch(() => { musicButton.textContent = "Nhấn để phát nhạc!"; });
            musicButton.textContent = "Tắt nhạc";
        }
        playing = !playing;
    });

    const bubbleContainer = document.getElementById("bubble-container");
    function createBubble() {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.style.left = Math.random() * window.innerWidth + "px";
        bubble.style.width = bubble.style.height = Math.random() * 20 + 10 + "px";
        bubbleContainer.appendChild(bubble);
        setTimeout(() => bubble.remove(), 6000);
    }
    setInterval(createBubble, 700);
});
