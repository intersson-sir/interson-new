import './Button.css'

function Button({ children, variant = 'primary', size = 'medium', onClick, className = '', ...props }) {
  return (
    <button
      className={`button button--${variant} button--${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
