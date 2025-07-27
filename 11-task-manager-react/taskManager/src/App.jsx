import React, { useEffect, useState } from 'react'

const App = () => {

  const [task, setTask] = useState(undefined)
  const [taskList, setTaskList] = useState([])

  const [edit, setEdit] = useState(false)

  console.log(taskList)


  function handleSubmit(task) {
    setTaskList(previous => [...previous, task])
    setTask('')
  }

  function handleEdit(e, indexToDelete) {
    setEdit(!edit)
    setTaskList(prev => prev.filter((_, index) => index !== indexToDelete));
    // push the item in the same index as the previously deleted one with the help of e.target in the input
  }

  function deleteItem(indexToDelete) {
    setTaskList(prev => prev.filter((_, index) => index !== indexToDelete));
  }



  return (
    <>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(task)
        }}>

          <input type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button type='submit'>Add task</button>
        </form>
        <ul>
          {taskList.map((item, index) => {
            return (
              <li key={index}>
                {item}
                {edit && <span><input type='text'/><button onClick={() => handleEdit(index)}>Done</button></span>}
                <button onClick={() => deleteItem(index)}>Delete</button>
                <button onClick={() => setEdit(!edit)}>Edit</button>
              </li>
            )
          })}
        </ul>

      </div>
    </>
  )
}

export default App