import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     
              
      <Card user= 'Farhan' age={25}  img = "https://plus.unsplash.com/premium_photo-1764695440099-2c5e152e950a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user= 'Waleed' age={30} img = "https://images.unsplash.com/photo-1767891635138-03833168bd89?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user= 'Ali' age={28} img = "https://images.unsplash.com/photo-1767321661106-f2221d9096f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
