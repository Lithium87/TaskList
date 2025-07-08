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
      {/* Example task item */}
      <li className="task-item">
        <span>Task Title</span>
        <span className="priority">High Priority</span>
        <span className="due-date">2023-10-01 12:00</span>
        <button className="complete-button">Complete</button>
      </li>
    </ul>
  );
};

export default App;
