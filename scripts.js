document.addEventListener('DOMContentLoaded', function() {
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

        heroLeftArrow.addEventListener('click', function() {
            let newIndex = currentHeroSlide - 1;
            if (newIndex < 0) newIndex = heroSlides.length - 1;
            updateHeroSlide(newIndex);
        });

        heroRightArrow.addEventListener('click', function() {
            let newIndex = currentHeroSlide + 1;
            if (newIndex >= heroSlides.length) newIndex = 0;
            updateHeroSlide(newIndex);
        });

        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                updateHeroSlide(index);
            });
        });
    }

   // Portfolio Slider Functionality - FIXED VERSION
const portfolioTrack = document.querySelector('.portfolio-track');
const portfolioCards = document.querySelectorAll('.portfolio-card');
const portfolioDots = document.querySelectorAll('.portfolio-dots span');
const portfolioPrevArrow = document.querySelector('.prev-arrow');
const portfolioNextArrow = document.querySelector('.next-arrow');

console.log('Portfolio cards found:', portfolioCards.length);
console.log('Portfolio dots found:', portfolioDots.length);

if (portfolioTrack && portfolioCards.length > 0 && portfolioPrevArrow && portfolioNextArrow) {
    let currentPortfolioSlide = 0;
    const totalPortfolioSlides = portfolioCards.length;

    function updatePortfolioSlider() {
        // Calculate the width to move (25% per card since each card is 25% width)
        const slidePercentage = currentPortfolioSlide * 25;
        portfolioTrack.style.transform = `translateX(-${slidePercentage}%)`;
        
        // Update dots
        portfolioDots.forEach(dot => dot.classList.remove('active'));
        if (portfolioDots[currentPortfolioSlide]) {
            portfolioDots[currentPortfolioSlide].classList.add('active');
        }
    }

    portfolioPrevArrow.addEventListener('click', function() {
        currentPortfolioSlide--;
        if (currentPortfolioSlide < 0) currentPortfolioSlide = totalPortfolioSlides - 1;
        updatePortfolioSlider();
        console.log('Previous - Current slide:', currentPortfolioSlide);
    });

    portfolioNextArrow.addEventListener('click', function() {
        currentPortfolioSlide++;
        if (currentPortfolioSlide >= totalPortfolioSlides) currentPortfolioSlide = 0;
        updatePortfolioSlider();
        console.log('Next - Current slide:', currentPortfolioSlide);
    });

    portfolioDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentPortfolioSlide = index;
            updatePortfolioSlider();
            console.log('Dot clicked - Current slide:', currentPortfolioSlide);
        });
    });

    console.log('Portfolio slider initialized successfully!');
} else {
    console.error('Portfolio slider elements missing!');
    console.log('Track:', portfolioTrack);
    console.log('Prev arrow:', portfolioPrevArrow);
    console.log('Next arrow:', portfolioNextArrow);
}
    // Team Slider Functionality
    const teamTrack = document.querySelector('.team-track');
    const teamSlides = document.querySelectorAll('.team-slide');
    const teamPrevArrow = document.querySelector('.team-prev');
    const teamNextArrow = document.querySelector('.team-next');
    
    if (teamTrack && teamSlides.length > 0 && teamPrevArrow && teamNextArrow) {
        let currentTeamSlide = 0;
        const totalTeamSlides = teamSlides.length;

        function updateTeamSlider() {
            teamTrack.style.transform = `translateX(-${currentTeamSlide * 100}%)`;
        }

        teamPrevArrow.addEventListener('click', function() {
            currentTeamSlide--;
            if (currentTeamSlide < 0) currentTeamSlide = totalTeamSlides - 1;
            updateTeamSlider();
        });

        teamNextArrow.addEventListener('click', function() {
            currentTeamSlide++;
            if (currentTeamSlide >= totalTeamSlides) currentTeamSlide = 0;
            updateTeamSlider();
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    console.log('FAQ Questions found:', faqQuestions.length);
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach((question, index) => {
            question.addEventListener('click', function() {
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
        mobileMenuBtn.addEventListener('click', function() {
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
                link.addEventListener('click', function(e) {
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
        document.addEventListener('click', function(e) {
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

    console.log('All scripts initialized successfully!');
});
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.classList.toggle('active');
}

//chat widget functionality
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, 'user');
        input.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            addMessage('Thanks for your message! Our team will get back to you soon.', 'bot');
        }, 1000);
    }
}

function addMessage(text, sender) {
    const messagesContainer = document.querySelector('.chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Close chat when clicking outside
document.addEventListener('click', function(event) {
    const chatWidget = document.querySelector('.floating-chat-widget');
    const chatBox = document.getElementById('chatBox');
    
    if (!chatWidget.contains(event.target) && chatBox.classList.contains('active')) {
        chatBox.classList.remove('active');
    }
});

// Send message on Enter key
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
//  FUNCTION TO REDIRECT TO WHATSAPP
function redirectToWhatsApp(userMessage) {
   
    const phoneNumber = "+254714781259"; 
    
    const fullMessage = `CodCentral Inquiry: ${userMessage}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation message
    addMessage('Opening WhatsApp for you...', 'bot');
}

// ✅ UPDATE YOUR EXISTING sendMessage FUNCTION
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        // Add user message to chat
        addMessage(message, 'user');
        input.value = '';
        
        // Redirect to WhatsApp instead of simulated response
        redirectToWhatsApp(message);
    }
}
// Pricing Section Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to pricing buttons
    const pricingButtons = document.querySelectorAll('.pricing-btn');
    
    pricingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
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
});

// SIMPLER FIX - Continuous looping version
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const members = document.querySelectorAll('.team-member');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentIndex = 0;
    const totalMembers = members.length;
    
    // Create dots for all members
    members.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateCarousel() {
        const memberWidth = members[0].offsetWidth + 30;
        const translateX = -currentIndex * memberWidth;
        track.style.transform = `translateX(${translateX}px)`;
        
        // Update dots - handle looping for dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalMembers;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalMembers) % totalMembers;
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance
    let autoSlide = setInterval(nextSlide, 5000);
    
    // Pause auto-advance on hover
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
    
    // Handle window resize
    window.addEventListener('resize', updateCarousel);
    
    // Initialize
    updateCarousel();
});
// Popup Notification Functions
function showPopup() {
    // Check if user has previously dismissed the popup
    if (!localStorage.getItem('popupDismissed')) {
        const popup = document.getElementById('popupNotification');
        popup.classList.add('active');
    }
}

function closePopup() {
    const popup = document.getElementById('popupNotification');
    popup.classList.remove('active');
}

function closePopupPermanently() {
    closePopup();
    // Remember dismissal for 7 days
    localStorage.setItem('popupDismissed', 'true');
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    setTimeout(() => {
        localStorage.removeItem('popupDismissed');
    }, sevenDays);
}

function openChatFromPopup() {
    closePopup();
    // Open your existing chat widget
    toggleChat(); // This should be your existing chat toggle function
}

// Show popup after 3 seconds delay
function initPopup() {
    // Wait for page to load completely
    setTimeout(() => {
        showPopup();
    }, 3000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initPopup();
});

// Close popup when clicking on background
document.getElementById('popupNotification').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});
// Chat-specific Popup Functions
function showChatPopup() {
    // Check if user has previously dismissed the popup
    if (!localStorage.getItem('chatPopupDismissed')) {
        const popup = document.getElementById('chatPopupNotification');
        popup.classList.add('active');
        
        // Auto-hide after 8 seconds
        setTimeout(() => {
            closeChatPopup();
        }, 8000);
    }
}

function closeChatPopup() {
    const popup = document.getElementById('chatPopupNotification');
    popup.classList.remove('active');
}

function closeChatPopupPermanently() {
    closeChatPopup();
    // Remember dismissal for 24 hours
    localStorage.setItem('chatPopupDismissed', 'true');
    const twentyFourHours = 24 * 60 * 60 * 1000;
    setTimeout(() => {
        localStorage.removeItem('chatPopupDismissed');
    }, twentyFourHours);
}

// Show popup after delay
function initChatPopup() {
    // Wait for page to load
    setTimeout(() => {
        showChatPopup();
    }, 4000); // Show after 4 seconds
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initChatPopup();
});

// Update your existing chat icon to close the popup when clicked
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.classList.toggle('active');
    
    // Close the popup when chat is opened
    closeChatPopupPermanently();
}
// Enhanced version with better user tracking
function initChatPopup() {
    // Don't show if user has already interacted with chat
    if (localStorage.getItem('chatUsed')) return;
    
    // Show after 4 seconds OR when user is about to leave
    setTimeout(showChatPopup, 4000);
    
    // Show on scroll (when user engages with page)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500 && !this.popupShown) {
            showChatPopup();
            this.popupShown = true;
        }
    }, { once: true });
}

// Track when user actually uses the chat
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        redirectToWhatsApp(message);
        
        // Mark chat as used
        localStorage.setItem('chatUsed', 'true');
    }
}
// === CHAT FUNCTIONS ===
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.classList.toggle('active');
    closeChatPopup(); // Close popup when chat opens
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        redirectToWhatsApp(message);
    }
}

function addMessage(text, sender) {
    const messagesContainer = document.querySelector('.chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function redirectToWhatsApp(userMessage) {
    // ⚠️ REPLACE WITH YOUR ACTUAL NUMBER
    const phoneNumber = "1234567890";
    const fullMessage = `CodeDistrict: ${userMessage}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    addMessage('Opening WhatsApp...', 'bot');
}

// === POPUP FUNCTIONS ===
function showChatPopup() {
    // Check if popup was previously dismissed
    if (!localStorage.getItem('chatPopupDismissed')) {
        const popup = document.getElementById('chatPopupNotification');
        if (popup) {
            popup.classList.add('active');
            
            // Auto-hide after 6 seconds
            setTimeout(() => {
                closeChatPopup();
            }, 6000);
        }
    }
}

function closeChatPopup() {
    const popup = document.getElementById('chatPopupNotification');
    if (popup) {
        popup.classList.remove('active');
    }
}

function closeChatPopupPermanently() {
    closeChatPopup();
    localStorage.setItem('chatPopupDismissed', 'true');
}

// === EVENT LISTENERS ===
document.addEventListener('DOMContentLoaded', function() {
    // Show popup after 3 seconds
    setTimeout(showChatPopup, 3000);
    
    // Send message on Enter key
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Close chat when clicking outside
    document.addEventListener('click', function(event) {
        const chatWidget = document.querySelector('.floating-chat-widget');
        const chatBox = document.getElementById('chatBox');
        
        if (chatWidget && chatBox && !chatWidget.contains(event.target) && chatBox.classList.contains('active')) {
            chatBox.classList.remove('active');
        }
    });
});

// Make functions globally available
window.toggleChat = toggleChat;
window.sendMessage = sendMessage;
window.closeChatPopup = closeChatPopup;
window.closeChatPopupPermanently = closeChatPopupPermanently;

// Debug: Check if elements are found
document.addEventListener('DOMContentLoaded', function() {
    console.log('Chat popup element:', document.getElementById('chatPopupNotification'));
    console.log('Chat box element:', document.getElementById('chatBox'));
    console.log('Chat icon element:', document.querySelector('.chat-icon'));
});