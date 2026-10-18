import React from 'react'
import Button from '../button/Button'

const Card = ({name,email,btnName}) => {
  return (
    <div className="hol-container">
      <div className="card">
        <h2 className="name">{name}</h2>
        <p className="email">{email}</p>
      </div>

      <div className="btn-container">
        <Button name={btnName} />
      </div>
    </div>
  )
}

export default Card