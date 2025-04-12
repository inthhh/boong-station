import React, { useState, useEffect } from "react";
import "./styles/Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  // 시간 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 클린업
  }, []);

  return (
    <div className="clock">
      <div className="time">{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
    </div>
  );
}

export default Clock;
