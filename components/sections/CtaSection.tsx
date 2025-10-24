import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CtaSection: React.FC = () => {
  return (
    <section className="tj-cta-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-content text-center">
              <div className="cta-bg">
                <Image 
                  src="/assets/images/cta/cta-bg.webp" 
                  alt="CTA Background" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="cta-content-inner">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Ready to Get Started?
                </span>
                <h2 className="sec-title title-anim">
                  Let's Build Something <span>Amazing Together</span>
                </h2>
                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                  Ready to take your business to the next level? Contact us today and let's discuss how we can help you achieve your goals.
                </p>
                <div className="cta-btns wow fadeInUp" data-wow-delay=".7s">
                  <Link href="/contact" className="tj-btn">
                    Get Started <i className="tji-arrow-right"></i>
                  </Link>
                  <Link href="/about" className="tj-btn tj-btn-outline">
                    Learn More <i className="tji-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;