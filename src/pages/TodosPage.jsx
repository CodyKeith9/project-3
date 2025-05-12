import { useState } from 'react';
import TaskTree from '../components/TaskTree';
import TaskForm from '../components/TaskForm';

function TodosPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Drink Water", completed: false, default: true },
    { id: 2, text: "Stretch for 2 Minutes", completed: false, default: true },
    { id: 3, text: "Check Today’s Calendar", completed: false, default: true }
  ]);

  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      default: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <TaskForm onAdd={addTask} />

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
        <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>Incomplete</button>
      </div>

      <TaskTree tasks={filteredTasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default TodosPage;

