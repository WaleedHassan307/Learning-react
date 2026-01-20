import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user: 'Waleed', age:24})

  const btnClicked =()=>{
      const newNum ={...num};
      newNum.user='Fahad'
      newNum.age=25
      setnum(newNum)
  

  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App