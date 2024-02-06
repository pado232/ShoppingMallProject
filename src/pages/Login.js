import LoginHeader from "../components/LoginHeader";
import { useState } from "react";

import { HiOutlineLockClosed } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import IdBox from "../components/IdBox";
import MyButton from "../components/MyButton";

const Login = () => {
  const [pw, setPw] = useState("");
  const [pwValid, setPwVaild] = useState(false);

  const handlePw = (e) => {
    setPw(e.target.value);
    /* 정규식 */
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    if (reg.test(pw)) {
      setPwVaild(true);
    } else {
      setPwVaild(false);
    }
  };

  const iconSize = 9 * 2;
  const pwIconSize = 7 * 3;
  return (
    <div className="Login">
      <LoginHeader titleText={"로그인"} />
      <div className="login_content">
        <IdBox
          icon={FaRegUser}
          iconSize={iconSize}
          inputType={"text"}
          inputPlaceholder={"아이디"}
        />

        <div className="login_box">
          <HiOutlineLockClosed size={pwIconSize} />
          <input
            className="pw_input"
            type="passward"
            placeholder="비밀번호"
            maxLength="20"
            value={pw}
            onChange={handlePw}
          />
        </div>
        {!pwValid && pw.length > 0 && (
          <div className="pw_error" style={{ padding: 5 }}>
            영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
          </div>
        )}

        <MyButton buttonText={"로그인"} />

        <div className="login_search">
          <a className="login_search_id" href={"/findid"}>
            아이디 찾기
          </a>
          <span>|</span>
          <a className="login_search_pw" href={"/findpw"}>
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
