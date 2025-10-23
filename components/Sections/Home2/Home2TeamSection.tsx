import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TeamMember {
  name: string
  designation: string
  image: string
  email: string
}

const Home2TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Eade Marren',
      designation: 'Chief Executive',
      image: '/assets/images/team/team-1.webp',
      email: 'info@bexon.com'
    },
    {
      name: 'Esther Howard',
      designation: 'Co. Founder',
      image: '/assets/images/team/team-2.webp',
      email: 'info@bexon.com'
    },
    {
      name: 'Ralph Edwards',
      designation: 'Co. Founder',
      image: '/assets/images/team/team-3.webp',
      email: 'info@bexon.com'
    },
    {
      name: 'Devon Lane',
      designation: 'Co. Founder',
      image: '/assets/images/team/team-4.webp',
      email: 'info@bexon.com'
    }
  ]

  return (
    <section className="tj-team-section section-separator">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center style-2">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Meet Our Team</span>
              <h2 className="sec-title text-anim">People Behind <span>Bexon.</span></h2>
            </div>
          </div>
        </div>
        <div className="row leftSwipeWrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="team-item left-swipe">
                <div className="team-img">
                  <div className="team-img-inner">
                    <Image src={member.image} alt="" width={300} height={350} />
                  </div>
                  <div className="social-links">
                    <ul>
                      <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      </li>
                      <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      </li>
                      <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      </li>
                      <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="title">
                    <Link href="/team-details">{member.name}</Link>
                  </h4>
                  <span className="designation">{member.designation}</span>
                  <a className="mail-at" href={`mailto:${member.email}`}>
                    <i className="tji-at"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home2TeamSection