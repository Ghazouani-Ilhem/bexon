import React from 'react';
import Link from 'next/link';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "29",
      period: "month",
      features: [
        "Up to 5 Projects",
        "Basic Support",
        "Standard Templates",
        "Email Support",
        "Basic Analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "59",
      period: "month",
      features: [
        "Up to 15 Projects",
        "Priority Support",
        "Premium Templates",
        "Phone & Email Support",
        "Advanced Analytics",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      period: "month",
      features: [
        "Unlimited Projects",
        "24/7 Support",
        "Custom Templates",
        "Dedicated Manager",
        "Full Analytics Suite",
        "White-label Solutions"
      ],
      popular: false
    }
  ];

  return (
    <section className="tj-pricing-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Pricing Plans
              </span>
              <h2 className="sec-title title-anim">
                Choose Your <span>Perfect Plan</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`pricing-box ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="pricing-header">
                  <h4 className="plan-name">{plan.name}</h4>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="price">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="tji-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="/contact" className="tj-btn">
                    Get Started <i className="tji-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;