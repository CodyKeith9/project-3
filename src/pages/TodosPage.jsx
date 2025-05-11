import { useState } from 'react';
import TaskTree from '../components/TaskTree';

function TodosPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Drink Water", completed: false, default: true },
    { id: 2, text: "Stretch for 2 Minutes", completed: false, default: true },
    { id: 3, text: "Check Today’s Calendar", completed: false, default: true }
  ]);

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
      <h2>Your Task Tree</h2>
      <TaskTree tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default TodosPage;
