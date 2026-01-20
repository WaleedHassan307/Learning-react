import React, { useState } from 'react'
import {X} from 'lucide-react'
const App = () => {
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler =(e)=>{
   e.preventDefault()
   
   const copyTask =[...task];
   copyTask.push({title,details})

   setTask(copyTask)
    
   
   setTitle('')
   setDetails('')
  }

  const deleteNote =(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white ' >
     
      <form onSubmit ={(e)=>{
        submitHandler(e)
      }} className='flex lg:w-1/2  gap-4 items-start  flex-col  p-10 '>
         <h1 className='text-4xl font-bold'>Add Notes</h1>
    
          <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 w-full font-medium py-2 outline-none rounded border-2'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
     <textarea
      type="text"
       className='px-5 w-full h-32 font-medium py-2 flex items-start flex-row border-2 outline-none rounded' 
       placeholder='Write Detail'
       value={details}
       onChange={(e)=>{
        setDetails(e.target.value)
       }}
       />
       <button 
       className='bg-white w-full font-medium text-black outline-none px-5 py-2 rounded active:scale-95'>
        Add Notes
        </button>

     
      </form>
      <div className=' lg:w-1/2  lg:border-l-2  p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
     <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'> 
          {task.map(function(elem, idx) {
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black py-8 pb-4 px-4 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              
            <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight text-sxs font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 rounded font-bold text-xs text-white'>Delete</button>
           </div>
          })}
      </div>      
      </div>
    </div>
  )
}

export default App
