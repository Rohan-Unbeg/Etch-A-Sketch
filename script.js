const container = document.getElementById("container");
const output = document.getElementById("output");
const range = document.getElementById("range");
const random = document.getElementById("random");
const reset = document.getElementById("reset");
let isDrawing = false;
let randomColor = false;
let currentBox = null; // Initialize currentBox


function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function updateGrid() {
    const noOfBoxes = range.value;
    var boxSize = 400 / noOfBoxes;
    container.innerHTML = "";

    output.innerHTML = range.value;

    for (let i = 0; i < noOfBoxes; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);

        for (let j = 0; j < noOfBoxes; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;

            column.appendChild(box);
        }
    }
    // Add event listeners to all boxes
    const boxes = document.querySelectorAll(".box"); // Get all boxes after they are created
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            if (isDrawing) {
                if (randomColor) {
                    box.style.backgroundColor = getRandomColor();
                } else {
                    box.classList.add("box-black"); // Add black color on hover
                }
            }
        });
    });
}

updateGrid();



document.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

range.oninput = updateGrid;

random.addEventListener("click", () => {
    randomColor = !randomColor;
    random.textContent = randomColor ? "Random ON" : "Random OFF";
});

reset.addEventListener("click", () => {
    updateGrid();
});
