const chevronLeft = document.querySelectorAll(".chevron-left");
const chevronRight = document.querySelectorAll(".chevron-right");
const test0 = document.querySelector("#testimonial-0");
const test1 = document.querySelector("#testimonial-1");
const test2 = document.querySelector("#testimonial-2");

let testimonial = 0;

console.log(chevronLeft);

for (let i = 0; i < chevronLeft.length; i++) {
  chevronLeft[i].addEventListener("click", () => {
    if (testimonial == 0) {
      test0.classList.add("hidden");
      test2.classList.remove("hidden");
      testimonial = 2;
    } else if (testimonial == 1) {
      test1.classList.add("hidden");
      test0.classList.remove("hidden");
      testimonial = 0;
    } else if (testimonial == 2) {
      test2.classList.add("hidden");
      test1.classList.remove("hidden");
      testimonial = 1;
    }
  });
}

for (let i = 0; i < chevronRight.length; i++) {
  chevronRight[i].addEventListener("click", () => {
    if (testimonial == 0) {
      test0.classList.add("hidden");
      test1.classList.remove("hidden");
      testimonial = 1;
    } else if (testimonial == 1) {
      test1.classList.add("hidden");
      test2.classList.remove("hidden");
      testimonial = 2;
    } else if (testimonial == 2) {
      test2.classList.add("hidden");
      test0.classList.remove("hidden");
      testimonial = 0;
    }
  });
}
