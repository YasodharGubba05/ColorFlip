import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setcolor] = useState('lavender')

  return (
    <div className='content'style={{backgroundColor:color}}>
      <h1 className='heading'>Color Flip</h1>
      <div className='buttonElements'>
        <button onClick={()=> setcolor('lightblue')}
         className='blue'>blue</button>
        <button onClick={()=> setcolor('lightpink')}
        className='gray'>pink</button>
        <button onClick={()=> setcolor('green')}
        className='green'>green</button>
      </div>
    </div>
  )
}

export default App
