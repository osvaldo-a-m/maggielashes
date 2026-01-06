// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// AOS Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// Gallery images
const galleryImages = [
    {
        alt: 'Extensiones de pestañas volumen ruso',
        category: 'lashes',
        img: 'gallery-1.jpg',
    },
    {
        alt: 'Diseño de cejas perfectas',
        category: 'brows',
        img: 'gallery-2.jpg',
    },
    {
        alt: 'Pestañas clásicas naturales',
        category: 'lashes',
        img: 'gallery-3.jpg',
    },
    {
        alt: 'Microblading cejas',
        category: 'brows',
        img: 'gallery-4.jpg',
    },
    {
        alt: 'Tratamiento facial skincare',
        category: 'skincare',
        img: 'gallery-5.jpg',
    },
    {
        alt: 'Megavolumen pestañas',
        category: 'lashes',
        img: 'gallery-6.jpg',
    },
    {
        alt: 'Laminado de cejas',
        category: 'brows',
        img: 'gallery-7.jpg',
    },
    {
        alt: 'Extensiones híbridas',
        category: 'lashes',
        img: 'gallery-8.jpg',
    }
];

// Populate gallery
const galleryGrid = document.getElementById('galleryGrid');
galleryImages.forEach((img, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.setAttribute('data-aos', 'fade-up');
    galleryItem.setAttribute('data-aos-delay', (index % 3) * 100);

    galleryItem.innerHTML = `
        <img src="gallery-${index + 1}.jpg" alt="${img.alt}" loading="lazy">
        <div class="gallery-overlay">
            <span style="color: white; font-size: 1.5rem;">✨</span>
        </div>
    `;

    galleryGrid.appendChild(galleryItem);

    // Observe the newly created gallery item for AOS animations
    observer.observe(galleryItem);
});

// Form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Show success message
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto. 💜');
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
