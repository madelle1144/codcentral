import React, { useState } from 'react';

const faqs = [
  {
    question: 'What services does CodCentral offer?',
    answer:
      'We build professional websites, provide SEO and digital audits, and develop engagement portals for schools, businesses, and organizations.',
  },
  {
    question: 'How long does it typically take to complete a website?',
    answer:
      'The timeline depends on the complexity of the project. A simple brochure website can take 1-5 days, while a complex e-commerce platform or web application may take 4-8 weeks or more.',
  },
  {
    question: 'Do you design mobile-friendly websites?',
    answer:
      'Yes. Every website we create is fully responsive, meaning it looks great and works perfectly on phones, tablets, and computers.',
  },
  {
    question: 'Can you help improve my existing website?',
    answer:
      'Absolutely. We can redesign, speed up, or optimize your current website to give it a modern look and better visibility online.',
  },
  {
    question: 'What makes CodCentral different from other agencies?',
    answer:
      'We focus on impact, not just design. We blend creativity with strategy helping you not only look good online but also attract real clients and results.',
  },
  {
    question: 'Do you offer SEO services?',
    answer:
      'Yes. We help businesses appear higher on Google through SEO and digital leverage audits that highlight what\'s working and what needs improvement.',
  },
  {
    question: 'Can schools and organizations use your portals?',
    answer:
      'Yes. We build custom portals for schools (like Homework, LearnHub, and GradeUp) and engagement systems for businesses to improve communication and efficiency.',
  },
  {
    question: 'How much do your services cost?',
    answer:
      'Prices depend on project size and features. We offer flexible packages to fit different budgets from startups to growing organizations.',
  },
  {
    question: 'Do you provide support after launching a project?',
    answer:
      'Definitely. We offer ongoing maintenance, updates, and technical support to keep your website or portal running smoothly.',
  },
  {
    question: 'How can I get started with CodCentral?',
    answer:
      'Simply contact us through our website or WhatsApp. We will schedule a quick chat to understand your goals and create the best plan for your project.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section className="section faq" id="faqs">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services and processes.</p>
        </div>
        <div className="faq-container">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-question" onClick={() => toggle(i)}>
                <h3>{faq.question}</h3>
                <i
                  className="fas fa-chevron-down"
                  style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                ></i>
              </div>
              <div className={`faq-answer${openIndex === i ? ' active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
