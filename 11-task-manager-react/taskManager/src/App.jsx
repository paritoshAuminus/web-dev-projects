import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList(prev => [...prev, task])
    setTask('')
  }

  const handleDelete = () => {
    let itemToDelete = taskList.indexOf((i) => i == e.target.value)
    taskList.splice(itemToDelete, 1)
  }


  return (
    <>
      <form onSubmit={handleSubmit} className='p-3 flex gap-3'>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className='border-1 border-black px-2 rounded-md'/>
        <button type='submit' className='border-1 border-black hover:bg-indigo-500 py-1 px-2 rounded-lg cursor-pointer'>Add Task</button>
      </form>
      <ul>
        {taskList.map((item, index) => (
          <>
          <div key={index} className='flex gap-3 items-center p-3'>
            <li>{item}</li><button onClick={handleDelete} className='px-3 py-1 border-1 border-black cursor-pointer rounded-lg hover:bg-red-300 transition-all delay-75'>Delete</button>
          </div>
          </>
        ))}
      </ul>
      
    </>
  )
}

export default App