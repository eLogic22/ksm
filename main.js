/* ==========================================================
   KSM Cricket Academy - Main JS
   Mobile menu, hero slider, scroll effects, counters
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Auto-inject Scroll Progress + Back-to-Top (every page) ---- */
    if (!document.querySelector('.scroll-progress')) {
        const sp = document.createElement('div');
        sp.className = 'scroll-progress';
        document.body.insertBefore(sp, document.body.firstChild);
    }

    if (!document.querySelector('.back-to-top')) {
        const btt = document.createElement('button');
        btt.className = 'back-to-top';
        btt.setAttribute('aria-label', 'Back to top');
        btt.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        document.body.appendChild(btt);
    }

    /* ---- Mobile Menu Toggle ---- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    /* ---- Hero Slider ---- */
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let slideInterval = null;

    function showSlide(i) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        if (slides[i]) slides[i].classList.add('active');
        if (dots[i]) dots[i].classList.add('active');
        currentSlide = i;
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }

    if (slides.length > 0) {
        showSlide(0);
        slideInterval = setInterval(nextSlide, 5000);

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                showSlide(idx);
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });
    }

    /* ---- Animated Counters ---- */
    const counters = document.querySelectorAll('.stat-number');

    const startCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const stepTime = 30;
        const steps = duration / stepTime;
        const inc = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += inc;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.floor(current).toLocaleString() + suffix;
        }, stepTime);
    };

    if ('IntersectionObserver' in window && counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        counters.forEach(c => observer.observe(c));
    } else {
        counters.forEach(c => startCounter(c));
    }

    /* ---- Reveal on scroll (fade-up, fade-left, fade-right, zoom) ---- */
    const revealEls = document.querySelectorAll('.reveal, .fade-up');

    if ('IntersectionObserver' in window && revealEls.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        revealEls.forEach(el => revealObserver.observe(el));
    }

    /* ---- Scroll Progress Bar ---- */
    const scrollProgress = document.querySelector('.scroll-progress');
    const backToTop      = document.querySelector('.back-to-top');
    const siteHeader     = document.querySelector('.site-header');

    function onScroll() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress  = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (scrollProgress) scrollProgress.style.width = progress + '%';

        if (backToTop) {
            if (scrollTop > 400) backToTop.classList.add('visible');
            else                 backToTop.classList.remove('visible');
        }

        if (siteHeader) {
            if (scrollTop > 30) siteHeader.classList.add('scrolled');
            else                siteHeader.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---- Back to Top click ---- */
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- Set current year in footer ---- */
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---- Form Submission Demo ---- */
    document.querySelectorAll('form[data-demo]').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const original = btn ? btn.textContent : '';
            if (btn) {
                btn.disabled = true;
                btn.textContent = 'Submitting...';
            }
            setTimeout(() => {
                alert('Thank you! Your submission has been received. Our team will contact you shortly.');
                form.reset();
                if (btn) {
                    btn.disabled = false;
                    btn.textContent = original;
                }
            }, 800);
        });
    });
});
