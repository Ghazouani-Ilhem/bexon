import React from 'react';

const FaqTwo: React.FC = () => {
  return (
    <section className="tj-faq-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="accordion tj-faq style-2" id="faqTwo">
              {[1,2,3,4,5].map(n => (
                <div className={`accordion-item${n===1 ? ' active':''}`} key={n}>
                  <button className={`faq-title${n===1 ? '' : ' collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq-3-${n}`} aria-expanded={n===1}>
                    FAQ Question {n}
                  </button>
                  <div id={`faq-3-${n}`} className={`collapse${n===1 ? ' show':''}`} data-bs-parent="#faqTwo">
                    <div className="accordion-body faq-text">
                      <p>Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation.</p>
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

export default FaqTwo;
