import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <section className="tj-banner-section section-gap-x">
        <div className="banner-area">
          <div className="banner-left-box">
            <div className="banner-content">
              <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
                <i className="tji-excellence"></i> Recognized for Excellence
              </span>
              <h1 className="banner-title title-anim">
                Driving Excellence Through Evolution and <span>Trust.</span>
              </h1>
              <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                <Link className="banner-link" href="/about">
                  <span><i className="tji-arrow-right-big"></i></span>
                </Link>
                <div className="banner-desc">
                  Represents growth, expansion, and modern business solution present growth, expansion.
                </div>
              </div>
            </div>
            <div className="banner-shape">
              <Image src="/assets/images/shape/pattern-bg.webp" alt="" width={400} height={300} />
            </div>
          </div>
          <div className="banner-right-box">
            <div className="banner-img">
              <Image 
                data-speed="0.8" 
                src="/assets/images/hero/hero-img.webp" 
                alt="Hero Image" 
                width={600} 
                height={500} 
              />
            </div>
            <div className="box-area">
              <div className="customers-box">
                <div className="customers">
                  <ul>
                    <li className="wow fadeInLeft" data-wow-delay=".5s">
                      <Image src="/assets/images/testimonial/client-1.webp" alt="Client 1" width={50} height={50} />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".6s">
                      <Image src="/assets/images/testimonial/client-2.webp" alt="Client 2" width={50} height={50} />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".7s">
                      <Image src="/assets/images/testimonial/client-3.webp" alt="Client 3" width={50} height={50} />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".8s">
                      <span><i className="tji-plus"></i></span>
                    </li>
                  </ul>
                </div>
                <div className="customers-number wow fadeInUp" data-wow-delay=".5s">30K</div>
                <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy customer we have world-wide.</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
          <Link href="#choose" className="scroll-down">
            <span><i className="tji-arrow-down-long"></i></span>
            Scroll Down
          </Link>
        </div>
      </section>

      {/* Choose Section */}
      <section id="choose" className="tj-choose-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Choose the Best
                </span>
                <h2 className="sec-title title-anim">
                  Empowering Business with <span>Expertise.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-gap-4 rightSwipeWrap">
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-innovative"></i>
                  </div>
                  <h4 className="title">Innovative Solutions</h4>
                  <p className="desc">
                    We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-award"></i>
                  </div>
                  <h4 className="title">Award-Winning Expertise</h4>
                  <p className="desc">
                    Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-support"></i>
                  </div>
                  <h4 className="title">Dedicated Support</h4>
                  <p className="desc">
                    Our team is always available to address your concerns, providing quick and effective solution to keep your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="tj-client-section client-section-gap wow fadeInUp" data-wow-delay=".4s">
        <div className="container-fluid client-container">
          <div className="row">
            <div className="col-12">
              <div className="client-content">
                <h5 className="sec-title">
                  Join Over <span className="client-numbers">1000+</span> Companies with <span className="client-text">Bexon</span> Here
                </h5>
              </div>
              <div className="swiper client-slider client-slider-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-1.webp" alt="Brand 1" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-2.webp" alt="Brand 2" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-3.webp" alt="Brand 3" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-4.webp" alt="Brand 4" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-5.webp" alt="Brand 5" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-6.webp" alt="Brand 6" width={120} height={60} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tj-cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-area">
                <div className="cta-content">
                  <h2 className="title title-anim">Let's Build Future Together.</h2>
                  <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                    <Link className="tj-primary-btn btn-dark" href="/contact">
                      <span className="btn-text">Get Started Now</span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </Link>
                  </div>
                </div>
                <div className="cta-img">
                  <Image src="/assets/images/cta/cta-bg.webp" alt="CTA Background" width={600} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
