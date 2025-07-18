// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
});
// Set Professional Title Dynamically

// Professional Title Rotator
const professionalTitles = [
    "Construction Manager",
    "Site Agent",
    "Civil Engineer",
    "Project Coordinator",
    "Quality Controller"
];

// Project Card Image Hover Effect
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const imgContainer = card.querySelector('.project-img');
        const mainImg = card.querySelector('.project-img img');
        const hoverImg = card.querySelector('.project-img .hover-img');
        
        // Create hover image element if it doesn't exist
        if (!hoverImg && mainImg) {
            const hoverSrc = mainImg.getAttribute('data-hover-src');
            if (hoverSrc) {
                const hoverImg = document.createElement('img');
                hoverImg.src = hoverSrc;
                hoverImg.alt = mainImg.alt + ' - Additional View';
                hoverImg.classList.add('hover-img');
                imgContainer.appendChild(hoverImg);
            }
        }

        // Hover effects
        card.addEventListener('mouseenter', function() {
            const hoverImg = this.querySelector('.hover-img');
            if (hoverImg) {
                hoverImg.style.opacity = '1';
                mainImg.style.opacity = '0';
            }
        });

        card.addEventListener('mouseleave', function() {
            const hoverImg = this.querySelector('.hover-img');
            if (hoverImg) {
                hoverImg.style.opacity = '0';
                mainImg.style.opacity = '1';
            }
        });
    });
});
const titleElements = document.querySelectorAll('.professional-title');
let currentIndex = 0;

function rotateTitles() {
    // Update all elements with the class
    titleElements.forEach(element => {
        element.textContent = professionalTitles[currentIndex];
        element.style.opacity = 0;
        
        // Fade-in animation
        setTimeout(() => {
            element.style.transition = "opacity 0.5s ease";
            element.style.opacity = 1;
        }, 100);
    });
    
    // Increment index or reset
    currentIndex = (currentIndex + 1) % professionalTitles.length;
}

// Rotate every 3 seconds (3000ms)
setInterval(rotateTitles, 3000);

// Initialize immediately
rotateTitles();

// Call the function to set the professional title on page load
setProfessionalTitle();


// Smooth Scrolling for Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active link
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
        
        // Scroll to section
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        const filterValue = button.dataset.filter;
        projectCards.forEach(card => {
            card.style.display = (filterValue === 'all' || card.dataset.category === filterValue) 
                ? 'block' 
                : 'none';
        });
    });
});

// Gallery Modal
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const imgAlt = item.querySelector('img').alt;
        
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent page scrolling
    });
});

// Close Modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Active Link on Scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Simple Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .gallery-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.project-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease';
});

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);