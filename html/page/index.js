const slider = document.querySelector(".gallery__list");
let oneImage = slider.width <= 560;

let ro = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const cr = entry.contentRect;

    if (cr.width <= 560) {
      oneImage = true;
    } else {
      oneImage = false;
    }

    updateSlider();
  }
});

ro.observe(slider);

const prevButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");
const slides = Array.from(slider.querySelectorAll(".gallery__item"));
const slideCount = slides.length;
let currentIndex = 1;
let prevIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  if (prevIndex === 0) {
    currentIndex = prevIndex;
    prevIndex = slideCount - 1;
  } else {
    --prevIndex;
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  }
  updateSlider();
}

function showNextSlide() {
  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  if (oneImage) {
    slider.appendChild(slides[currentIndex]);
    slides[currentIndex].style.display = "block";
  } else {
    slider.appendChild(slides[prevIndex]);
    slider.appendChild(slides[currentIndex]);

    slides[prevIndex].style.display = "block";
    slides[currentIndex].style.display = "block";
  }
}

updateSlider();
