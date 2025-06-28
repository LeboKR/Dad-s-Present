// K.S Makopo Resume.js

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Check for saved theme preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️ Light Mode';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
            themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Print Button Functionality (uncomment if you enable the print button)
    const printButton = document.getElementById('print-button');
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

// Add to your existing JS file
function setProfessionalTitle() {
    const titles = [
        "Civil Engineering Quality Controller",
        "Construction Manager",
        "Surveyor"
    ];
    document.querySelector('.professional-title').textContent = titles[0] + " | " + titles[1];
}

// Call this in your DOMContentLoaded event
setProfessionalTitle();

// Animation on scroll
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    function animateTextChange() {
    const titleElement = document.getElementById('dynamic-title');
    const jobTitles = [
        "Construction Manager",
        "Quality Control Specialist",
        "Certified Plumbing Professional",
        "Project Surveyor"
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % jobTitles.length;
        titleElement.style.opacity = '0';
        
        setTimeout(() => {
            titleElement.textContent = jobTitles[currentIndex];
            titleElement.style.opacity = '1';
            titleElement.style.transition = 'opacity 0.5s ease-in-out';
        }, 500); // Half-second fade-out before changing text
    }, 3000); // Change every 3 seconds
}

// Call this in DOMContentLoaded
animateTextChange();

    // Initialize sections with hidden state
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});