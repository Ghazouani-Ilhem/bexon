import React from 'react'
import Link from 'next/link'

interface ProjectItem {
  image: string
  category: string
  title: string
}

const Home2ProjectsSection: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      image: '/assets/images/project/project-1.webp',
      category: 'Business',
      title: 'Event Management Platform'
    },
    {
      image: '/assets/images/project/project-4.webp',
      category: 'Business',
      title: 'Environmental Impact Dashboard'
    },
    {
      image: '/assets/images/project/project-5.webp',
      category: 'Business',
      title: 'Event Management Platform'
    }
  ]

  return (
    <section className="tj-project-section-2 section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-2 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Proud Projects</span>
              <h2 className="sec-title text-anim">Breaking Boundaries, Building <span>Dreams.</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
              <div className="swiper project-slider">
                <div className="swiper-wrapper">
                  {projects.map((project, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="project-item">
                        <div 
                          className="project-img" 
                          style={{backgroundImage: `url('${project.image}')`}}
                        ></div>
                        <div className="project-content">
                          <span className="categories">
                            <Link href="/portfolio-details">{project.category}</Link>
                          </span>
                          <div className="project-text">
                            <h3 className="title">
                              <Link href="/portfolio-details">{project.title}</Link>
                            </h3>
                            <Link className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-big"></i>
                            </Link>
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
    </section>
  )
}

export default Home2ProjectsSection