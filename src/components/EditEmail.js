import { useState, useRef } from "react";
import EmailInput from "../util/EmailInput";

const EditEmail = ({ onCancel }) => {
  const inputRef = useRef([]);
  const [certificationEnabled, setCertificationEnabled] = useState(false);
  const [state, setState] = useState({
    email: "",
    certification: "",
  });

  const handleChangeState = (e) => {
    const { name, value } = e.target;

    if (name === "certification" && isNaN(value)) {
      // 입력값이 숫자가 아닌 경우 무시
      return;
    }

    setState({
      ...state,
      [name]: value,
    });
  };

  const certificationSubmit = () => {
    const emailReg = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    if (!emailReg.test(state.email)) {
      inputRef.current[0].focus();
      return;
    }

    setCertificationEnabled(true);
    console.log(state);
  };

  const handleSubmit = () => {
    for (let i = 0; i < inputRef.current.length; i++) {
      if (inputRef.current[i].value === "") {
        inputRef.current[i].focus();
        return;
      }
    }

    console.log(state);
  };
  return (
    <div className="EditeMail">
      <div className="box">
        <EmailInput
          value={state.email}
          onChange={handleChangeState}
          index={0}
          inputRef={inputRef}
        />
        <button className="ck_btn" onClick={certificationSubmit}>
          인증
        </button>
      </div>

      <div className="box">
        <input
          placeholder="인증번호 입력"
          name="certification"
          value={state.certification}
          ref={(el) => (inputRef.current[1] = el)}
          onChange={handleChangeState}
          disabled={!certificationEnabled}
        />
      </div>
      <button className="btn" onClick={onCancel}>
        취소
      </button>
      <button className="btn" onClick={handleSubmit}>
        완료
      </button>
    </div>
  );
};
export default EditEmail;
