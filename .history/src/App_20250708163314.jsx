function App () {
  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button className="close-button">+</button>
        <TaskForm />
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button className="close-button">+</button>
        <div className="sort-controls">
          <button className="sort-button">By date</button>
          <button className="sort-button">By Priority</button>
        </div>
        <TaskList />
      </div>

      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button className="close-button">+</button>
      </div>
    </div>
  );
}

const TaskForm = () => {
  return (
    <form className="task-form">
      <input type="text" value={''} placeholder="Task title" required />
      <select value={''} required>
        <option value="" disabled>Select Priority</option>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <input type="datetime-local" value={''} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

const TaskList = () => {
  return (
    <ul className="task-list">
      <TaskItem title="Task 1" priority="low" dueDate="2023-10-01T10:00" />
    </ul>
  );
};

const TaskItem = ({title, priority, dueDate}) => {
  return (
    <li className="task-item">
      <span>{title}</span>
      <span className={`priority ${priority}`}>
        {priority.charAt (0).toUpperCase () + priority.slice (1)} Priority
      </span>
      <span className="due-date">{dueDate}</span>
      <button className="complete-button">Complete</button>
    </li>
  );
};

export default App;
