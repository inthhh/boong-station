import React, { useState, useEffect } from "react";
import "./Mantra.css";

function Mantra() {
  const [mantra, setMantra] = useState("");

  // 동기부여 문구 배열
  const mantras = [
    "당신은 해낼 수 있어요!",
    "끝까지 밀고 나가세요!",
    "오늘은 새로운 시작입니다.",
    "크게 꿈꾸고 열심히 노력하세요.",
    "긍정적으로 생각하고 최선을 다한다면, 이루어질 거예요.",
    "스스로를 믿으세요!",
    "작은 걸음도 큰 변화를 만듭니다.",
    "지금부터가 가장 중요한 순간입니다.",
    "노력은 절대 배신하지 않습니다.",
    "포기하지 마세요. 당신은 강합니다.",
  ];

  // 랜덤 문구 설정
  useEffect(() => {
    setMantra(mantras[Math.floor(Math.random() * mantras.length)]);
  }, []);

  return <div className="mantra">{mantra}</div>;
}

export default Mantra;
