import './TaskTree.css';

function TaskTree({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className="task-tree-container">
      <div className="task-line" />
      <ul className="task-nodes">
        {tasks.map((task) => (
          <li key={task.id} className={`task-node ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => onToggleComplete(task.id)}>{task.text}</span>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTree;
