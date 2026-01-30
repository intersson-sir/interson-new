import './Clients.css'

function Clients() {
  const clients = [
    'Client 1',
    'Client 2',
    'Client 3',
    'Client 4',
    'Client 5',
    'Client 6',
    'Client 7',
    'Client 8',
  ]

  return (
    <section className="clients">
      <div className="clients__container">
        <h2 className="clients__title">Нам доверяют</h2>
        <div className="clients__grid">
          {clients.map(client => (
            <div key={client} className="clients__logo">
              <span>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
