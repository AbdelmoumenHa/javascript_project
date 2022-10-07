//using selectors inside the element

const question = document.querySelectorAll(".question");

question.forEach(function (e) {
  const btn = e.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    question.forEach(function (e1) {
      if (e1 !== e) {
        e1.classList.remove("show-text");
      }
    });
    e.classList.toggle("show-text");
  });
  console.log(btn);
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
