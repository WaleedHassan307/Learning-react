import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

const getData = async () =>{

 const response = await axios.get('https://picsum.photos/v2/list')

 setData(response.data)
  
}






// const response = await axios.get('https://jsonplaceholder.typicode.com/users')

// console.log(response)



// const response = await fetch('https://jsonplaceholder.typicode.com/users')

// const data = await response.json()
// console.log(data);


  return (
    <div>
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
    <div>
      {data.map(function(elem, idx){
        return <h3>Hello {elem.author} {idx}</h3>
      })}
    </div>


    </div>
  )

}
export default App
