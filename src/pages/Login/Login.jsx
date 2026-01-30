import './Login.css'

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__card">
          <h1 className="login__title">Вход</h1>
          <p className="login__subtitle">Функционал в разработке</p>
          <div className="login__placeholder">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="50" fill="var(--color-violet)" opacity="0.1" />
              <path
                d="M50 30v40M30 50h40"
                stroke="var(--color-violet)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
