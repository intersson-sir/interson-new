import './Partners.css'

function Partners() {
  const logos = [
    {
      type: 'first',
      images: [
        {
          src: 'https://www.figma.com/api/mcp/asset/8726cac3-c642-47a7-8219-3af269fbf362',
          alt: 'Partner 1',
          className: 'partners__logo-img',
        },
      ],
    },
    {
      type: 'second',
      images: [
        {
          src: 'https://www.figma.com/api/mcp/asset/720e614d-8ce2-415d-826c-ef406bfc6863',
          alt: 'Partner 2',
          className: 'partners__logo-img',
        },
        {
          src: 'https://www.figma.com/api/mcp/asset/c01edf1f-5567-4d43-857d-55ee62b9e139',
          alt: 'Merlines',
          className: 'partners__logo-merlines',
        },
      ],
    },
    {
      type: 'third',
      images: [
        {
          src: 'https://www.figma.com/api/mcp/asset/78dbf48b-f6f4-46e3-bdce-ac67042d383e',
          alt: 'Cloud Minding',
          className: 'partners__logo-img',
        },
      ],
    },
    {
      type: 'fourth',
      images: [
        {
          src: 'https://www.figma.com/api/mcp/asset/973a4cba-c1f3-417e-bee2-4e1899143bd2',
          alt: 'WP',
          className: 'partners__logo-img',
        },
      ],
    },
  ]

  return (
    <section className="partners">
      <div className="partners__container">
        <div className="partners__track">
          {/* Original set */}
          {logos.map((logo, index) => (
            <div key={`logo-${index}`} className={`partners__logo partners__logo--${logo.type}`}>
              {logo.images.map((img, imgIndex) => (
                <img
                  key={`img-${index}-${imgIndex}`}
                  src={img.src}
                  alt={img.alt}
                  className={img.className}
                />
              ))}
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-duplicate-${index}`}
              className={`partners__logo partners__logo--${logo.type}`}
            >
              {logo.images.map((img, imgIndex) => (
                <img
                  key={`img-duplicate-${index}-${imgIndex}`}
                  src={img.src}
                  alt={img.alt}
                  className={img.className}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
