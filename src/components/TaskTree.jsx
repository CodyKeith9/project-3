import './TaskTree.css';

function TaskTree({ tasks, onToggleComplete, onDelete }) {
  return (
    <div className="task-tree-vertical">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className={`task-card ${index % 2 === 0 ? 'left' : 'right'} ${task.completed ? 'completed' : ''}`}
        >
          <div className="task-content">
            <p>{task.text}</p>
            <div className="task-actions">
              <button onClick={() => onToggleComplete(task.id)}>✓</button>
              <button onClick={() => onDelete(task.id)}>×</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskTree;
