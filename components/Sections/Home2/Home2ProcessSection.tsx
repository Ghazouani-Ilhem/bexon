import React from 'react'
import Image from 'next/image'

interface ProcessItem {
  step: string
  title: string
  description: string
}

const Home2ProcessSection: React.FC = () => {
  const processItems: ProcessItem[] = [
    {
      step: '01',
      title: 'Planning & Strategy',
      description: 'The first step in our process is understanding your unique business needs, objectives, and our cutomes challenges.'
    },
    {
      step: '02',
      title: 'Execution & Delivery',
      description: 'Once the plan is in place, our team moves forward with execution, turning strategies into actiony to deliver.'
    },
    {
      step: '03',
      title: 'Review & Support',
      description: 'After project completion, we conduct a thorough review to ensure everything aligns with your goals and requirements.'
    }
  ]

  return (
    <div className="tj-working-process-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Working Process
              </span>
              <h2 className="sec-title title-anim">How We <span>Work.</span></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="process-area">
              <div className="process-img wow fadeInRight" data-wow-delay=".5s">
                <Image src="/assets/images/process/process-img.webp" alt="" width={600} height={400} />
              </div>
              <div className="process-content">
                {processItems.map((item, index) => (
                  <div key={index} className="process-item wow fadeInLeft" data-wow-delay={`${0.5 + index * 0.2}s`}>
                    <div className="process-step">
                      <span>{item.step}</span>
                    </div>
                    <div className="process-content">
                      <h4 className="title">{item.title}</h4>
                      <p className="desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <Image src="/assets/images/shape/pattern-2.svg" alt="" width={200} height={200} />
      </div>
      <div className="bg-shape-2">
        <Image src="/assets/images/shape/pattern-3.svg" alt="" width={200} height={200} />
      </div>
    </div>
  )
}

export default Home2ProcessSection