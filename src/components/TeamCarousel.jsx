import React, { useRef, useEffect, useState } from 'react';

const BASE = import.meta.env.BASE_URL;

const members = [
  { image: 'images/roger.jpeg', name: 'Alfred Rogers', role: 'Head of Growth and Partnerships', skills: 'Degree in Commerce' },
  { image: 'images/rose.jfif', name: 'Rose Imeldah', role: 'UI/UX Designer', skills: 'Figma \u2022 Adobe Creative Suite' },
  { image: 'images/manu.png', name: 'Emmanuel Madelle', role: 'Junior Developer', skills: 'HTML \u2022 CSS \u2022 JavaScript \u2022 React \u2022 Python' },
  { image: 'images/photo.jpg', name: 'Emily Watson', role: 'Frontend Developer', skills: 'Vue.js \u2022 TypeScript \u2022 Sass' },
  { image: 'images/ian.png', name: 'Ian Lumumba', role: 'Head of Operations', skills: 'AWS \u2022 Docker \u2022 Kubernetes' },
  { image: 'images/wes.jpeg', name: 'Wesley Omondi', role: 'Social Media Manager and Lead Marketer', skills: '' },
  { image: 'images/trevor.JPG', name: 'Trevor Kahumbu', role: 'Mobile Developer', skills: 'React Native \u2022 Flutter \u2022 iOS' },
  { image: 'images/kim.jpg', name: 'Kimberly Musa', role: 'QA Engineer', skills: 'Testing \u2022 Automation \u2022 CI/CD' },
  { image: 'images/chris.jpg', name: 'Chrispas Obare', role: 'Data Scientist', skills: 'Python \u2022 ML \u2022 Data Analysis' },
  { image: 'images/kev.jpg', name: 'Daniel Brown', role: 'Senior Developer', skills: 'Architecture \u2022 Mentoring \u2022 Code Review' },
];

const CLONE_COUNT = 3;

function TeamCarousel() {
  const trackRef = useRef(null);
  const [dotIndex, setDotIndex] = useState(0);
  const currentIndexRef = useRef(CLONE_COUNT);
  const isTransitioningRef = useRef(false);
  const autoSlideRef = useRef(null);
  const totalMembers = members.length;

  function getMemberWidth() {
    const track = trackRef.current;
    if (!track) return 0;
    const allCards = track.querySelectorAll('.team-member');
    if (!allCards.length) return 0;
    const gap = window.innerWidth <= 480 ? 15 : window.innerWidth <= 768 ? 20 : 30;
    return allCards[0].offsetWidth + gap;
  }

  function updateCarousel(smooth = true) {
    const track = trackRef.current;
    if (!track) return;
    const memberWidth = getMemberWidth();
    const translateX = -currentIndexRef.current * memberWidth;
    track.style.transition = smooth ? 'transform 0.5s ease-in-out' : 'none';
    track.style.transform = `translateX(${translateX}px)`;
    if (!smooth) void track.offsetWidth; // force reflow so transition:none takes effect before next transform
    const di = ((currentIndexRef.current - CLONE_COUNT) % totalMembers + totalMembers) % totalMembers;
    setDotIndex(di);
  }

  function nextSlide() {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    currentIndexRef.current++;
    updateCarousel(true);
    setTimeout(() => {
      if (currentIndexRef.current >= totalMembers + CLONE_COUNT) {
        currentIndexRef.current = CLONE_COUNT;
        updateCarousel(false);
      }
      isTransitioningRef.current = false;
    }, 550);
  }

  function prevSlide() {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    currentIndexRef.current--;
    updateCarousel(true);
    setTimeout(() => {
      if (currentIndexRef.current < CLONE_COUNT) {
        currentIndexRef.current = totalMembers + CLONE_COUNT - 1;
        updateCarousel(false);
      }
      isTransitioningRef.current = false;
    }, 550);
  }

  function goToSlide(index) {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    currentIndexRef.current = index + CLONE_COUNT;
    updateCarousel(true);
    setTimeout(() => { isTransitioningRef.current = false; }, 550);
  }

  useEffect(() => {
    // Initial position
    updateCarousel(false);

    autoSlideRef.current = setInterval(nextSlide, 5000);

    const track = trackRef.current;
    const onEnter = () => clearInterval(autoSlideRef.current);
    const onLeave = () => {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(nextSlide, 5000);
    };
    if (track) {
      track.addEventListener('mouseenter', onEnter);
      track.addEventListener('mouseleave', onLeave);
    }

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => updateCarousel(false), 100);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearInterval(autoSlideRef.current);
      if (track) {
        track.removeEventListener('mouseenter', onEnter);
        track.removeEventListener('mouseleave', onLeave);
      }
      window.removeEventListener('resize', onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Build items with clones
  const clonesBefore = members.slice(members.length - CLONE_COUNT).map((m, i) => ({ ...m, _key: `clone-before-${i}` }));
  const clonesAfter = members.slice(0, CLONE_COUNT).map((m, i) => ({ ...m, _key: `clone-after-${i}` }));
  const allItems = [...clonesBefore, ...members.map((m, i) => ({ ...m, _key: `real-${i}` })), ...clonesAfter];

  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Team</h2>
          <p>Talented developers, designers, and innovators working together to create amazing digital solutions.</p>
        </div>

        <div className="team-carousel">
          <div className="carousel-container">
            <div className="carousel-track" ref={trackRef}>
              {allItems.map(member => (
                <div className="team-member" key={member._key}>
                  <div className="member-image">
                    <img src={`${BASE}${member.image}`} alt={member.role} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <p className="skills">{member.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-btn prev-btn"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="carousel-btn next-btn"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="carousel-dots">
            {members.map((_, i) => (
              <button
                key={i}
                className={`dot${i === dotIndex ? ' active' : ''}`}
                onClick={() => goToSlide(i)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCarousel;
