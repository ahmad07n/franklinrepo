export default function decorate(block) {
    const rows = [...block.children];
    rows.forEach((row, r) => {
        if (r === 0) {
            const nextbtn = document.createElement('button');
            nextbtn.classList.add('btn');
            nextbtn.classList.add('btn-next');
            const node = document.createTextNode(row.textContent);
            nextbtn.append(node);
            row.replaceWith(nextbtn);
        } else if (r === rows.length - 1) {
            const prebtn = document.createElement('button');
            prebtn.classList.add('btn');
            prebtn.classList.add('btn-prev');
            const node = document.createTextNode(row.textContent);
            prebtn.append(node);
            row.replaceWith(prebtn);
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
    nextSlide.addEventListener('click', function () {
        // Check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        // Move slide by -100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });

    // Select previous slide button
    const prevSlide = document.querySelector('.btn-prev');

    // Add event listener and navigation functionality for previous slide
    // (You can complete this part based on your requirements)
}
