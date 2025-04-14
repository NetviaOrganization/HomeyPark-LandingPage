const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

// menu de movil
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('.menu-icon').textContent = 
        navLinks.classList.contains('active') ? '✕' : '☰';
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.getAttribute('href') !== '#') {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calculate offset considering the fixed header
                const headerHeight = header.offsetHeight;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle.querySelector('.menu-icon').textContent = '☰';
            }
        }
    });
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .user-card, .problem-content, .problem-image');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
};

// Add animation classes
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const elementsToAnimate = document.querySelectorAll('.feature-card, .step, .user-card');
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in-up');
    });
    
    // Form validation for contact forms (if added later)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic validation
            let valid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (valid) {
                
                form.innerHTML = `
                    <div class="success-message">
                        <h3>¡Gracias por contactarnos!</h3>
                        <p>Te responderemos a la brevedad posible.</p>
                    </div>
                `;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
        });
    }
});


const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .fade-in-up {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .feature-card:nth-child(1) { transition-delay: 0.1s; }
    .feature-card:nth-child(2) { transition-delay: 0.2s; }
    .feature-card:nth-child(3) { transition-delay: 0.3s; }
    .feature-card:nth-child(4) { transition-delay: 0.4s; }
    .feature-card:nth-child(5) { transition-delay: 0.5s; }
    .feature-card:nth-child(6) { transition-delay: 0.6s; }
    
    .step:nth-child(1) { transition-delay: 0.1s; }
    .step:nth-child(2) { transition-delay: 0.2s; }
    .step:nth-child(3) { transition-delay: 0.3s; }
    .step:nth-child(4) { transition-delay: 0.4s; }
    .step:nth-child(5) { transition-delay: 0.5s; }
    .step:nth-child(6) { transition-delay: 0.6s; }
`;
document.head.appendChild(animationStyle);

window.addEventListener('scroll', animateOnScroll);

// Initial check for elements in view
window.addEventListener('load', animateOnScroll);