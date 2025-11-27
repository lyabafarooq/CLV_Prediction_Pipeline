document.addEventListener('DOMContentLoaded', () => {
    // Function to handle scroll-triggered fade-in animations
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px" // Start 100px before reaching the element
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions); 
    document.addEventListener('DOMContentLoaded', () => {
    // ---------------------- 1. SCROLL SPY LOGIC ----------------------
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.report-section, .authors-section');
    const stickyElement = document.querySelector('.justification-box');
    const mlMethodologySection = document.getElementById('ml-methodology');
    const mlCol = document.querySelector('.ml-col'); // The column containing the Pre-processing list
    const backToTopBtn = document.getElementById('backToTopBtn');

    const updateActiveLink = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjusted for fixed navbar height
            if (window.scrollY >= sectionTop) {


    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});
