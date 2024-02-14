export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row, r) => {
    if (r === 0) {
      // ... (same as before)
    } else if (r === rows.length - 1) {
      // ... (same as before)
    } else {
      row.classList.add('slide');
      [...row.children].forEach((col, c) => {
        if (c === 1) {
          col.classList.add('slide-text');
        }
      });
    }
  });

  const slides = document.querySelectorAll('.slide');

  // Loop through slides and set each slide's translateX
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  // Select next slide button
  const nextSlide = document.querySelector('.btn-next');

  // Current slide counter
  let curSlide = 0;
  // Maximum number of slides
  const maxSlide = slides.length - 1;

  // Add event listener and navigation functionality
  nextSlide.addEventListener('click', () => {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide += 1;
    }
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });

  // Select previous slide button
  const prevSlide = document.querySelector('.btn-prev');

  // Add event listener and navigation functionality for previous slide
  // (You can complete this part based on your requirements)
}
//
