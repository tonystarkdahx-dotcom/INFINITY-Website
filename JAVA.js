function createSnowflakes() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflake = document.createElement('div');
  
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // You can use other symbols like '●' or '✦'
    snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size
  
    snowContainer.appendChild(snowflake);
  
    // Remove the snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
  }
  // Generate snowflakes at intervals
  setInterval(createSnowflakes, 200);


// Function to check if an element is visible in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to apply animations to elements in Section 1
function animateSection1() {
    const elementsToAnimateSection1 = document.querySelectorAll('.tagline, .name, .role, .portfolio-link, .arrow');
    elementsToAnimateSection1.forEach((el, index) => {
        if (!el.classList.contains('visible')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            setTimeout(() => {
                el.style.transition = 'opacity 3s ease, transform 5s ease'; // Slower transition (3 seconds)
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.classList.add('visible'); // Add 'visible' class to prevent re-animation
            }, index * 700); // Increased delay for slower staggered effect (700ms)
        }
    });
}

// Function to apply animations to elements in Section 2
function animateSection2() {
    const elementsToAnimateSection2 = document.querySelectorAll('.portfolio-section .text-content h1, .portfolio-section .text-content p, .portfolio-section .video-wrapper img, .portfolio-section .caption');
    elementsToAnimateSection2.forEach((el, index) => {
        if (!el.classList.contains('visible')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            setTimeout(() => {
                el.style.transition = 'opacity 3s ease, transform 3s ease'; // Slower transition (3 seconds)
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.classList.add('visible'); // Add 'visible' class to prevent re-animation
            }, index * 700); // Increased delay for slower staggered effect (700ms)
        }
    });

    // Add bounce effect to the caption in Section 2
    const captionElement = document.querySelector('.portfolio-section .caption');
    if (captionElement && !captionElement.classList.contains('bounce')) {
        setTimeout(() => {
            captionElement.classList.add('bounce');
        }, 2500); // Delayed bounce for slower appearance (2.5 seconds)
    }
}

// Function to apply animations to elements in Section 3
function animateSection3() {
    const bioTexts = document.querySelectorAll('.bio-text, .approach-text');
    bioTexts.forEach((text, index) => {
        if (!text.classList.contains('visible')) {
            text.style.opacity = '0';
            text.style.transform = 'translateY(40px)';
            setTimeout(() => {
                text.style.transition = 'opacity 3s ease, transform 3s ease'; // Slower transition (3 seconds)
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)';
                text.classList.add('visible'); // Add 'visible' class to prevent re-animation
            }, index * 800); // Increased delay for slower staggered effect (800ms)
        }
    });
}

// Function to trigger animations for all sections on scroll
function triggerAnimationsOnScroll() {
    // Check and trigger Section 1 animation
    const section1 = document.querySelector('.section1');
    if (section1 && isInViewport(section1)) {
        animateSection1();
    }

    // Check and trigger Section 2 animation
    const section2 = document.querySelector('.section2');
    if (section2 && isInViewport(section2)) {
        animateSection2();
    }

    // Check and trigger Section 3 animation
    const section3 = document.querySelector('.section3');
    if (section3 && isInViewport(section3)) {
        animateSection3();
    }
}

// Smooth scroll to next section when arrow is clicked
function setupArrowClick() {
    const arrow = document.querySelector('.arrow');
    if (arrow) {
        arrow.addEventListener('click', () => {
            const nextSection = document.querySelector('.portfolio-section');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Initialize animations on page load
window.addEventListener('load', () => {
    setupArrowClick();
});

// Trigger animations on scroll
window.addEventListener('scroll', triggerAnimationsOnScroll);
// Fade-in animation for the Education Section
const educationSection = document.querySelector('.education-section');

// Observer to trigger fade-in animation
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                educationSection.classList.add('fade-in-visible');
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
);

// Observe the section
observer.observe(educationSection);
document.addEventListener('DOMContentLoaded', () => {
    const formFields = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formFields.forEach((field, index) => {
        field.style.opacity = '0';
        field.style.transition = `opacity 0.5s ease ${index * 0.3}s`;
        setTimeout(() => (field.style.opacity = '1'), index * 300);
    });
});
// Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
