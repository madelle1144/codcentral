import React, { useState, useEffect } from 'react';

const BASE = import.meta.env.BASE_URL;

const portfolioItems = [
  {
    image: 'images/claire.jpg',
    title: "Claires Org Website",
    description:
      "CodCentral stepped in to craft a modern, mobile-responsive website that showcased the Organisation\u2019s story, ongoing projects, and donation channels. We focused on a clean, trustworthy design with simple navigation to make it easy for visitors to connect and contribute.",
  },
  {
    image: 'images/aur.jpg',
    title: "E-Commerce Platform",
    description:
      "Aura is an online store that wanted a simple, modern website to sell its products easily. Before working with CodCentral, they only sold on social media, which made managing orders hard. We built a clean, mobile-friendly website with a product list and secure checkout. The new site made it easier for customers to shop and trust the brand. After launch, Aura started getting more visitors and sales. CodCentral helped them grow their business online.",
  },
  {
    image: 'images/home.jpg',
    title: "School Homework Portal",
    description:
      "The Homework Portal is a simple online platform we install for schools to help teachers share assignments and students submit their work easily. Before using it, most schools relied on WhatsApp or paper, which caused confusion and lost work. With the portal, everything is organized in one place, teachers can post tasks and students can access them anytime. It saves time, keeps records safe, and improves communication between teachers and learners.",
  },
  {
    image: 'images/e.jpg',
    title: "E-learning Portal",
    description:
      "LearnHub is an online learning portal we built to help students understand tough subjects through easy-to-follow notes, revision questions, and tutorial videos. Before LearnHub, many students struggled to find clear, reliable study materials. The platform brings all resources together in one place, making learning simple and enjoyable. Students can study at their own pace, revisit topics, and track their progress. LearnHub is changing how students learn by making education more accessible and interactive.",
  },
  {
    image: 'images/grade.png',
    title: "Gradeup Promotion Checker",
    description:
      "GradeUp is a fun and interactive portal where students can check their promotion status by paying a small fee. School admins upload results and promotion details, and once students log in, they instantly see their status with a colorful confetti celebration. Each promoted student can also download a personalized certificate to share their achievement. Before GradeUp, schools had long queues and delays in releasing results. Now, the process is faster, organized, and exciting for every student.",
  },
  {
    image: 'images/lizzy.png',
    title: "Lizzy\u2019s Hotel",
    description:
      "Lizzy owned a hotel but did not have a website to showcase her services online. CodCentral designed and deployed a Google-optimized website that displays her room prices, available services, and contact details making it easier for potential customers to explore and book. The new site now helps her attract more visitors and grow her bookings.",
  },
  {
    image: 'images/port.png',
    title: "Dennis, Freelancing Portfolio",
    description:
      "We created a professional freelancing portfolio for Dennis, a marketer and web developer at CodCentral. A strong portfolio is essential for anyone seeking remote opportunities, as it showcases skills, experience, and credibility to potential clients and employers.",
  },
];

function PortfolioSlider() {
  const [current, setCurrent] = useState(0);
  const total = portfolioItems.length;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);

  const translateX = current * (windowWidth <= 768 ? 100 : 25);

  // Update window width on resize so translateX recalculates correctly
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Our Recent Projects</h2>
          <p style={{ color: 'black', fontFamily: "'Times New Roman', Times, serif", fontSize: '20px' }}>
            Take a look at some of our successful projects that have helped businesses achieve their goals.
          </p>
        </div>
        <div className="portfolio-slider">
          <div
            className="portfolio-track"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {portfolioItems.map((item, i) => (
              <div className="portfolio-card" key={i}>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <img src={`${BASE}${item.image}`} alt={item.title} />
                  </div>
                  <div className="portfolio-overlay">
                    <h3>{item.title}</h3>
                    <p style={{ fontFamily: "'Times New Roman', Times, serif" }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-arrows">
            <div className="slider-arrow prev-arrow" onClick={prev}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="slider-arrow next-arrow" onClick={next}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="portfolio-dots">
          {portfolioItems.map((_, i) => (
            <span
              key={i}
              className={i === current ? 'active' : ''}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSlider;
