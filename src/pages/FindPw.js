import { useState, useRef } from "react";

import IdBox from "../components/IdBox";
import LoginHeader from "../components/LoginHeader";
import { FaRegUser } from "react-icons/fa";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";

const FindPw = () => {
  const iconSize = 9 * 2;
  const inputRef = useRef([]);

  // const [idVaild, setIdVaild] = useState(false);
  const [state, setState] = useState({ id: "" });

  const handleChangeState = (e) => {
    const { name, value } = e.target;

    // const emailReg =
    //   /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    // if (name === "email" && emailReg.test(value)) {
    //   setEmailValid(true);
    // } else if (name === "email") {
    //   setEmailValid(false);
    // }

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (state.id === "") {
      inputRef.current.focus();
      return;
    }

    console.log(state);
    // <Link to={"/signup"} />;
  };
  return (
    <div className="FindPw">
      <LoginHeader titleText={"비밀번호 찾기"} />
      <div className="login_content">
        <div>찾으시려는 아이디를 입력해주세요.</div>
        <IdBox
          icon={FaRegUser}
          iconSize={iconSize}
          inputType={"text"}
          inputName={"id"}
          inputValue={state.id}
          inputPlaceholder={"아이디"}
          inputRef={inputRef}
          handleChangeState={handleChangeState}
        />
        <MyButton buttonText={"다음으로"} handleSubmit={handleSubmit} />
        <div className="findid_text">
          <span>아이디를 잊으셨나요?</span>
          <a href="/findid">아이디 찾기</a>
        </div>
      </div>
    </div>
  );
};

export default FindPw;
