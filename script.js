document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero CTA button smooth scroll
    const heroCtaButton = document.querySelector('#hero .cta-button');
    if (heroCtaButton) {
        heroCtaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    }

    // Conceptual newsletter signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Thank you for your interest! ${emailInput.value} has been added to our mailing list (conceptually).`);
                emailInput.value = ''; // Clear the input field
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

