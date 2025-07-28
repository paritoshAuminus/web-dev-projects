import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editedTask, setEditedTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // null means no item is being edited

  function handleSubmit(task) {
    if (task.trim()) {
      setTaskList(prev => [...prev, task]);
      setTask('');
    }
  }

  function startEditing(index) {
    setEditingIndex(index);
    setEditedTask(taskList[index]); // pre-fill input with existing task
  }

  function applyEdit(index) {
    if (editedTask.trim()) {
      setTaskList(prev =>
        prev.map((item, i) => (i === index ? editedTask : item))
      );
      setEditingIndex(null); // done editing
      setEditedTask('');
    }
  }

  function deleteItem(indexToDelete) {
    setTaskList(prev => prev.filter((_, index) => index !== indexToDelete));
  }

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(task);
          }}
        >
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button type="submit">Add task</button>
        </form>
        <ul>
          {taskList.map((item, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                  <button onClick={() => applyEdit(index)}>Done</button>
                </>
              ) : (
                <>
                  {item}
                  <button onClick={() => deleteItem(index)}>Delete</button>
                  <button onClick={() => startEditing(index)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
