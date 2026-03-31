import React, { useEffect, useRef } from 'react';

const metrics = [
  { icon: 'fas fa-users', target: 39, label: 'Clients Served' },
  { icon: 'fas fa-project-diagram', target: 81, label: 'Projects Completed' },
  { icon: 'fas fa-clock', target: 1000, label: 'Hours of Work' },
  { icon: 'fa fa-history', target: 18, label: 'Months Active' },
];

function animateCounter(element, target, duration = 2000) {
  const increment = target / (duration / 16);
  let current = 0;
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

function MetricsSection() {
  const sectionRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const numbers = section.querySelectorAll('.metric-number');
            numbers.forEach(el => {
              const target = parseInt(el.getAttribute('data-target'), 10);
              animateCounter(el, target);
            });
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="metrics-section" ref={sectionRef}>
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((m, i) => (
            <div className="metric-card" key={i}>
              <div className="metric-icon">
                <i className={m.icon}></i>
              </div>
              <div className="metric-number" data-target={m.target}>0</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;
