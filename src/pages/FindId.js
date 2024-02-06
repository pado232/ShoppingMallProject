import { useState, useRef } from "react";

import IdBox from "../components/IdBox";
import LoginHeader from "../components/LoginHeader";
import { HiOutlineMail } from "react-icons/hi";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";

const FindId = () => {
  const iconSize = 11 * 2;
  const inputRef = useRef([]);
  const [emailValid, setEmailValid] = useState(false);
  const [state, setState] = useState({ email: "" });

  const handleChangeState = (e) => {
    const { name, value } = e.target;

    const emailReg =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    if (name === "email" && emailReg.test(value)) {
      setEmailValid(true);
    } else if (name === "email") {
      setEmailValid(false);
    }

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (state.email === "") {
      inputRef.current.focus();
      return;
    }

    console.log(state);
    <Link to={"/signup"} />;
  };

  return (
    <div className="FindId">
      <LoginHeader titleText={"아이디 찾기"} />
      <div className="login_content">
        <div>등록된 이메일을 입력해주세요.</div>
        <IdBox
          icon={HiOutlineMail}
          iconSize={iconSize}
          inputType={"text"}
          inputPlaceholder={"이메일"}
          inputValue={state.email}
          inputName={"email"}
          handleChangeState={handleChangeState}
          inputRef={inputRef}
          text={
            !emailValid &&
            state.email.length > 0 && (
              <div className="pw_error" style={{ padding: 5 }}>
                이메일 형식을 지켜 작성해주세요.
              </div>
            )
          }
        ></IdBox>
        <MyButton buttonText={"다음으로"} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default FindId;
