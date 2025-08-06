import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  function handleChange(e) {
    setTask(prev => prev = e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTaskList(prev => [...prev, task])
    setTask('')
  }

  function handleDelete(item) {
    setTaskList(taskList.filter((i) => i !== item))
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} className='flex gap-3'>
        <input type="text" onChange={handleChange} value={task} className='border-1'/>
        <button type='submit' className='bg-indigo-400 text-white'>Add task</button>
      </form>
      <div>
        <ul>
          {taskList.map((item, index) => (
            <li key={index} className='flex gap-3'>
            <span>{item}</span>
            <button onClick={() => handleDelete(item)} className='bg-red-400 text-white'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App