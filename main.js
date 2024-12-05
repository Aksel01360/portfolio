document.addEventListener('DOMContentLoaded', () => {
    // Gestion des sections
    const sections = document.querySelectorAll('main section');
    const buttons = document.querySelectorAll('.nav-buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');

            sections.forEach(section => {
                section.style.display = 'none';
            });

            const sectionToShow = document.getElementById(targetSection);
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
            }
        });
    });

    // Gestion du carousel
    const slides = document.querySelectorAll('.carousel .slide');
    let currentIndex = 0;

    document.getElementById('prev').addEventListener('click', () => {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].style.display = 'block';
    });

    document.getElementById('next').addEventListener('click', () => {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'block';
    });
});










  




    








  
  
  
  
  