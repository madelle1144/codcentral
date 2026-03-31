import React, { useState } from 'react';

const BASE = import.meta.env.BASE_URL;

const slides = [
  {
    title: 'Transforming Ideas Into Digital Solutions',
    description:
      'We bring your vision to life through cutting-edge websites and apps blending creativity, technology, and strategy to deliver results that matter.',
    image: 'images/digi.jpg',
  },
  {
    title: 'Custom Solutions For Your Business',
    description:
      "Every brand is unique, your digital solution should be too. From sleek websites to powerful web applications, we build what your business truly needs to grow.",
    image: 'images/digi2.png',
  },
  {
    title: 'Driving Growth Through Technology',
    description:
      'Empower your brand with innovative digital tools that expand your reach, engage customers, and accelerate your business growth.',
    image: 'images/digi1.jpg',
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>{slides[current].title}</h2>
            <p>{slides[current].description}</p>
            <a href="#contactUs" className="btn">Start Your Project</a>
          </div>
          <div className="hero-card">
            <img src={`${BASE}${slides[current].image}`} alt="Digital Solution" />
          </div>
        </div>
        <div className="hero-nav">
          <div className="hero-arrow left-arrow" onClick={prev}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="hero-dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={i === current ? 'active' : ''}
                onClick={() => setCurrent(i)}
              ></span>
            ))}
          </div>
          <div className="hero-arrow right-arrow" onClick={next}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
