import React, { useState, useEffect } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 로컬 스토리지에서 데이터 가져오기
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); // JSON 문자열 -> 객체로 변환
    }
  }, []);

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // 객체 -> JSON 문자열로 변환
  }, [tasks]);

  const handleAddTask = () => {
    if (inputValue.trim() === "") return; // 빈 입력 방지
    setTasks([...tasks, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="widget todo-widget" style={{ width: "calc(100% - 40px)" }}>
      <h3 className="widget-title">To Do List</h3>
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // 기본 동작 방지
              handleAddTask();
            }
          }}
          className="todo-input"
        />
        <button onClick={handleAddTask} className="todo-add-button">
          +
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(index)}
                className="todo-checkbox"
              />
              <span className={`todo-text ${task.completed ? "completed" : ""}`}>{task.text}</span>
            </label>
            <button onClick={() => handleDeleteTask(index)} className="todo-delete-button">
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
