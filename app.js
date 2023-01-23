const SMILE = document.querySelector(".smile");
const EYEWHITE = document.querySelectorAll(".eyewhite");
const BIGSMILE = document.querySelectorAll(".bigsmile");
const NOSMILE = document.querySelector(".nosmile");

const scrollAndSmile = () => {
  currentScroll =
    window.scrollY /
    (document.documentElement.offsetHeight - window.innerHeight);
  SMILE.style.opacity = currentScroll;

  EYEWHITE.forEach((eye) => {
    eye.style.opacity = currentScroll;
  });

  if (currentScroll > 0.01) {
    NOSMILE.style.opacity = "0";
    NOSMILE.style.width = "0";
  } else {
    NOSMILE.style.opacity = "1";
    NOSMILE.style.width = "8vmin";
  }

  BIGSMILE.forEach((e) => {
    if (currentScroll < 0.97) {
      e.style.opacity = "0";
      e.style.width = "0";
    } else {
      e.style.opacity = "1";
      e.style.width = "4vmin";
    }
  });
};

window.addEventListener("scroll", scrollAndSmile);
