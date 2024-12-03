


// Select the hero section
const serviceSection = document.querySelector('.services ');
const heroSection = document.querySelector('.section-hero ');
const areaSection = document.querySelector('.service-area-section ');

// Options for the observer
const options = {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Trigger when at least 10% of the hero section is visible
    rootMargin: '0px' // No margin adjustments
};

// Callback function for the observer
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target); // Stop observing after reveal
        }
    });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Start observing the hero section
observer.observe(serviceSection);
observer.observe(heroSection);
observer.observe(areaSection);


// nav stick
function userScroll() {
    const navi = document.querySelector('.navi');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navi.classList.remove('hidden');
            navi.classList.add('sticky-top');

        } else {
            navi.classList.add('hidden');
            navi.classList.remove('sticky-top');

        }

    });
}

document.addEventListener('DOMContentLoaded', userScroll);


