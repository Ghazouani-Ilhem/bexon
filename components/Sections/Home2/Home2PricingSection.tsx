import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PricingPlan {
  name: string
  description: string
  price: number
  period: string
  features: string[]
  isActive?: boolean
  delay: string
}

const Home2PricingSection: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      name: 'Basic Plan',
      description: 'Essential Business Services',
      price: 99,
      period: '/per month',
      features: [
        'Access to core services',
        'Limited customer support (email)',
        '1 project per month',
        'Basic reporting and analytics',
        'Standard templates and tools',
        'Basic performance tracking'
      ],
      delay: '.5s'
    },
    {
      name: 'Standard Plan',
      description: 'Complete Business Solutions',
      price: 249,
      period: '/per month',
      features: [
        'All features in Basic Plan',
        'Priority customer support',
        'Up to 3 projects per month',
        'Monthly performance reviews',
        'Collaboration tools for team',
        'Custom templates'
      ],
      isActive: true,
      delay: '.7s'
    },
    {
      name: 'Premium Plan',
      description: 'Advanced Business Services',
      price: 499,
      period: '/per month',
      features: [
        'All features in Standard Plan',
        'Dedicated account manager',
        'Tailored strategy sessions',
        'Quarterly performance audits',
        'Priority support',
        '24/7 emergency service'
      ],
      delay: '.9s'
    }
  ]

  return (
    <section className="tj-pricing-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center style-2">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Pricing plan</span>
              <h2 className="sec-title text-anim">Our Pricing <span>Plan.</span></h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div className={`pricing-box wow fadeInUp ${plan.isActive ? 'active' : ''}`} data-wow-delay={plan.delay}>
                <div className="pricing-header">
                  <h4 className="package-name">{plan.name}</h4>
                  <div className="package-desc">
                    <p>{plan.description}</p>
                  </div>
                  <div className="package-price">
                    <span className="package-currency">$</span>
                    <span className="price-number">{plan.price}</span>
                    <span className="package-period">{plan.period}</span>
                  </div>
                  <div className="pricing-btn">
                    <Link className="text-btn" href="/contact">
                      <span className="btn-text"><span>Chose Plan</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </Link>
                  </div>
                </div>
                <div className="list-items">
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="tji-list"></i>{feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-shape-1">
        <Image src="/assets/images/shape/pattern-2.svg" alt="" width={200} height={200} />
      </div>
      <div className="bg-shape-2">
        <Image src="/assets/images/shape/pattern-3.svg" alt="" width={200} height={200} />
      </div>
    </section>
  )
}

export default Home2PricingSection