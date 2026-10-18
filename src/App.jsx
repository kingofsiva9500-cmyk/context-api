import { useState } from 'react'
import './App.css'
import Context from './Context'
import Card from './card/Card'


const App = () => {
  
  const [count , setCount] = useState(0);
  
  return (
    <>
   

     <Context.Provider value={{count ,setCount }}>
      <h1 className='head'>{count}</h1>
       <div className='app-container'>
      <Card name="Sivagiri" email="sivagiri@gmail.com" btnName="button1" />
      <Card name="Hari" email="hari@gmail.com" btnName="button2" />
      <Card name="Pradeesh" email="pradeesh@gmail.com" btnName="button3" />
    </div>
     </Context.Provider>
     
    </>
  )
}

export default App
