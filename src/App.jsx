import React, { useState, useEffect } from 'react';
import "./App.css"
import Second from './assets/components/Second';
import Product from './assets/components/Second/Product';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(() => {
    console.log(`Total tasks: ${tasks.length}`);
  }, [tasks]); 
  const addTask = (category) => {
    if (!taskName || !taskDescription) {
      alert('Hamma maydonlarni toldiring');
      return;
    }
    const newTask = {
      id: Date.now(),  
      name: taskName,
      description: taskDescription,
      category: category,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskDescription('');
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const filteredTasks = filter ? tasks.filter((task) => task.category === filter) : tasks;
  return (
    <div className='wrapper'>
      <h2 className='second-title'>1-topshiriq</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="">All Categories</option>
          <option value="work">Work</option>
          <option value="study">Study</option>
          <option value="personal">Personal</option>
        </select>
      </div>
      <button onClick={() => addTask(filter)}>Add Task</button>
      <div>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p><strong></strong> {task.category}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <Second></Second>
      <Product></Product>
    </div>
  );
}
export default App;
