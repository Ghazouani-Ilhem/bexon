import React from 'react';
import Image from 'next/image';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Eade Marren',
      designation: 'Chief Executive',
      image: '/assets/images/team/team-1-big.webp',
      link: '/team-details',
      isActive: true
    },
    {
      id: 2,
      name: 'Savannah Ngueen',
      designation: 'Operations Head',
      image: '/assets/images/team/team-2-big.webp',
      link: '/team-details',
      isActive: false
    },
    {
      id: 3,
      name: 'Kristin Watson',
      designation: 'Marketing Lead',
      image: '/assets/images/team/team-3-big.webp',
      link: '/team-details',
      isActive: false
    },
    {
      id: 4,
      name: 'Darlene Robertson',
      designation: 'Business Director',
      image: '/assets/images/team/team-4-big.webp',
      link: '/team-details',
      isActive: false
    }
  ];

  const socialLinks = [
    { name: 'facebook', icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/' },
    { name: 'instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/' },
    { name: 'twitter', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/' },
    { name: 'linkedin', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/' }
  ];

  return (
    <section className="tj-team-section-2 section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Meet Our Team
              </span>
              <div className="heading-wrap-content">
                <div className="sec-heading style-3">
                  <h2 className="sec-title title-anim">People Behind Bexon.</h2>
                </div>
                <div className="btn-wrap wow fadeInUp" data-wow-delay=".5s">
                  <a className="tj-primary-btn" href="/team">
                    <span className="btn-text"><span>More Members</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="team-wrapper">
              <div className="team-img-wrap wow fadeInUp" data-wow-delay=".5s">
                <div id="team-img" className="team-img">
                  <Image 
                    src="/assets/images/team/team-1-big.webp" 
                    alt="Team member"
                    width={400}
                    height={500}
                  />
                </div>
              </div>
              <div className="team-item-wrap">
                {teamMembers.map((member) => (
                  <div 
                    key={member.id} 
                    className={`team-item ${member.isActive ? 'active' : ''} wow fadeInUp`} 
                    data-wow-delay=".3s"
                    data-src={member.image}
                  >
                    <div className="team-item-inner">
                      <div className="team-content">
                        <h3 className="title">
                          <a href={member.link}>{member.name}</a>
                        </h3>
                        <span className="designation">{member.designation}</span>
                      </div>
                      <div className="social-links">
                        <ul>
                          {socialLinks.map((social) => (
                            <li key={social.name}>
                              <a href={social.url} target="_blank" rel="noopener noreferrer">
                                <i className={social.icon}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a className="team-link" href={member.link}>
                        <i className="tji-arrow-right-long"></i>
                      </a>
                    </div>
                    <div className="team-img-wrap">
                      <div className="team-img">
                        <Image 
                          src={member.image} 
                          alt={member.name}
                          width={200}
                          height={250}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;