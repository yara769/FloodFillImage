// / <reference lib="dom" />
console.log("jkhgj");
const board = document.querySelector(`.board`);
let N = 6;
let newColor = "rgb(255, 0, 0)";
for (let i = 0; i < N * N; i++) {
  console.log("ngfvhhghdfc");
  let pixel = document.createElement("div") as HTMLDivElement;
  pixel.classList.add("pixel");
  pixel.style.background = "rgb(33, 24, 159)";
  let row = Math.floor(i / N);
  let coloum = i % N;
  if (coloum === 3) {
    pixel.style.backgroundColor = "rgb(20, 153, 31)";
  } else {
    pixel.style.backgroundColor = "rgb(255, 255, 255)";
  }
  pixel.dataset.row = `${row}`;
  pixel.dataset.coloum = `${coloum}`;

  pixel.addEventListener("click", function () {
    let ro = parseInt(this.dataset.row!);
    let col = parseInt(this.dataset.coloum!);
   
    let originalColor = this.style.backgroundColor;
    if (originalColor !== newColor) {
      CheckColor(ro, col, originalColor, newColor);
    }
  });
  if (board) {
    board.appendChild(pixel);
  }
}

const CheckColor = (
  r: number,
  c: number,
  originalColor: string,
  newColor: string,
): void => {
  if (r < 0 || r > N - 1 || c < 0 || c > N - 1) return;
  let pixel = document.querySelector(
    `.pixel[data-row="${r}"][data-coloum="${c}"]`,
  ) as HTMLElement | null;

  if (!pixel) return;

 
  let currentColor = pixel.style.backgroundColor;

  if (currentColor === originalColor && currentColor !== newColor) {
    pixel.style.backgroundColor = newColor;
    CheckColor(r - 1, c, originalColor, newColor);
    CheckColor(r + 1, c, originalColor, newColor);
    CheckColor(r, c - 1, originalColor, newColor);
    CheckColor(r, c + 1, originalColor, newColor);
  }
};
