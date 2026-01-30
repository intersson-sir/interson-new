import './Team.css'

function Team() {
  const team = [
    { name: 'Andrey Andersson', role: 'CEO', image: '' },
    { name: 'Maria Molotkova', role: 'Project Manager', image: '' },
    { name: 'Alex Petrov', role: 'Tech Lead', image: '' },
    { name: 'Elena Smirnova', role: 'Design Lead', image: '' },
  ]

  return (
    <section className="team">
      <div className="team__container">
        <h2 className="team__title">Наша команда</h2>
        <div className="team__grid">
          {team.map(member => (
            <div key={member.name} className="team__member">
              <div className="team__member-image"></div>
              <h3 className="team__member-name">{member.name}</h3>
              <p className="team__member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
