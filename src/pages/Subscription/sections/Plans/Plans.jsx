import Button from '@shared/ui/Button/Button'
import './Plans.css'

function Plans() {
  const plans = [
    {
      name: 'Starter',
      price: '$90',
      buyout: 'Buyout: $1,500',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Landing page',
        'Basic template customization',
        'Mobile responsive',
        'SSL certificate included',
        'Monthly content updates (2)',
        'Email support',
        'Hosting included',
      ],
      featured: false,
    },
    {
      name: 'Professional',
      price: '$190',
      buyout: 'Buyout: $3,500',
      description: 'Ideal for growing businesses with more needs',
      features: [
        'Up to 3 pages',
        'Advanced customization',
        'Mobile responsive',
        'SSL certificate included',
        'Weekly content updates (8)',
        'Priority email support',
        'Hosting included',
        'Contact forms',
        'Basic SEO optimization',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$490',
      buyout: 'Buyout: $6,500',
      description: 'For established businesses needing full features',
      features: [
        'Up to 6 pages',
        'Full customization',
        'Mobile responsive',
        'SSL certificate included',
        'Unlimited content updates',
        '24/7 priority support',
        'Premium hosting',
        'Advanced forms',
        'Full SEO optimization',
        'Custom functionality',
        'Performance optimization',
      ],
      featured: false,
    },
  ]

  return (
    <section className="plans">
      <div className="plans__container">
        <div className="plans__header">
          <span className="plans__soon">soon</span>
          <p className="plans__subtitle">Start with monthly subscription, buy out anytime</p>
        </div>

        <div className="plans__grid">
          {plans.map(plan => (
            <div key={plan.name} className={`plans__card ${plan.featured ? 'plans__card--featured' : ''}`}>
              {plan.featured && <div className="plans__badge">Most Popular</div>}
              
              <div className="plans__card-header">
                <h3 className="plans__card-name">{plan.name}</h3>
                <p className="plans__card-description">{plan.description}</p>
              </div>

              <div className="plans__card-price">
                <span className="plans__card-amount">{plan.price}</span>
                <span className="plans__card-period">/month</span>
              </div>

              <div className="plans__card-buyout">{plan.buyout}</div>

              <ul className="plans__card-features">
                {plan.features.map(feature => (
                  <li key={feature} className="plans__card-feature">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#5348d1" />
                      <path
                        d="M6 10L9 13L14 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? 'gradient' : 'outline'}
                size="large"
                className="plans__card-button"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
