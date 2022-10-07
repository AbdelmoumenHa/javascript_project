let count = 0;

const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const value = document.getElementById("value");

increase.addEventListener("click", function () {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  }
});
decrease.addEventListener("click", function () {
  count--;
  value.textContent = count;
  if (count < 0) {
    value.style.color = "red";
  }
});
reset.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
  if (count === 0) {
    value.style.color = "black";
  }
});
