document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded, initializing scripts...');

    // Hero Slider Functionality
    const heroSlides = [
        {
            title: "Transforming Ideas Into Digital Solutions",
            description: "We bring your vision to life through cutting-edge websites and apps blending creativity, technology, and strategy to deliver results that matter.",
            image: "images/digi.jpg"
        },
        {
            title: "Custom Solutions For Your Business",
            description: "Every brand is unique, your digital solution should be too. From sleek websites to powerful web applications, we build what your business truly needs to grow.",
            image: "images/digi2.png"
        },
        {
            title: "Driving Growth Through Technology",
            description: "Empower your brand with innovative digital tools that expand your reach, engage customers, and accelerate your business growth.",
            image: "images/digi1.jpg"
        }
    ];

    let currentHeroSlide = 0;
    const heroTitle = document.querySelector('.hero-text h2');
    const heroDescription = document.querySelector('.hero-text p');
    const heroImage = document.querySelector('.hero-card img');
    const heroDots = document.querySelectorAll('.hero-dots span');
    const heroLeftArrow = document.querySelector('.hero-arrow.left-arrow');
    const heroRightArrow = document.querySelector('.hero-arrow.right-arrow');

    if (heroTitle && heroDescription && heroImage && heroLeftArrow && heroRightArrow) {
        function updateHeroSlide(index) {
            heroTitle.textContent = heroSlides[index].title;
            heroDescription.textContent = heroSlides[index].description;
            heroImage.src = heroSlides[index].image;

            heroDots.forEach(dot => dot.classList.remove('active'));
            heroDots[index].classList.add('active');

            currentHeroSlide = index;
        }

        heroLeftArrow.addEventListener('click', function () {
            let newIndex = currentHeroSlide - 1;
            if (newIndex < 0) newIndex = heroSlides.length - 1;
            updateHeroSlide(newIndex);
        });

        heroRightArrow.addEventListener('click', function () {
            let newIndex = currentHeroSlide + 1;
            if (newIndex >= heroSlides.length) newIndex = 0;
            updateHeroSlide(newIndex);
        });

        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', function () {
                updateHeroSlide(index);
            });
        });
    }

    // Portfolio Slider Functionality - RESPONSIVE VERSION
    const portfolioTrack = document.querySelector('.portfolio-track');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const portfolioDotsContainer = document.querySelector('.portfolio-dots');
    const portfolioPrevArrow = document.querySelector('.prev-arrow');
    const portfolioNextArrow = document.querySelector('.next-arrow');

    console.log('Portfolio cards found:', portfolioCards.length);

    if (portfolioTrack && portfolioCards.length > 0 && portfolioPrevArrow && portfolioNextArrow) {
        let currentPortfolioSlide = 0;
        const totalPortfolioSlides = portfolioCards.length;

        // Generate dots dynamically based on number of cards
        function createDots() {
            if (!portfolioDotsContainer) return;

            // Clear existing dots
            portfolioDotsContainer.innerHTML = '';

            // Create new dots
            for (let i = 0; i < totalPortfolioSlides; i++) {
                const dot = document.createElement('span');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', function () {
                    currentPortfolioSlide = i;
                    updatePortfolioSlider();
                    console.log('Dot clicked - Current slide:', currentPortfolioSlide);
                });
                portfolioDotsContainer.appendChild(dot);
            }
        }

        function getSlidePercentage() {
            // Check if mobile (you can use the same breakpoint as your CSS)
            if (window.innerWidth <= 768) {
                return 100; // 100% per slide on mobile (1 card)
            } else {
                return 25; // 25% per slide on desktop (4 cards)
            }
        }

        function updatePortfolioSlider() {
            const slidePercentage = getSlidePercentage();
            const translateX = currentPortfolioSlide * slidePercentage;
            portfolioTrack.style.transform = `translateX(-${translateX}%)`;

            // Update dots
            const portfolioDots = document.querySelectorAll('.portfolio-dots span');
            portfolioDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentPortfolioSlide);
            });
        }

        // Initialize dots
        createDots();

        portfolioPrevArrow.addEventListener('click', function () {
            currentPortfolioSlide--;
            if (currentPortfolioSlide < 0) currentPortfolioSlide = totalPortfolioSlides - 1;
            updatePortfolioSlider();
            console.log('Previous - Current slide:', currentPortfolioSlide);
        });

        portfolioNextArrow.addEventListener('click', function () {
            currentPortfolioSlide++;
            if (currentPortfolioSlide >= totalPortfolioSlides) currentPortfolioSlide = 0;
            updatePortfolioSlider();
            console.log('Next - Current slide:', currentPortfolioSlide);
        });

        // Update on window resize
        window.addEventListener('resize', updatePortfolioSlider);

        console.log('Portfolio slider initialized successfully!');
    } else {
        console.error('Portfolio slider elements missing!');
        console.log('Track:', portfolioTrack);
        console.log('Prev arrow:', portfolioPrevArrow);
        console.log('Next arrow:', portfolioNextArrow);
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    console.log('FAQ Questions found:', faqQuestions.length);

    if (faqQuestions.length > 0) {
        faqQuestions.forEach((question, index) => {
            question.addEventListener('click', function () {
                console.log('FAQ clicked:', index + 1);
                const answer = this.nextElementSibling;
                const icon = this.querySelector('i');
                const isActive = answer.classList.contains('active');

                // Close all answers and reset icons
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('active');
                });

                document.querySelectorAll('.faq-question i').forEach(i => {
                    i.style.transform = 'rotate(0deg)';
                });

                // If the clicked question wasn't active, open it
                if (!isActive) {
                    answer.classList.add('active');
                    if (icon) {
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            });
        });
        console.log('FAQ initialized successfully!');
    } else {
        console.warn('No FAQ questions found on page');
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-button');
    const header = document.querySelector('header');

    if (mobileMenuBtn && header) {
        mobileMenuBtn.addEventListener('click', function () {
            header.classList.toggle('mobile-menu-active');

            const icon = this.querySelector('i');
            if (icon) {
                if (header.classList.contains('mobile-menu-active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Mobile Dropdown Functionality
    const dropdowns = document.querySelectorAll('.dropdown');

    if (dropdowns.length > 0) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');

            if (link) {
                link.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();
                        dropdown.classList.toggle('active');

                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });
                    }
                });
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.dropdown')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length > 0 && mobileMenuBtn && header) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    if (!link.parentElement.classList.contains('dropdown')) {
                        header.classList.remove('mobile-menu-active');
                        const icon = mobileMenuBtn.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                    else if (link.parentElement.classList.contains('dropdown-menu') ||
                        link.closest('.dropdown-menu')) {
                        header.classList.remove('mobile-menu-active');
                        const icon = mobileMenuBtn.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animated Counter Function
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    // Intersection Observer for metrics
    const metricsSection = document.querySelector('.metrics-section');
    if (metricsSection) {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const metricNumbers = entry.target.querySelectorAll('.metric-number');
                    metricNumbers.forEach(number => {
                        const target = parseInt(number.getAttribute('data-target'));
                        animateCounter(number, target);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(metricsSection);
    }

    // Pricing Section Interactions
    const pricingButtons = document.querySelectorAll('.pricing-btn');

    if (pricingButtons.length > 0) {
        pricingButtons.forEach(button => {
            button.addEventListener('click', function (e) {
                // Add click feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);

                // Track which plan was selected (for analytics)
                const planName = this.closest('.pricing-card').querySelector('h3').textContent;
                console.log(`Selected plan: ${planName}`);
            });
        });

        // Add intersection observer for pricing cards animation
        const pricingCards = document.querySelectorAll('.pricing-card');

        const pricingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Set initial state for animation
        pricingCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            card.style.transitionDelay = `${index * 0.1}s`;

            pricingObserver.observe(card);
        });
    }

    // TEAM CAROUSEL INITIALIZATION
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselMembers = document.querySelectorAll('.team-member');
    const carouselPrevBtn = document.querySelector('.prev-btn');
    const carouselNextBtn = document.querySelector('.next-btn');
    const carouselDotsContainer = document.querySelector('.carousel-dots');

    if (carouselTrack && carouselMembers.length > 0 && carouselPrevBtn && carouselNextBtn && carouselDotsContainer) {
        console.log('Team carousel found, initializing...');
        
        const membersArray = Array.from(carouselMembers);
        const totalMembers = membersArray.length;
        let currentIndex = 0;
        let isTransitioning = false;
        const cloneCount = 3;

        // Clone last items and prepend
        for (let i = totalMembers - 1; i >= totalMembers - cloneCount; i--) {
            const clone = membersArray[i].cloneNode(true);
            clone.classList.add('clone');
            carouselTrack.insertBefore(clone, carouselTrack.firstChild);
        }

        // Clone first items and append
        for (let i = 0; i < cloneCount; i++) {
            const clone = membersArray[i].cloneNode(true);
            clone.classList.add('clone');
            carouselTrack.appendChild(clone);
        }

        // Start at the first real item
        currentIndex = cloneCount;

        // Create dots
        carouselDotsContainer.innerHTML = '';
        for (let i = 0; i < totalMembers; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            carouselDotsContainer.appendChild(dot);
        }

        const dots = carouselDotsContainer.querySelectorAll('.dot');
        const allCards = carouselTrack.querySelectorAll('.team-member');

        function getMemberWidth() {
            const gap = window.innerWidth <= 480 ? 15 : (window.innerWidth <= 768 ? 20 : 30);
            return allCards[0].offsetWidth + gap;
        }

        function updateCarousel(smooth = true) {
            const memberWidth = getMemberWidth();
            const translateX = -currentIndex * memberWidth;

            if (smooth) {
                carouselTrack.style.transition = 'transform 0.5s ease-in-out';
            } else {
                carouselTrack.style.transition = 'none';
            }

            carouselTrack.style.transform = `translateX(${translateX}px)`;

            if (!smooth) {
                void carouselTrack.offsetWidth;
            }

            const dotIndex = ((currentIndex - cloneCount) % totalMembers + totalMembers) % totalMembers;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === dotIndex);
            });
        }

        function nextSlide() {
            if (isTransitioning) return;
            isTransitioning = true;
            console.log('Next slide - current:', currentIndex);

            currentIndex++;
            updateCarousel(true);

            setTimeout(() => {
                if (currentIndex >= totalMembers + cloneCount) {
                    currentIndex = cloneCount;
                    updateCarousel(false);
                }
                isTransitioning = false;
            }, 550);
        }

        function prevSlide() {
            if (isTransitioning) return;
            isTransitioning = true;
            console.log('Prev slide - current:', currentIndex);

            currentIndex--;
            updateCarousel(true);

            setTimeout(() => {
                if (currentIndex < cloneCount) {
                    currentIndex = totalMembers + cloneCount - 1;
                    updateCarousel(false);
                }
                isTransitioning = false;
            }, 550);
        }

        function goToSlide(index) {
            if (isTransitioning) return;
            isTransitioning = true;
            currentIndex = index + cloneCount;
            updateCarousel(true);
            setTimeout(() => {
                isTransitioning = false;
            }, 550);
        }

        // Event listeners
        carouselPrevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
        });

        carouselNextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
        });

        // Auto-advance
        let autoSlide = setInterval(nextSlide, 5000);

        carouselTrack.addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });

        carouselTrack.addEventListener('mouseleave', () => {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, 5000);
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateCarousel(false);
            }, 100);
        });

        // Initialize
        updateCarousel(false);
        console.log('Team carousel initialized successfully!');
    } else {
        console.log('Team carousel elements not found');
    }

    console.log('All scripts initialized successfully!');
});

