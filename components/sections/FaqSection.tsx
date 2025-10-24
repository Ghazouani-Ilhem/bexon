import React from 'react';
import Image from 'next/image';

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      id: 1,
      question: 'What services does Bexon offer to clients?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: true
    },
    {
      id: 2,
      question: 'How do I get started with Corporate Business?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: false
    },
    {
      id: 3,
      question: 'How do you ensure the success of a project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: false
    },
    {
      id: 4,
      question: 'How long will it take to complete my project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: false
    },
    {
      id: 5,
      question: 'Can I track the progress of my project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: false
    }
  ];

  return (
    <section className="tj-faq-section section-gap">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="faq-img-area wow fadeInLeft" data-wow-delay=".3s">
              <div className="faq-img">
                <Image 
                  data-speed=".8" 
                  src="/assets/images/faq/faq.webp" 
                  alt="FAQ"
                  width={500}
                  height={400}
                />
                <h2 className="title title-anim">Need Help? Start Here...</h2>
              </div>
              <div className="box-area">
                <div className="call-box wow fadeInUp" data-wow-delay=".5s">
                  <h4 className="title">Get Started Free Call? </h4>
                  <span className="call-icon"><i className="tji-phone"></i></span>
                  <a className="number" href="tel:18884521505">
                    <span>1-888-452-1505</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion tj-faq style-2" id="faqTwo">
              {faqItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`accordion-item ${item.isActive ? 'active' : ''} wow fadeInUp`} 
                  data-wow-delay=".3s"
                >
                  <button 
                    className={`faq-title ${item.isActive ? '' : 'collapsed'}`} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#faqTwo-${item.id}`}
                    aria-expanded={item.isActive ? 'true' : 'false'}
                  >
                    {item.question}
                  </button>
                  <div 
                    id={`faqTwo-${item.id}`} 
                    className={`collapse ${item.isActive ? 'show' : ''}`} 
                    data-bs-parent="#faqTwo"
                  >
                    <div className="accordion-body faq-text">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;