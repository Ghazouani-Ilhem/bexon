import React from 'react';
import Image from 'next/image';

const WorkingProcessSection: React.FC = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business goals, challenges, and requirements through comprehensive analysis.",
      icon: "tji-search"
    },
    {
      number: "02", 
      title: "Strategy & Planning",
      description: "Based on our analysis, we develop a customized strategy and detailed implementation plan.",
      icon: "tji-strategy"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our expert team executes the plan with precision, ensuring quality and timely delivery.",
      icon: "tji-gear"
    },
    {
      number: "04",
      title: "Monitoring & Support",
      description: "We provide ongoing monitoring and support to ensure continued success and optimization.",
      icon: "tji-support"
    }
  ];

  return (
    <section className="tj-working-process-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Our Process
              </span>
              <h2 className="sec-title title-anim">
                How We <span>Work</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="process-timeline">
              {processSteps.map((step, index) => (
                <div key={index} className="process-item">
                  <div className="process-number">
                    <span>{step.number}</span>
                  </div>
                  <div className="process-content">
                    <div className="process-icon">
                      <i className={step.icon}></i>
                    </div>
                    <h4 className="process-title">{step.title}</h4>
                    <p className="process-desc">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="process-arrow">
                      <i className="tji-arrow-right"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;