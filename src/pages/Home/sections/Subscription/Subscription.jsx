import './Subscription.css'

function Subscription() {
  return (
    <section className="subscription">
      <div className="subscription__container">
        {/* Badge */}
        <div className="subscription__badge">
          <span>SOON</span>
        </div>

        {/* Title */}
        <h2 className="subscription__title">
          Сайт по
          <br />
          подписке
        </h2>

        {/* Subtitle */}
        <p className="subscription__subtitle">
          Start with monthly subscription, buy out anytime
        </p>

        {/* Pricing Cards */}
        <div className="subscription__cards">
          {/* Card 1: Starter */}
          <div className="subscription__card">
            <h3 className="subscription__card-name">Starter</h3>
            <p className="subscription__card-description">
              Perfect for small businesses just getting started
            </p>
            <div className="subscription__card-price">$90</div>
            <div className="subscription__card-period">/month</div>
            <div className="subscription__card-buyout">Buyout: $1,500</div>

            <ul className="subscription__card-features">
              <li>Landing page</li>
              <li>Basic template customization</li>
              <li>Mobile responsive</li>
              <li>SSL certificate included</li>
              <li>Monthly content updates (2)</li>
              <li>Email support</li>
              <li>Hosting included</li>
            </ul>

            <button className="subscription__card-button">Get Started</button>
          </div>

          {/* Card 2: Professional (Most Popular) */}
          <div className="subscription__card subscription__card--popular">
            <div className="subscription__card-badge">
              <img
                src="https://www.figma.com/api/mcp/asset/1cbaccdd-f52e-4196-a5d8-078b89a8cf3a"
                alt="Star"
                width="16"
                height="16"
              />
              Most Popular
            </div>

            <h3 className="subscription__card-name">Professional</h3>
            <p className="subscription__card-description">
              Ideal for growing businesses with more needs
            </p>
            <div className="subscription__card-price">$190</div>
            <div className="subscription__card-period">/month</div>
            <div className="subscription__card-buyout">Buyout: $3,500</div>

            <ul className="subscription__card-features">
              <li>Up to 3 pages</li>
              <li>Advanced customization</li>
              <li>Mobile responsive</li>
              <li>SSL certificate included</li>
              <li>Weekly content updates (8)</li>
              <li>Priority email support</li>
              <li>Hosting included</li>
              <li>Contact forms</li>
              <li>Basic SEO optimization</li>
            </ul>

            <button className="subscription__card-button subscription__card-button--gradient">
              Get Started
            </button>
          </div>

          {/* Card 3: Enterprise */}
          <div className="subscription__card">
            <h3 className="subscription__card-name">Enterprise</h3>
            <p className="subscription__card-description">
              For established businesses needing full features
            </p>
            <div className="subscription__card-price">$490</div>
            <div className="subscription__card-period">/month</div>
            <div className="subscription__card-buyout">Buyout: $6,500</div>

            <ul className="subscription__card-features">
              <li>Up to 6 pages</li>
              <li>Full customization</li>
              <li>Mobile responsive</li>
              <li>SSL certificate included</li>
              <li>Unlimited content updates</li>
              <li>24/7 priority support</li>
              <li>Premium hosting</li>
              <li>Advanced forms</li>
              <li>Full SEO optimization</li>
              <li>Custom functionality</li>
              <li>Performance optimization</li>
            </ul>

            <button className="subscription__card-button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
