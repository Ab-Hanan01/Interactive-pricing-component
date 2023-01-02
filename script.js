const pages = document.querySelector(".pricing>p>span");
const slider = document.querySelector(".slider");
const price = document.querySelector(".price>b");
const barFill = document.querySelector(".fill");
const toggleBtn = document.querySelector(".bill>div");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("toggle");
  sliderResponse();
});
const sliderResponse = function () {
  if (slider.value == 0) {
    pages.textContent = "10K";
    price.textContent = "8$";
    barFill.style.width = "0%";
  } else if (slider.value == 1) {
    pages.textContent = "50K";
    price.textContent = "12$";
    barFill.style.width = "25%";
  } else if (slider.value == 2) {
    pages.textContent = "100K";
    price.textContent = "16$";
    barFill.style.width = "50%";
  } else if (slider.value == 3) {
    pages.textContent = "500K";
    price.textContent = "24$";
    barFill.style.width = "75%";
  } else if (slider.value == 4) {
    pages.textContent = "1M";
    price.textContent = "36$";
    barFill.style.width = "100%";
  }
  if (toggleBtn.classList.contains("toggle")) {
    if (slider.value == 0) {
      price.textContent = "6$";
    } else if (slider.value == 1) {
      price.textContent = "9$";
    } else if (slider.value == 2) {
      price.textContent = "12$";
    } else if (slider.value == 3) {
      price.textContent = "18$";
    } else if (slider.value == 4) {
      price.textContent = "27$";
    }
  }
};
price.textContent = "16$";
slider.addEventListener("input", sliderResponse);
