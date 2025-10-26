
        // // Smooth scrolling for navigation links
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     });
        // });

        // // Navbar scroll effect
        // window.addEventListener('scroll', function() {
        //     const navbar = document.getElementById('navbar');
        //     if (window.scrollY > 50) {
        //         navbar.classList.add('scrolled');
        //     } else {
        //         navbar.classList.remove('scrolled');
        //     }
        // });

        // // Intersection Observer for fade-in animations
        // const observerOptions = {
        //     threshold: 0.1,
        //     rootMargin: '0px 0px -50px 0px'
        // };

        // const observer = new IntersectionObserver(function(entries) {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             entry.target.classList.add('visible');
        //         }
        //     });
        // }, observerOptions);

        // // Observe all fade-in elements
        // document.querySelectorAll('.fade-in').forEach(el => {
        //     observer.observe(el);
        // });

        // // Animate skill bars when they come into view
        // const skillObserver = new IntersectionObserver(function(entries) {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             const progressBars = entry.target.querySelectorAll('.skill-progress');
        //             progressBars.forEach(bar => {
        //                 bar.style.width = bar.style.width || '0%';
        //             });
        //         }
        //     });
        // }, { threshold: 0.5 });

        // document.querySelectorAll('.skill-category').forEach(el => {
        //     skillObserver.observe(el);
        // });

        // // Form submission
        // document.querySelector('form').addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     alert('Thank you for your message! I will get back to you soon.');
        //     this.reset();
        // });

        // // Add dynamic typing effect to hero section
        // function typeWriter(element, text, speed = 50) {
        //     let i = 0;
        //     element.innerHTML = '';
        //     function type() {
        //         if (i < text.length) {
        //             element.innerHTML += text.charAt(i);
        //             i++;
        //             setTimeout(type, speed);
        //         }
        //     }
        //     type();
        // }

        // // Initialize typing effect after page loads
        // window.addEventListener('load', function() {
        //     setTimeout(() => {
        //         const heroTitle = document.querySelector('.hero h1');
        //         const originalText = heroTitle.textContent;
        //         typeWriter(heroTitle, originalText, 30);
        //     }, 1000);

        // });
