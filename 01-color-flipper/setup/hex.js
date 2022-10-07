const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = makeColor();
  color.textContent = makeColor();
});

function makeColor() {
  let color =
    "#" +
    hex[getRandomNumber2()] +
    hex[getRandomNumber1()] +
    hex[getRandomNumber2()] +
    hex[getRandomNumber1()] +
    hex[getRandomNumber2()] +
    hex[getRandomNumber1()];

  return color;
}

function getRandomNumber1() {
  return Math.floor(Math.random() * 10);
}
function getRandomNumber2() {
  return Math.floor(Math.random() * 6) + 10;
}
