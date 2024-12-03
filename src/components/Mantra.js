import React, { useState, useEffect } from "react";
import "./Mantra.css";

function Mantra() {
  const [mantra, setMantra] = useState("");

  // 동기부여 문구 배열
  const mantras = [
    "고생 끝에 낙이 옵니다.",
    "노력은 절대 배신하지 않습니다.",
    "기회는 준비된 자에게 옵니다.",
    "가는 말이 고와야 오는 말이 곱습니다.",
    "좋은 일이 생길 것입니다.",
    "성공은 행동으로부터 시작됩니다.",
    "오늘의 실패는 내일의 밑거름입니다.",
    "'제안하기' 버튼을 눌러 나만의 Mantra를 제안해주세요.",
    "붕어빵 세계에는 팥 붕어빵과 슈크림 붕어빵의 양대 산맥이 존재합니다.",
    "군고구마는 손만 따뜻하게 만드는 게 아니라 마음도 데웁니다.",
    "추운 날엔 붕어빵 한 마리가 백 마리 말보다 위로가 됩니다.",
    "타코야끼의 진리는 겉바속촉, 인생의 균형을 닮았습니다.",
    "군밤은 은은한 향기로 겨울밤의 낭만을 굽습니다.",
    "붕어빵은 머리부터 먹느냐, 꼬리부터 먹느냐로 성격을 보여줍니다.",
    "따끈한 어묵 국물 한 모금은 겨울바람을 이기는 비밀 무기입니다.",
    "'제안하기' 버튼을 눌러 나만의 Mantra를 제안해주세요.",
    "군고구마의 달콤함은 겨울 추위 속의 작은 기쁨입니다.",
    "타코야끼 안의 문어처럼, 인생도 가끔은 뜻밖의 즐거움이 숨어 있습니다.",
    "하늘은 스스로 돕는 자를 돕습니다.",
    "포기하지 않으면 반드시 길이 열립니다.",
    "작은 성공이 큰 성공을 이끕니다.",
    "시작이 반입니다.",
    "성공은 넘어지지 않는 것이 아니라, 다시 일어나는 것입니다.",
    "도전하지 않으면 아무것도 이룰 수 없습니다.",
    "한 우물을 파야 성공할 수 있습니다.",
    "열 번 찍어 안 넘어가는 나무는 없습니다.",
    "'제안하기' 버튼을 눌러 나만의 Mantra를 제안해주세요.",
  ];

  // 랜덤 문구 설정
  useEffect(() => {
    setMantra(mantras[Math.floor(Math.random() * mantras.length)]);
  }, []);

  return <div className="mantra">{mantra}</div>;
}

export default Mantra;
