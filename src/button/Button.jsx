import React, { useContext } from 'react'
import Context from '../Context'

const Button = ({name}) => {

    const data = useContext(Context)
    console.log(data);
    

  return (
     <button onClick={() => data.setCount(data.count + 1)} className="btn">
          {name}
    </button>
  )
}

export default Button