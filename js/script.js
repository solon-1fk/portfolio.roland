// Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

// Close menu when clicking a nav link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Sticky Header
window.onscroll = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Active Link Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing Animation
const typed = new Typed('.type-animation', {
    strings: ['Web Designer', 'Graphic Designer', 'UI/UX Designer', 'Frontend Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// Certificate Data - You can add more certificates here
const certificatesData = [
    {
        title: "Certiport",
        description: "JavaScript Fundamentals",
        image: "CERTIPORT.jpg",
        link: "CERTIPORT.jpg"
    },
     {
        title: "Frontend Development",
        description: "Introduction to Frontend Development",
        image: "certificate 11.png",
        link: "certificate 11.png"
    },
    {
        title: "UI/UX Design",
        description: "Using Figma and Adobe",
        image: "certificate 6.jpg",
        link: "certificate 6.jpg"
    },
    {
        title: "UI/UX Design",
        description: "Priciples of UI/UX Design",
        image: "certificate 12.png",
        link: "certificate 12.png"
    },
     {
        title: "UI/UX Design",
        description: "Master Web Design with Figma",
        image: "certificate 9.png",
        link: "certificate 9.png"
    },
    {
        title: "Visual Elements",
        description: "Visual Elements of User Interface Design",
        image: "certificate 10.png",
        link: "certificate 10.png"
    },
    {
        title: "CSS",
        description: "CSS Crash Course for Beginners",
        image: "certificate 1.jpg",
        link: "certificate 1.jpg"
    },
    {
        title: "AI",
        description: "Gerative AI Essentials",
        image: "certificate 7.png",
        link: "certificate 7.png"
    },
    {
        title: "React",
        description: "React: All You Need to Know",
        image: "certificate 2.jpg",
        link: "certificate 2.jpg"
    },
    {
        title: "HTML , CSS , JavaScript",
        description: "Introduction to HTML, CSS, and JavaScript",
        image: "certificate 8.png",
        link: "certificate 8.png"
    },
    {
        title: "Project Management",
        description: "Basics for Non Project Managers",
        image: "certificate 3.jpg",
        link: "certificate 3.jpg"
    },
    
    {
        title: "C#",
        description: "Learning C# Coding Basics",
        image: "certificate 4.jpg",
        link: "certificate 4.jpg"
    },
     
    {
        title: "HTML & CSS",
        description: "From Beginning to Advanced",
        image: "certificate 5.jpg",
        link: "certificate 5.jpg"
    },
    
     
 
  
    // Add more certificates as needed
    // Example:
    // {
    //     title: "JavaScript",
    //     description: "Advanced JavaScript Concepts",
    //     image: "certificate7.jpg",
    //     link: "certificate7.jpg"
    // }
];

// Function to render certificates
function renderCertificates(showAll = false) {
    const certificateGrid = document.querySelector('.certificate-grid');
    certificateGrid.innerHTML = '';
    
    const certificatesToShow = showAll ? certificatesData : certificatesData.slice(0, 6);
    
    certificatesToShow.forEach(cert => {
        const certificateItem = document.createElement('div');
        certificateItem.className = 'certificate-item';
        certificateItem.innerHTML = `
            <img src="${cert.image}" alt="${cert.title} Certificate" loading="lazy">
            <div class="certificate-overlay">
                <h4>${cert.title}</h4>
                <p>${cert.description}</p>
                <a href="${cert.link}" target="_blank"><i class='bx bx-link-external'></i></a>
            </div>
        `;
        certificateGrid.appendChild(certificateItem);
    });
}

// Toggle Certificates
const toggleBtn = document.getElementById('toggleCertificates');
let showAllCertificates = false;

toggleBtn.addEventListener('click', () => {
    const certificatesSection = document.getElementById('certificates');
    const sectionTop = certificatesSection.getBoundingClientRect().top + window.pageYOffset;

    // If hiding, scroll first before changing content
    if (showAllCertificates) {
        window.scrollTo({
            top: sectionTop - 100, // adjust offset if needed
            behavior: 'smooth'
        });

        setTimeout(() => {
            showAllCertificates = false;
            renderCertificates(showAllCertificates);
            toggleBtn.querySelector('.btn-text').textContent = 'View More Certificates';
        }, 500); // wait for scroll before collapsing
    } else {
        // Expand immediately
        showAllCertificates = true;
        renderCertificates(showAllCertificates);
        toggleBtn.querySelector('.btn-text').textContent = 'Show Less Certificates';

        // Optional: scroll to the section
        certificatesSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Initial render of certificates
renderCertificates();


// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(() => {
            alert('Submission failed. Please check your internet connection.');
        });
    });
}


// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Scroll Reveal Animations
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Target elements and specify animation parameters
ScrollReveal().reveal('.home-content, .heading, .section-title', { 
    origin: 'top',
    interval: 200 
});

ScrollReveal().reveal('.home-content p, .about-text p, .service-text, .resume-item, .contact-form', { 
    origin: 'bottom',
    interval: 200 
});

ScrollReveal().reveal('.home-content .btn-box, .about-img, .service-box, .portfolio-content, .slide-items', { 
    origin: 'left',
    interval: 200 
});

ScrollReveal().reveal('.social-media, .skills, .resume-column, .contact-info', { 
    origin: 'right',
    interval: 200 
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
});