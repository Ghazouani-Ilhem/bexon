import React from 'react'
import Image from 'next/image'

const FAQSection: React.FC = () => {
  const faqData = [
    {
      id: 'faq-1',
      question: 'What services does Bexon offer to clients?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: true
    },
    {
      id: 'faq-2',
      question: 'How do I get started with Corporate Business?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: false
    },
    {
      id: 'faq-3',
      question: 'How do you ensure the success of a project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: false
    },
    {
      id: 'faq-4',
      question: 'How long will it take to complete my project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: false
    },
    {
      id: 'faq-5',
      question: 'Can I track the progress of my project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.',
      isActive: false
    }
  ]

  return (
    <section className="tj-faq-section section-gap tj-arrange-container-2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="faq-img-area tj-arrange-item-2">
              <div className="faq-img overflow-hidden">
                <Image 
                  src="/assets/images/faq/faq.webp" 
                  alt="FAQ" 
                  width={600} 
                  height={400}
                  className="img-fluid"
                />
                <h2 className="title">Need Help? Start Here...</h2>
              </div>
              <div className="box-area">
                <div className="call-box">
                  <h4 className="title">Get Started Free Call?</h4>
                  <span className="call-icon"><i className="tji-phone"></i></span>
                  <a className="number" href="tel:18884521505">
                    <span>1-888-452-1505</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion tj-faq tj-arrange-item-2" id="faqOne">
              {faqData.map((faq, index) => (
                <div key={faq.id} className={`accordion-item ${faq.isActive ? 'active' : ''}`}>
                  <button 
                    className={`faq-title ${faq.isActive ? '' : 'collapsed'}`}
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${faq.id}`}
                    aria-expanded={faq.isActive ? 'true' : 'false'}
                  >
                    {faq.question}
                  </button>
                  <div 
                    id={faq.id} 
                    className={`collapse ${faq.isActive ? 'show' : ''}`}
                    data-bs-parent="#faqOne"
                  >
                    <div className="accordion-body faq-text">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection