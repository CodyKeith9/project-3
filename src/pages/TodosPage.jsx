import { useState } from 'react';
import TaskTree from '../components/TaskTree';
import TaskForm from '../components/TaskForm';

function TodosPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Drink Water", completed: false, default: true },
    { id: 2, text: "Stretch for 2 Minutes", completed: false, default: true },
    { id: 3, text: "Check Today’s Calendar", completed: false, default: true }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      default: false
    };
    setTasks([ ...tasks, newTask ]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <TaskForm onAdd={addTask} />
      <TaskTree tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default TodosPage;
