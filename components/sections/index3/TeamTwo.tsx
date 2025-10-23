import React from 'react';
import Link from 'next/link';

const TeamTwo: React.FC = () => {
  return (
    <section className="tj-team-section-2 section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box"></i>Meet Our Team</span>
              <div className="heading-wrap-content">
                <div className="sec-heading style-3">
                  <h2 className="sec-title title-anim">People Behind Bexon.</h2>
                </div>
                <div className="btn-wrap wow fadeInUp" data-wow-delay=".5s">
                  <Link className="tj-primary-btn" href="/team">
                    <span className="btn-text"><span>More Members</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </Link>
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
                  <img src="/assets/images/team/team-1-big.webp" alt="Images" />
                </div>
              </div>
              <div className="team-items-wrap wow fadeInUp" data-wow-delay=".5s">
                {[
                  { img: 'team-1.webp', title: 'Esther Howard', role: 'Co.Founder' },
                  { img: 'team-2.webp', title: 'Ralph Edwards', role: 'Co.Founder' },
                  { img: 'team-3.webp', title: 'Guy Hawkins', role: 'Co.Founder' },
                  { img: 'team-4.webp', title: 'Devon Lane', role: 'Co.Founder' },
                ].map((m, idx) => (
                  <div className="team-item" key={idx} data-src={`/assets/images/team/team-${idx+1}-big.webp`}>
                    <div className="team-img">
                      <img src={`/assets/images/team/${m.img}`} alt="Images" />
                    </div>
                    <div className="team-content">
                      <h4 className="title"><a href="/team-details">{m.title}</a></h4>
                      <span className="designation">{m.role}</span>
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

export default TeamTwo;
