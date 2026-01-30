import './Partners.css'

function Partners() {
  return (
    <section className="partners">
      <div className="partners__container">
        <div className="partners__logo partners__logo--first">
          <img
            src="https://www.figma.com/api/mcp/asset/8726cac3-c642-47a7-8219-3af269fbf362"
            alt="Partner 1"
            className="partners__logo-img"
          />
        </div>

        <div className="partners__logo partners__logo--second">
          <img
            src="https://www.figma.com/api/mcp/asset/720e614d-8ce2-415d-826c-ef406bfc6863"
            alt="Partner 2"
            className="partners__logo-img"
          />
          <img
            src="https://www.figma.com/api/mcp/asset/c01edf1f-5567-4d43-857d-55ee62b9e139"
            alt="Merlines"
            className="partners__logo-merlines"
          />
        </div>

        <div className="partners__logo partners__logo--third">
          <img
            src="https://www.figma.com/api/mcp/asset/78dbf48b-f6f4-46e3-bdce-ac67042d383e"
            alt="Cloud Minding"
            className="partners__logo-img"
          />
        </div>

        <div className="partners__logo partners__logo--fourth">
          <img
            src="https://www.figma.com/api/mcp/asset/973a4cba-c1f3-417e-bee2-4e1899143bd2"
            alt="WP"
            className="partners__logo-img"
          />
        </div>
      </div>
    </section>
  )
}

export default Partners
