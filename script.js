const body = document.body;
const colorCode = document.getElementById("colorCode");

body.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
    colorCode.style.color = randomColor; 
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}