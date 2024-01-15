import LoginHeader from "../components/LoginHeader";
import { useState } from "react";

const Login = () => {
  const [pw, setPw] = useState("");
  const [pwValid, setPwVaild] = useState(false);

  const handlePw = (e) => {
    setPw(e.target.value);
    /* 정규식 */
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (reg.test(pw)) {
      setPwVaild(true);
    } else {
      setPwVaild(false);
    }
  };

  return (
    <div className="Login">
      <LoginHeader titleText={"로그인"} />
      <div className="login_content">
        <div className="login_title">아이디</div>
        <input type="text" placeholder="아이디" />

        <div className="login_title">비밀번호</div>
        <input
          className="pw_input"
          type="passward"
          placeholder="비밀번호"
          value={pw}
          onChange={handlePw}
        />
        <div className="login_error">
          {!pwValid && pw.length > 0 && (
            <div> 영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>

        <div className="login_btn">
          <button>로그인</button>
        </div>

        <div className="login_search">
          <a className="login_search_id" href="#">
            아이디 찾기
          </a>
          <span>|</span>
          <a className="login_search_pw" href="#">
            비밀번호 찾기
          </a>
          <span>|</span>
          <a className="login_search_sign_up" href={"/signup"}>
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
