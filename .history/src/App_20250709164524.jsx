import {useState} from 'react';

function App () {
  const [tasks, setTasks] = useState ([]);
  const [completedTasks, setCompletedTasks] = useState ([]);
  const [openSection, setOpenSection] = useState ({
    taskList: false,
    tasks: true,
    completedTasks: true,
  });

  const toggleSection = section => {
    setOpenSection (prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const addTask = task => {
    setTasks ([...tasks, {...task, completed: false, id: Date.now ()}]);
  };

  const activeTasks = tasks.filter (task => !task.completed);
  const completedTasksList = tasks.filter (task => task.completed);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button
          className={`close-button ${openSection.taskList ? 'open' : ''}`}
          onClick={() => toggleSection ('taskList')}
        >
          +
        </button>
        {openSection.taskList && <TaskForm addTask={addTask} />}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button
          className={`close-button ${openSection.tasks ? 'open' : ''}`}
          onClick={() => toggleSection ('tasks')}
        >
          +
        </button>
        {openSection.tasks && <TaskList activeTasks={activeTasks} />}
        <div className="sort-controls">
          <button className="sort-button">By date</button>
          <button className="sort-button">By Priority</button>
        </div>
      </div>

      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button
          className={`close-button ${openSection.completedTasks ? 'open' : ''}`}
          onClick={() => toggleSection ('completedTasks')}
        >
          +
        </button>
        {openSection.completedTasks && <CompletedTaskList />}
      </div>

      <Footer />
    </div>
  );
}

const TaskForm = ({addTask}) => {
  const [formData, setFormData] = useState ({
    title: '',
    priority: 'low',
    deadline: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData (prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log ('Task submitted:', formData);
    if (formData.title.trim () && formData.deadline) {
      addTask (formData);
      setFormData ({title: '', priority: 'low', deadline: ''});
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Task title"
        required
        onChange={handleChange}
      />
      <select
        name="priority"
        value={formData.priority}
        required
        onChange={handleChange}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <input
        type="datetime-local"
        name="deadline"
        value={formData.deadline}
        required
        onChange={handleChange}
      />
      <button type="submit" onSubmit={handleSubmit}>Add Task</button>
    </form>
  );
};

const TaskList = ({activeTasks}) => {
  return (
    <ul className="task-list">
      {activeTasks.map (task => <TaskItem key={task.id} task={task} />)}
    </ul>
  );
};

const TaskItem = ({task}) => {
  const completeTask = () => {
    // Logic to mark task as completed
    console.log (`Task ${task.id} completed`);
  };
  const deleteTask = () => {
    // Logic to delete task
    console.log (`Task ${task.id} deleted`);
  };

  return (
    <li className={`task-item ${task.priority.toLowerCase ()}`}>
      <div className="task-info">
        <div>
          {task.title} <strong>{task.priority}</strong>
        </div>
        <div className="task-deadline">
          Due: {new Date (task.deadline).toLocaleString ()}
        </div>
      </div>
      <div className="task-buttons">
        <button className="complete-button">Complete</button>
        <button className="delete-button" onClick={() => deleteTask (task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

const CompletedTaskList = () => {
  return (
    <ul className="completed-task-list">
      {/* <TaskItem /> */}
      gdd
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Technologies and React concepts used: React, JSX, props, useState,
        component composition, conditional rendering,
        array methods (map, filter), and event handling.
      </p>
    </footer>
  );
};

export default App;
