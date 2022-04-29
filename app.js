const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  boxesContainer.classList.toggle("big");
});

// let coordinates = [
//   { x: 0, y: 0 },
//   { x: -1, y: 0 },
//   { x: -2, y: 0 },
//   { x: -3, y: 0 },
//   { x: 0, y: -1 },
//   { x: -1, y: -1 },
//   { x: -2, y: -1 },
//   { x: -3, y: -1 },
//   { x: 0, y: -2 },
//   { x: -1, y: -2 },
//   { x: -2, y: -2 },
//   { x: -3, y: -2 },
//   { x: 0, y: -3 },
//   { x: -1, y: -3 },
//   { x: -2, y: -3 },
//   { x: -3, y: -3 },
// ];

function createBoxes() {
  for (let m = 0; m < 4; m++) {
    for (let n = 0; n < 4; n++) {
      const box = document.createElement("div");
      box.classList.add("box");
      // console.log(div);
      box.style.backgroundPosition = `${-n * 125}px ${-m * 125}px`;
      boxesContainer.appendChild(box);

      // console.log(`${m * -1 * 125}px ${n * -1 * 125}px`);
    }
  }
}

createBoxes();
