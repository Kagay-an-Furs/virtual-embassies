document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.welcome-content, .single-ambassador-container');

    elementsToAnimate.forEach(el => el.classList.add('animate-on-load'));

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
    });

    elementsToAnimate.forEach(el => observer.observe(el));
});