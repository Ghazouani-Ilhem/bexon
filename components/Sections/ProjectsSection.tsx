import React from 'react'
import Link from 'next/link'

interface ProjectItem {
  image: string
  category: string
  title: string
}

const ProjectsSection: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      image: '/assets/images/project/project-1.webp',
      category: 'Connect',
      title: 'Event Management Platform'
    },
    {
      image: '/assets/images/project/project-2.webp',
      category: 'Empower',
      title: 'Digital Marketing Campaign'
    },
    {
      image: '/assets/images/project/project-3.webp',
      category: 'Support',
      title: 'Interactive Learning Platform'
    },
    {
      image: '/assets/images/project/project-4.webp',
      category: 'Business',
      title: 'Environmental Impact Dashboard'
    }
  ]

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
                  <h2 className="sec-title title-anim">Breaking Boundaries, Building <span>Dreams.</span></h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".5s">We work closely with our clients to understand
                  their
                  unique needs and craft tailored
                  solutions that address challenges.</p>
                <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                  <Link className="tj-primary-btn" href="/portfolio">
                    <span className="btn-text"><span>More Projects</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="project-area tj-arrange-container">
              {projects.map((project, index) => (
                <div key={index} className="project-item tj-arrange-item">
                  <div 
                    className="project-img" 
                    style={{backgroundImage: `url('${project.image}')`}}
                  ></div>
                  <div className="project-content">
                    <span className="categories">
                      <Link href="/portfolio-details">{project.category}</Link>
                    </span>
                    <div className="project-text">
                      <h4 className="title">
                        <Link href="/portfolio-details">{project.title}</Link>
                      </h4>
                      <Link className="project-btn" href="/portfolio-details">
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
  )
}

export default ProjectsSection