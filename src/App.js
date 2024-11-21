import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Mantra from "./components/Mantra";
import TodoList from "./components/TodoList";
import CustomCalendar from "./components/Calendar";
import TitleImg from "./imgs/title_logo.png";

function App() {
  return (
    <body>
      <img src={TitleImg} alt="boong title img" className="title-img" width="200px" />
      <div className="app-container">
        {/* Clock and Mantra Section */}
        <div className="left-section">
          <Clock />
          <Mantra />
        </div>

        {/* Widgets Section */}
        <div className="right-section">
          <TodoList />
          <CustomCalendar />
        </div>
      </div>
    </body>
  );
}

export default App;
