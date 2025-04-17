import React from 'react'

 const CustomButton = ({type = 'button',
  label,
  onClick,
  btnClassName = 'btn-primary',
  wrapperClassName = '',
  icon, // optional: pass icon JSX here like <i className="bi bi-arrow-right" 
}) => {
  return (
    <div className={wrapperClassName}>
    <button
      type={type}
      className={`btn ${btnClassName}`}
      onClick={onClick}
     
    >
      {icon && <span className="me-2">{icon}</span>}
      {label}
    </button>
  </div>

  )

}



export default CustomButton;