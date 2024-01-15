import { useState } from "react";
import LoginHeader from "../components/LoginHeader";
import { FaCheck } from "react-icons/fa6";

const SingUp = () => {
  const checkIconSize = 8 * 3;
  return (
    <div className="SingUp">
      <LoginHeader titleText={"회원가입"} />
      <div className="signup_content">
        <div className="signup_h4">
          <h4>회원정보 입력</h4>
        </div>

        <div className="signup_box">
          <div className="signup_title">아이디!!!!!!!!!</div>
          <input className="input" />
        </div>

        <div className="signup_box">
          <div className="signup_title">비밀번호</div>
          <input type="password" className="input" />
        </div>

        <div className="signup_box">
          <div className="signup_title">비밀번호 확인</div>
          <input type="password" className="input" />
        </div>

        <div className="signup_box">
          <div className="signup_title">이름</div>
          <input className="input" />
        </div>

        <div className="signup_box">
          <div className="signup_title">주소</div>
          <div className="addr_box">
            <input className="input_addr_num" />
            <button>주소 검색</button>
            <div className="addr_box_sub">
              <input className="input_addr_main" />
              <input className="input_addr_detail" />
            </div>
          </div>
        </div>

        <div className="signup_box">
          <div className="signup_title">휴대전화</div>
          <select>
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
            <option>019</option>
          </select>
          <span>-</span>
          <input className="input" />
          <span>-</span>
          <input className="input" />
        </div>

        <div className="signup_box">
          <div className="signup_title">성별</div>
          <input className="checkbox" type="checkbox" />
          <label>남자</label>
          <input className="checkbox" type="checkbox" />
          <label>여자</label>
        </div>

        <div className="signup_box">
          <div className="signup_title">생년월일</div>
          <input className="input" placeholder="ex) 990101" />
        </div>

        <div className="signp_btn">
          <button>
            <span>회원 가입하기</span>
            <FaCheck className="icon" size={checkIconSize} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
