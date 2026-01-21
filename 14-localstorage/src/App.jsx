import React from 'react'

const App = () => {

// const user ={
//   username : 'Waleed',
//   age:24,
//   city: 'Gojra'
// }

// localStorage.setItem('user', JSON.stringify(user))

const user = JSON.parse(localStorage.getItem('user'))
console.log(user);
  return (
    <div>
      App
    </div>
  )
}

export default App
