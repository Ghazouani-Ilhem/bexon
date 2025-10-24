import React from 'react';
import Image from 'next/image';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      image: '/assets/images/project/project-6.webp',
      category: 'Business',
      title: 'Event Management Platform',
      link: '/portfolio-details'
    },
    {
      id: 2,
      image: '/assets/images/project/project-7.webp',
      category: 'Business',
      title: 'Rebranding Strategy for a Growing',
      link: '/portfolio-details'
    },
    {
      id: 3,
      image: '/assets/images/project/project-8.webp',
      category: 'Business',
      title: 'Interactive Learning Platform',
      link: '/portfolio-details'
    },
    {
      id: 4,
      image: '/assets/images/project/project-9.webp',
      category: 'Business',
      title: 'Environmental Impact Dashboard',
      link: '/portfolio-details'
    }
  ];

  return (
    <section className="tj-project-section-3 section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Proud Projects
              </span>
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
                  {projects.map((project) => (
                    <div key={project.id} className="swiper-slide">
                      <div className="project-item">
                        <div className="project-img">
                          <Image 
                            src={project.image} 
                            alt={project.title}
                            width={400}
                            height={300}
                          />
                        </div>
                        <div className="project-content">
                          <span className="categories">
                            <a href={project.link}>{project.category}</a>
                          </span>
                          <div className="project-text">
                            <h4 className="title">
                              <a href={project.link}>{project.title}</a>
                            </h4>
                            <a className="project-btn" href={project.link}>
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
        <Image 
          src="/assets/images/shape/pattern-2.svg" 
          alt="Background pattern"
          width={200}
          height={200}
        />
      </div>
      <div className="bg-shape-2">
        <Image 
          src="/assets/images/shape/pattern-3.svg" 
          alt="Background pattern"
          width={200}
          height={200}
        />
      </div>
      <div className="bg-shape-3">
        <Image 
          src="/assets/images/shape/shape-blur.svg" 
          alt="Background shape"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default ProjectSection;