import React, { useState, useRef } from "react";
import "./styles/Footer.css";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import boongLogo from "../imgs/nobackground.png";

function Footer() {
  const [popupType, setPopupType] = useState(null); // 팝업 유형 저장
  const [check, setCheck] = useState(false); // 개인정보 수집 동의 체크 상태
  const form = useRef(); // 폼 데이터 참조

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 방지

    if (check) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID, // EmailJS Service ID
          process.env.REACT_APP_EMAIL_TEMPLATE_ID, // EmailJS Template ID
          form.current, // 폼 참조
          process.env.REACT_APP_EMAIL_PUBLIC_KEY // EmailJS Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("성공적으로 전송되었습니다!", {
              style: {
                maxWidth: "1000px",
                width: "300px",
                fontSize: "16px",
              },
            });
            e.target.reset(); // 성공적으로 전송되었을 때 폼 초기화
          },
          (error) => {
            console.log(error.text);
            toast.error("전송에 실패했습니다. 다시 시도해주세요.", {
              style: {
                maxWidth: "1000px",
                width: "300px",
                fontSize: "16px",
              },
            });
          }
        );
    } else {
      toast.warn("개인정보 수집 동의에 체크해주세요.", {
        style: {
          maxWidth: "1000px",
          width: "300px",
          fontSize: "16px",
        },
      });
    }
  };

  const handleChange = (e) => {
    setCheck(e.target.checked); // 체크박스 상태 업데이트
  };

  return (
    <div className="footer">
      <div className="btn" onClick={() => setPopupType("suggestion")}>
        제안하기
      </div>
      <div className="btn" onClick={() => setPopupType("support")}>
        후원하기
      </div>

      {/* 팝업 */}
      {/* 제안하기 팝업 */}
      {popupType === "suggestion" && (
        <div className="popup">
          <div className="popup-content">
            <h3>제안하기</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="input_container">
                <label htmlFor="name">Name:</label>
                <input type="text" name="user_name" id="name" placeholder="성함을 입력해주세요" required />
              </div>
              <div className="input_container">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="회신 받으실 이메일 주소를 입력해주세요"
                  required
                />
              </div>
              <div className="input_container" style={{ paddingTop: "10px" }}>
                <label>Message:</label>
                <textarea name="message" cols="30" rows="5" placeholder="내용을 입력해주세요" required></textarea>
              </div>
              <div className="agree">
                <span>
                  본인은 개인정보 보호법 제15조에 의거하여 본인의 개인정보 (이메일)를 제공할 것을 동의합니다.
                  <br />
                </span>
                <input type="checkbox" onChange={handleChange} required className="input_checkbox" />
                개인정보 수집에 동의합니다.
              </div>
              <div className="popup-buttons">
                <button className="button" type="submit" disabled={!check}>
                  전송
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={() => setPopupType(null)}
                  style={{ marginLeft: "10px" }}
                >
                  닫기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 후원하기 팝업 */}
      {popupType === "support" && (
        <div className="popup">
          <div className="popup-content">
            <h3>후원하기</h3>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
              <p>개발자에게 붕어빵 사주기</p>
              <img src={boongLogo} alt="boong logo" width={"30px"} height={"30px"} />
            </div>
            <p style={{ marginTop: "5px", color: "#94394e" }}>650702-01-472858 (국민)</p>
            <div className="popup-buttons">
              <div></div>
              <button className="button" onClick={() => setPopupType(null)}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
