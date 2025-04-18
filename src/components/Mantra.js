import React, { useState, useEffect } from "react";
import "./styles/Mantra.css";

function Mantra() {
  const [mantra, setMantra] = useState("");

  // 동기부여 문구 배열
  const mantras = [
    "'제안하기' 버튼을 눌러 나만의 Mantra를 제안해주세요.",
    // "붕어빵 세계에는 팥 붕어빵과 슈크림 붕어빵의 양대 산맥이 존재합니다.",
    // "군고구마는 손만 따뜻하게 만드는 게 아니라 마음도 데웁니다.",
    // "추운 날엔 붕어빵 한 마리가 백 마리 말보다 위로가 됩니다.",
    // "타코야끼의 진리는 겉바속촉, 인생의 균형을 닮았습니다.",
    // "군밤은 은은한 향기로 겨울밤의 낭만을 굽습니다.",
    // "붕어빵은 머리부터 먹느냐, 꼬리부터 먹느냐로 성격을 보여줍니다.",
    // "따끈한 어묵 국물 한 모금은 겨울바람을 이기는 비밀 무기입니다.",
    // "군고구마의 달콤함은 겨울 추위 속의 작은 기쁨입니다.",
    // "타코야끼 안의 문어처럼, 인생도 가끔은 뜻밖의 즐거움이 숨어 있습니다.",
    "하늘은 스스로 돕는 자를 돕는다.",
    "포기하지 않으면 반드시 길이 열린다.",
    "작은 성공이 큰 성공을 이끈다.",
    "성공은 넘어지지 않는 것이 아니라, 다시 일어나는 것이다.",
    "도전하지 않으면 아무것도 이룰 수 없다.",
    "실패는 성공의 어머니다.",
    "열 번 찍어 안 넘어가는 나무는 없다.",
    "'제안하기' 버튼을 눌러 나만의 Mantra를 제안해주세요.",
    "시작이 반이다.",
    "지금 흘리는 땀은 내일의 자산이 된다.",
    "포기하지 마. 끝날 때까지 끝난 게 아니다.",
    "실패는 넘어지는 게 아니라, 일어나지 않는 것이다.",
    "작은 걸 꾸준히 하면 큰 결과를 만든다.",
    "오늘의 노력이 내일의 나를 만든다.",
    "느리게 가도 멈추지 않으면 된다.",
    "할 수 있을 때가 아니라, 하고 싶을 때가 그때다.",
    "꿈은 이루어지는 것이 아니라, 이루는 것이다.",
    "너는 생각보다 강하고, 멀리 갈 수 있다.",
    "지금 하는 일이 너를 더 나은 사람으로 만들 것이다.",
    "너의 노력은 결코 헛되지 않을 것이다.",
    "세상은 너의 가능성을 기다리고 있다.",
    "너의 꿈은 너의 손에 달려 있다.",
    "너의 열정은 너를 성공으로 이끌 것이다.",
    "너는 이미 충분히 잘하고 있다.",
    "너의 길은 너가 만들어가는 것이다.",
    "자기 자신을 이기는 것이 가장 위대한 승리다. - 플라톤",
    "성공한 사람이 되기보다 가치 있는 사람이 되어라. - 알베르트 아인슈타인",
    "행동이 모든 성공의 근원이다. - 파블로 피카소",
    "성취는 하고자 하는 마음에서 시작된다. - 나폴레온 힐",
    "위대한 일은 작은 일을 반복하는 데서 시작된다. - 빈스 롬바르디",
    "내일의 성장은 오늘의 노력이 만든다.",
    "오늘의 나를 어제의 나보다 조금 더 낫게 만들어라.",
    "계속 나아가라. 완벽하지 않아도 괜찮다.",
    "천천히 가더라도 절대 멈추지 마라. - 공자",
    "기회는 우연히 오지 않는다. 만들어가는 것이다.",
    "성공은 실패를 딛고 일어난 사람의 것이다.",
    "작은 성취가 큰 자신감을 만든다.",
    "꾸준함은 재능을 이긴다.",
    "성장은 불편함을 이겨낸 사람에게 온다.",
    "자신을 믿는 순간, 모든 것이 가능해진다.",
    "실패는 성공의 어머니다.",
    "기회는 준비된 자에게만 온다.",
    "'제안하기' 버튼을 눌러 나만의 Mantra를 제안해주세요.",
  ];

  // 랜덤 문구 설정
  useEffect(() => {
    setMantra(mantras[Math.floor(Math.random() * mantras.length)]);
  }, []);

  return <div className="mantra">{mantra}</div>;
}

export default Mantra;
