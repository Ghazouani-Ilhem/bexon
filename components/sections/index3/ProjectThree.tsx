import React from 'react';

const projects = [6,7,8,9];

const ProjectThree: React.FC = () => {
  return (
    <section className="tj-project-section-3 section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box"></i>Proud Projects</span>
              <div className="heading-wrap-content">
                <div className="sec-heading style-3">
                  <h2 className="sec-title title-anim">Breaking Boundaries, Building Dreams.</h2>
                </div>
                <div className="slider-navigation d-none d-md-inline-flex wow fadeInUp" data-wow-delay=".5s">
                  <div className="slider-prev">
                    <span className="anim-icon">
                      <i className="tji-arrow-left"></i>
                      <i className="tji-arrow-left"></i>
                    </span>
                  </div>
                  <div className="slider-next">
                    <span className="anim-icon">
                      <i className="tji-arrow-right"></i>
                      <i className="tji-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="project-wrapper wow fadeInUp" data-wow-delay=".4s">
              <div className="swiper project-slider-2">
                <div className="swiper-wrapper">
                  {projects.map(n => (
                    <div className="swiper-slide" key={n}>
                      <div className="project-item">
                        <div className="project-img">
                          <img src={`/assets/images/project/project-${n}.webp`} alt="" />
                        </div>
                        <div className="project-content">
                          <span className="categories"><a href="/portfolio-details">Business</a></span>
                          <div className="project-text">
                            <h4 className="title"><a href="/portfolio-details">Project Title</a></h4>
                            <a className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-big"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination-area"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <img src="/assets/images/shape/pattern-2.svg" alt="" />
      </div>
      <div className="bg-shape-2">
        <img src="/assets/images/shape/pattern-3.svg" alt="" />
      </div>
      <div className="bg-shape-3">
        <img src="/assets/images/shape/shape-blur.svg" alt="" />
      </div>
    </section>
  );
};

export default ProjectThree;
