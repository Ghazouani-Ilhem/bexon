import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      id: '1',
      title: 'Event Management Platform',
      category: 'Connect',
      image: '/assets/images/project/project-1.webp',
      href: '/portfolio-details'
    },
    {
      id: '2',
      title: 'Digital Marketing Campaign',
      category: 'Empower',
      image: '/assets/images/project/project-2.webp',
      href: '/portfolio-details'
    },
    {
      id: '3',
      title: 'Interactive Learning Platform',
      category: 'Support',
      image: '/assets/images/project/project-3.webp',
      href: '/portfolio-details'
    },
    {
      id: '4',
      title: 'Environmental Impact Dashboard',
      category: 'Business',
      image: '/assets/images/project/project-4.webp',
      href: '/portfolio-details'
    }
  ];

  return (
    <section className="tj-project-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Proud Projects
              </span>
              <div className="heading-wrap-content">
                <div className="sec-heading">
                  <h2 className="sec-title title-anim">
                    Breaking Boundaries, Building <span>Dreams.</span>
                  </h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".5s">
                  We work closely with our clients to understand their unique needs and craft tailored solutions that address challenges.
                </p>
                <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                  <Link href="/portfolio" className="tj-primary-btn">
                    <span className="btn-text">
                      <span>More Projects</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="project-area tj-arrange-container">
              {projects.map((project) => (
                <div key={project.id} className="project-item tj-arrange-item">
                  <div 
                    className="project-img" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="project-content">
                    <span className="categories">
                      <Link href={project.href}>{project.category}</Link>
                    </span>
                    <div className="project-text">
                      <h4 className="title">
                        <Link href={project.href}>{project.title}</Link>
                      </h4>
                      <Link className="project-btn" href={project.href}>
                        <i className="tji-arrow-right-long"></i>
                      </Link>
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

export default ProjectSection;