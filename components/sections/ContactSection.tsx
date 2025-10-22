import React from 'react';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  const locations = [
    {
      id: '1',
      title: 'Head office:',
      address: '993 Renner Burg, West Rond, MT 94251-030, USA.',
      phone: '+1 (009) 544-7818',
      email: 'support@bexon.com',
      className: 'loc-1'
    },
    {
      id: '2',
      title: 'Regional office:',
      address: 'Hessisch Lichtenau 37235, Kassel, Germany.',
      phone: '+1 (009) 880-1810',
      email: 'support@bexon.com',
      className: 'loc-2'
    },
    {
      id: '3',
      title: 'Regional office:',
      address: '32 Altamira, State of Pará, Brazil.',
      phone: '+1 (009) 544-7818',
      email: 'support@bexon.com',
      className: 'loc-3'
    }
  ];

  const serviceOptions = [
    { value: '0', label: 'Chose a option' },
    { value: '1', label: 'Business Strategy' },
    { value: '2', label: 'Customer Experience' },
    { value: '3', label: 'Sustainability and ESG' },
    { value: '4', label: 'Training and Development' },
    { value: '5', label: 'IT Support & Maintenance' },
    { value: '6', label: 'Marketing Strategy' }
  ];

  return (
    <section className="tj-contact-section section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="global-map wow fadeInUp" data-wow-delay=".3s">
              <div className="global-map-img">
                <Image 
                  src="/assets/images/bg/map.svg" 
                  alt="World Map" 
                  width={600}
                  height={400}
                />
                {locations.map((location) => (
                  <div key={location.id} className={`location-indicator ${location.className}`}>
                    <div className="location-tooltip">
                      <span>{location.title}</span>
                      <p>{location.address}</p>
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`}>P: {location.phone}</a>
                      <a href={`mailto:${location.email}`}>M: {location.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-form style-2 wow fadeInUp" data-wow-delay=".4s">
              <div className="sec-heading">
                <span className="sub-title text-white">
                  <i className="tji-box"></i>Get in Touch
                </span>
                <h2 className="sec-title title-anim">
                  Drop Us a <span>Line.</span>
                </h2>
              </div>
              <form id="contact-form-2">
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="text" name="cfName2" placeholder="Full Name *" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="email" name="cfEmail2" placeholder="Email Address *" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input type="tel" name="cfPhone2" placeholder="Phone number *" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <div className="tj-nice-select-box">
                        <div className="tj-select">
                          <select name="cfSubject2" required>
                            {serviceOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-input message-input">
                      <textarea 
                        name="cfMessage2" 
                        id="message" 
                        placeholder="Type message *" 
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button className="tj-primary-btn" type="submit">
                      <span className="btn-text">
                        <span>Send Message</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <Image src="/assets/images/shape/pattern-2.svg" alt="Pattern" width={200} height={200} />
      </div>
      <div className="bg-shape-2">
        <Image src="/assets/images/shape/pattern-3.svg" alt="Pattern" width={200} height={200} />
      </div>
    </section>
  );
};

export default ContactSection;