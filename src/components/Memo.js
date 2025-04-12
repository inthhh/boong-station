import React, { useState, useEffect } from "react";
import "./styles/Memo.css";

function Memo() {
  const [memoText, setMemoText] = useState("");

  // 로컬 스토리지에서 메모 불러오기
  useEffect(() => {
    const savedMemo = localStorage.getItem("memo");
    if (savedMemo) {
      setMemoText(savedMemo);
    }
  }, []);

  // 메모가 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("memo", memoText);
  }, [memoText]);

  const handleChange = (event) => {
    setMemoText(event.target.value);
  };

  return (
    <div className="memo-widget">
      <h3 className="memo-title">Memo</h3>
      <textarea
        value={memoText}
        onChange={handleChange}
        placeholder="Write your memo here..."
        className="memo-textarea"
      />
    </div>
  );
}

export default Memo;
