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
      <input
        type="text"
        value={'Some text'}
        placeholder="Task title"
        required
      />
      <select>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default App;
