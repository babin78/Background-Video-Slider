const menuBtn = document.querySelector(".menu-btn");
const menunavigation = document.querySelector(".navigation");
const videonavbtns = document.querySelectorAll(".nav-btn");
const videoslides = document.querySelectorAll(".video-slide");

const contents = document.querySelectorAll(".content");

menuBtn.addEventListener("click", () => {
  console.log("clicked");
  menuBtn.classList.toggle("active");
  menunavigation.classList.toggle("active");
});

const sliderNav = (manual) => {
  videonavbtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  videoslides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  videoslides[manual].classList.add("active");
  videonavbtns[manual].classList.add("active");
  contents[manual].classList.add("active");
};

videonavbtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

videonavbtns[0].click();
