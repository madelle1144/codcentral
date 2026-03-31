import React from 'react';
import Header from './components/Header.jsx';
import HeroSlider from './components/HeroSlider.jsx';
import PortfolioSlider from './components/PortfolioSlider.jsx';
import MetricsSection from './components/MetricsSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import TeamCarousel from './components/TeamCarousel.jsx';

const BASE = import.meta.env.BASE_URL;

function App() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="container announcement-content">
          <div className="scrolling-text">
            <span>🚀 Special Offer: Get 20% off on all web development projects this December Holiday! Limited time only</span>
          </div>
          <div className="container announcement-content">
            <div className="contact-info">
              <span>LATEST NEWS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>We offer a comprehensive range of digital services to help your business thrive in the online world.</p>
          </div>
          <div className="services-grid">
            {[
              {
                img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: 'fas fa-laptop-code', title: 'Web Design',
                desc: 'Beautiful, responsive websites that capture your brand essence and engage your audience with modern design principles and user-friendly interfaces.',
              },
              {
                img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: 'fas fa-code', title: 'Web Development',
                desc: 'Robust, scalable web applications built with the latest technologies and best practices for optimal performance and security.',
              },
              {
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: 'fas fa-search', title: 'SEO Optimization',
                desc: 'Make your site credible by improving your search engine rankings and drive organic traffic to your website with proven SEO strategies.',
              },
              {
                img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: 'fas fa-palette', title: 'Logo Design',
                desc: 'Memorable logos that represent your brand identity and make a lasting impression across all platforms and media.',
              },
              {
                img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: 'fas fa-globe', title: 'Custom Websites & Portals',
                desc: 'Tailored solutions for specific business needs, from e-commerce to membership portals with custom functionality.',
              },
              {
                img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                icon: 'fas fa-mobile-alt', title: 'Web Apps',
                desc: 'Progressive web applications that work seamlessly across all devices and platforms with native-app-like experience.',
              },
            ].map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-image">
                  <img src={s.img} alt={s.title} />
                </div>
                <div className="service-content">
                  <div className="service-icon"><i className={s.icon}></i></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#portfolio" className="service-btn">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <PortfolioSlider />

      {/* Metrics Section */}
      <MetricsSection />

      {/* Case Study Section */}
      <section className="section" id="case-study">
        <div className="container">
          <div className="section-title">
            <h2>Case Study</h2>
            <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
              How we helped an NGO create their online presence and donor engagement.
            </p>
          </div>
          <div className="case-study-content">
            <div className="case-study-row">
              <div className="case-study-text">
                <h3>The Challenge</h3>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  Client: Claires Organisation Kenya<br />Project: Website Design &amp; Development
                </p>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  Claires Organisation Is an Ngo based in Dandora Phase 5, Nairobi Kenya. The Organisation has a
                  population of 1000 pupils, 450 pupils are sponsored hence the Ngo needed extra fundraising to
                  meet their daily needs. They had no online presence, making it hard for them to reach potential
                  donors and share their mission and vision. Their fundraising efforts relied entirely on physical
                  events and word-of-mouth, which limited visibility and growth.
                </p>
              </div>
              <div className="case-study-images">
                <img src={`${BASE}images/Stress.jpg`} alt="Challenge" />
              </div>
            </div>
            <div className="case-study-row reverse">
              <div className="case-study-images">
                <img src={`${BASE}images/claire.jpg`} alt="New Website" height="180" />
                <img src={`${BASE}images/met.png`} alt="Metrics" height="180" />
                <img src={`${BASE}images/met1.png`} alt="Donor Evidence" height="180" />
              </div>
              <div className="case-study-text">
                <h3>The Solution</h3>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  CodCentral stepped in to craft a modern, mobile-responsive website that showcased the
                  organization&apos;s story, ongoing projects, and donation channels. We focused on a clean,
                  trustworthy design with simple navigation to make it easy for visitors to connect and
                  contribute.<br />Key Highlights:<br />📌 Mobile-first responsive layout<br />📌 Donation
                  Form<br />📌 Project gallery and success stories<br />📌 SEO-friendly structure for better
                  visibility
                </p>
                <h3>Impact</h3>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  Within weeks of launch, Claires Organisation reported a{' '}
                  <strong>surge in engagement and new donor inquiries</strong>. Their website became a central hub
                  for updates, transparency, and outreach strengthening trust and expanding their donor base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section quote-process" id="quote">
        <div className="container">
          <div className="section-title">
            <h2>Our Process</h2>
          </div>
          <div className="process-cards">
            {[
              {
                step: 1, title: 'Discovery and Consultation',
                text: 'At CodCentral, we begin by connecting deeply with your business to fully align with your mission and vision. Through a call or physical meeting, we learn your story, mission, ideas, goals, strengths, and challenges so we can craft a digital assistant (your website) that truly represents your purpose and helps your brand grow beyond limits.',
              },
              {
                step: 2, title: 'Ideation & Planning',
                text: 'Once we understand your journey, we move into the strategy phase. Here, we brainstorm ideas, collect visuals, videos, and text, then map out how your story will appear online. This step ensures your website doesn\'t just look good but communicates clearly and converts visitors into loyal customers.',
              },
              {
                step: 3, title: 'Design and Agreement',
                text: "We believe clarity builds confidence. That's why before designing, we sign a transparent freelancing agreement that protects both sides. Then, our creative team develops 3 unique design concepts that reflect your identity — together, we refine and select the perfect look for your digital presence.",
              },
              {
                step: 4, title: 'Development & Deposit',
                text: 'Once your design is approved, we officially begin development after a 50% deposit. Our developers bring your chosen design to life using clean, optimized code — ensuring speed, security, and mobile responsiveness. By the end of this phase, you will see your dream website transforming into a living digital experience.',
              },
              {
                step: 5, title: 'Review and Deployment',
                text: "After development, we schedule a final review session. You will test everything, give feedback, and once you are fully satisfied, we collect the remaining balance and deploy your website live. We don't just hand over a website, we hand over a system that keeps working for you around the clock.",
              },
              {
                step: 6, title: 'Launch and Growth',
                text: "Congratulations! 🎉 Your digital presence is now live and working for you 24/7. But we don't stop there we guide you on how to use your site for visibility, SEO ranking, and engagement. From this moment, your website becomes your silent brand ambassador — selling, educating, and growing your business nonstop.",
              },
            ].map(p => (
              <div className="process-card" data-step={p.step} key={p.step}>
                <h3>{p.title}</h3>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#contactUs" className="btn">Start Your Project Today</a>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section" id="technologies">
        <div className="container">
          <div className="section-title">
            <h2>Technologies We Use</h2>
            <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
              We leverage the latest tools and technologies to deliver cutting-edge solutions for our clients.
            </p>
          </div>
          <div className="tech-grid">
            {[
              { icon: 'fab fa-html5', name: 'HTML5' },
              { icon: 'fab fa-css3-alt', name: 'CSS3' },
              { icon: 'fab fa-js', name: 'JavaScript' },
              { icon: 'fab fa-react', name: 'React' },
              { icon: 'fab fa-node-js', name: 'Node.js' },
              { icon: 'fab fa-python', name: 'Python' },
              { icon: 'fab fa-php', name: 'PHP' },
              { icon: 'fas fa-database', name: 'MySQL' },
              { icon: 'fab fa-figma', name: 'Figma' },
              { icon: 'fas fa-paint-brush', name: 'Photoshop' },
              { icon: 'fa-brands fa-webflow', name: 'Webflow' },
              { icon: 'fa-brands fa-elementor', name: 'Elementor' },
              { icon: 'fab fa-wordpress', name: 'WordPress' },
            ].map((t, i) => (
              <div className="tech-item" key={i}>
                <div className="tech-icon"><i className={t.icon}></i></div>
                <div className="tech-name">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
            <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
              Learn more about our journey, values, and what drives us to create exceptional digital experiences.
            </p>
          </div>
          <div className="about-content">
            <div className="about-image">
              <img src={`${BASE}images/team.jpeg`} alt="Our Team" />
            </div>
            <div className="about-text">
              <h2>Our Story</h2>
              <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                We started just a year ago, building simple websites and helping businesses get online. As time went
                by, we saw the real challenge was not just being online, it was being seen and trusted.
              </p>
              <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                So, we added SEO and digital leverage audits to help brands grow beyond the basics. Today, we are
                betting big on engagement portals smart, interactive systems that connect people, schools, and
                organizations in meaningful ways.
              </p>
              <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                What began as small website projects has now grown into a mission to help businesses and institutions
                move from digital presence to digital impact.
              </p>
            </div>
          </div>
          <div className="parent-company">
            <div className="parent-logo">
              <img src={`${BASE}images/logo.png`} alt="CodCentral Logo" height="100" width="150" />
            </div>
            <div className="parent-text">
              <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '19px' }}>
                CodCentral was founded by a team of passionate digital creatives freelancers dedicated to help
                businesses grow online. To us great design, clear communication, and smart technology can transform
                how people connect and work. Our mission is to make digital excellence accessible to every business
                from startups to established organizations.
              </p>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-item">
              <h3>What We Do</h3>
              <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                We create custom digital solutions including websites, web applications, and digital strategies
                tailored to your specific business needs.
              </p>
              <a href="#services" className="service-btn">Our Services</a>
            </div>
            <div className="about-item">
              <h3>Why We Do It</h3>
              <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                We&apos;re passionate about using technology to solve real-world problems and help businesses thrive
                in the digital age.
              </p>
              <a href="#portfolio" className="service-btn">Our Work</a>
            </div>
            <div className="about-item">
              <h3>How We Do It</h3>
              <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                Through collaboration, innovation, and a user-centric approach, we deliver solutions that drive
                measurable results.
              </p>
              <a href="#quote" className="service-btn">Our Process</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Pricing Section */}
      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Our Pricing Plans</h2>
            <p>Choose the perfect plan for your business needs. All plans include our core features with scalable options.</p>
          </div>
          <div className="pricing-cards">
            {/* Basic Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Basic Plan</h3>
                <div className="price"><span className="current-price">Ksh13,600</span></div>
                <div className="original-price">Ksh17,000</div>
              </div>
              <div className="pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> 5 - Page Website</li>
                  <li><i className="fas fa-check"></i> Smooth animations</li>
                  <li><i className="fas fa-check"></i> Contact form</li>
                  <li><i className="fas fa-check"></i> Basic Support</li>
                  <li><i className="fas fa-check"></i> Mobile Friendly</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#contactUs" className="btn pricing-btn">Buy Now</a>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-header">
                <h3>Premium Plan</h3>
                <div className="price"><span className="current-price">Ksh20,000</span></div>
                <div className="original-price">Ksh25,000</div>
              </div>
              <div className="pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> 7-page Website</li>
                  <li><i className="fas fa-check"></i> Premium Design</li>
                  <li><i className="fas fa-check"></i> Advanced Animations</li>
                  <li><i className="fas fa-check"></i> Google Maps</li>
                  <li><i className="fas fa-check"></i> Basic SEO Setup</li>
                  <li><i className="fas fa-check"></i> Mobile Friendly</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#contactUs" className="btn pricing-btn">Buy Now</a>
              </div>
            </div>

            {/* Premium Pro Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Premium Pro</h3>
                <div className="price"><span className="current-price">Ksh60,000</span></div>
                <div className="original-price">Ksh75,000</div>
              </div>
              <div className="pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Premium Plan +</li>
                  <li><i className="fas fa-check"></i> 9+ Page Website</li>
                  <li><i className="fas fa-check"></i> Full (CMS)</li>
                  <li><i className="fas fa-check"></i> Engagement Portal</li>
                  <li><i className="fas fa-check"></i> 24/7 Support</li>
                  <li><i className="fas fa-check"></i> Mobile Money Integration</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#contactUs" className="btn pricing-btn">Buy Now</a>
              </div>
            </div>

            {/* Diamond Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Diamond Plan</h3>
                <div className="price"><span className="current-price">Ksh104,000+</span></div>
                <div className="original-price">Ksh130,000</div>
              </div>
              <div className="pricing-features">
                <ul>
                  <li><i className="fas fa-check"></i> Premium Pro +</li>
                  <li><i className="fas fa-check"></i> Custom Engagement Portals eg. Homework</li>
                  <li><i className="fas fa-check"></i> Full Mpesa and Bank API for Payments</li>
                  <li><i className="fas fa-check"></i> Admin Dashboards</li>
                  <li><i className="fas fa-check"></i> Free Feature Addons for 6 months</li>
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="#contactUs" className="btn pricing-btn">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="Testimonials" id="testimonials">
        <div className="container">
          <div className="section-title">
            <h2 className="testimony">Testimonials</h2>
            <p>What People Say About Us.</p>

            <div className="about-content">
              <div className="about-image">
                <img src={`${BASE}images/stockjet.jpeg`} alt="Stockjet" />
              </div>
              <div className="about-text">
                <h3>Stockjet Startup — Pangani Nairobi, Kenya.</h3>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  A digital AI powered B2B startup in the closing stages to launch.
                </p>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  Walking this 4 month journey with CodCentral has been seamless and inspiring. What once felt like
                  pure imagination has been transformed into a fully functional app that&apos;s set to redefine
                  Africa&apos;s B2B market.
                </p>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  CodCentral&apos;s team brings not only technical expertise but also a deep understanding of business
                  goals making innovation feel effortless.<br /> — Kevin, CTO Stockjet
                </p>
              </div>
            </div>

            <div className="about-content">
              <div className="about-text">
                <h3>Alice, Uniform Hub Marketing</h3>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  CodCentral did not just build our website they built a digital bridge between us and our customers,
                  one that I have never seen before.
                </p>
                <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
                  Their design precision, communication, and timely delivery exceeded expectations. We finally have a
                  digital employee that tirelessly works 24/7.
                </p>
              </div>
              <div className="about-image">
                <img src={`${BASE}images/Alice.jpeg`} alt="Alice" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <TeamCarousel />

      {/* Contact Section */}
      <section className="section" id="contactUs">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Ready to start your project? Get in touch with us today for a free consultation.</p>
          </div>
          <div className="contact-content">
            <div className="contact-form">
              <form action="" method="post">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" className="form-control">
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="logo-design">Logo Design</option>
                    <option value="custom-websites">Custom Websites &amp; Portals</option>
                    <option value="web-apps">Web Apps</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.9940307!3d40.7191097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANVS!5e0!3m2!1sen!2sus!4v1648032614565!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="Office location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3>CODCENTRAL</h3>
              <p>We are a passionate team of developers and designers creating digital solutions that drive business growth and innovation.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contactUs">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><a href="#services">Web Design</a></li>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">SEO Optimization</a></li>
                <li><a href="#services">Logo Design</a></li>
                <li><a href="#services">Custom Websites</a></li>
                <li><a href="#services">Web Applications</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact Info</h3>
              <ul className="footer-links">
                <li><i className="fas fa-map-marker-alt"></i> 123 Tech Street, Digital City, DC 10001</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-envelope"></i> info@codedistric.com</li>
                <li><i className="fas fa-clock"></i> Mon - Fri: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 CodCentral. All Rights Reserved. | Designed with{' '}
              <i className="fas fa-heart" style={{ color: 'var(--bright-red)' }}></i> by CodCentral Team
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
