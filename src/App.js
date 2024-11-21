import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import Mantra from "./components/Mantra";
import TodoList from "./components/TodoList";
import CustomCalendar from "./components/Calendar";
import TitleImg from "./imgs/title_logo.png";
import Memo from "./components/Memo";
import Bookmarks from "./components/Bookmarks";

function App() {
  return (
    <body>
      <img src={TitleImg} alt="boong title img" className="title-img" width="200px" />
      <div className="app-container">
        {/* Clock and Mantra Section */}
        <div className="left-section">
          <Clock />
          <Mantra />
          <Bookmarks />
        </div>

        {/* Widgets Section */}
        <div className="right-section">
          <TodoList />
          <div className="right-bottom">
            <CustomCalendar />
            <Memo />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
