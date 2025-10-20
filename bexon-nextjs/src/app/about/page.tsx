import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Breadcrumb Section */}
      <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tj-page-header-content text-center">
                <h1 className="tj-page-title">About Us</h1>
                <div className="tj-page-link">
                  <span><i className="tji-home"></i></span>
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span><i className="tji-arrow-right"></i></span>
                  <span>
                    <span>About Us</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp"></div>
      </section>

      {/* Choose Section */}
      <section id="choose" className="tj-choose-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading-wrap">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Choose the Best
                </span>
                <div className="heading-wrap-content">
                  <div className="sec-heading">
                    <h2 className="sec-title title-anim">Empowering Business with <span>Expertise.</span></h2>
                  </div>
                  <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                    <Link className="tj-primary-btn" href="/contact">
                      <span className="btn-text">Request a Call</span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </Link>
                  </div>
                </div>
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

      {/* About Section */}
      <section className="tj-about-section-2 section-gap section-gap-x">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div className="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
                <div className="about-img overflow-hidden">
                  <Image data-speed=".8" src="/assets/images/about/about-5.webp" alt="About Image" width={500} height={400} />
                </div>
                <div className="box-area style-2">
                  <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                    <h4 className="title">Business Progress</h4>
                    <ul className="tj-progress-list">
                      <li>
                        <h6 className="tj-progress-title">Revenue</h6>
                        <div className="tj-progress">
                          <span className="tj-progress-percent">82%</span>
                          <div className="tj-progress-bar" data-percent="82"></div>
                        </div>
                      </li>
                      <li>
                        <h6 className="tj-progress-title">Satisfaction</h6>
                        <div className="tj-progress">
                          <span className="tj-progress-percent">90%</span>
                          <div className="tj-progress-bar" data-percent="90"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
              <div className="about-content-area">
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <i className="tji-box"></i>Get to Know Us
                  </span>
                  <h2 className="sec-title title-anim">
                    Driving Innovation and Excellence for Sustainable Corporate Success <span>Worldwide.</span>
                  </h2>
                </div>
              </div>
              <div className="about-bottom-area">
                <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                  <h4 className="title">Our Mission</h4>
                  <p className="desc">
                    our mission is empower businesses through innovate best solution, exceptional service.
                  </p>
                  <ul className="list-items">
                    <li><i className="tji-list"></i>Innovation & Excellence</li>
                    <li><i className="tji-list"></i>Exceptional Customer</li>
                    <li><i className="tji-list"></i>Business Growth</li>
                  </ul>
                </div>
                <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                  <h4 className="title">Our Vision</h4>
                  <p className="desc">
                    Our vision is to become a global leader in providing transformative business solutions.
                  </p>
                  <ul className="list-items">
                    <li><i className="tji-list"></i>Global Leadership</li>
                    <li><i className="tji-list"></i>Transformative Impact</li>
                    <li><i className="tji-list"></i>Sustainable Success</li>
                  </ul>
                </div>
              </div>
              <div className="about-btn-area wow fadeInUp" data-wow-delay=".6s">
                <Link className="tj-primary-btn" href="/about">
                  <span className="btn-text">Learn More About Us</span>
                  <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
