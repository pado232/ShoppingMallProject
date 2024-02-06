import LoginHeader from "../components/LoginHeader";
import { FaCheck } from "react-icons/fa6";
import { useRef, useState } from "react";
import MyButton from "../components/MyButton";
import PhoneInput from "../util/PhoneInput";
import AddressInput from "../util/AddressInput";
import BirthDateInput from "../util/BirthDateInput";

export const sortOptionList = [
  { value: "010" },
  { value: "011" },
  { value: "016" },
  { value: "017" },
  { value: "018" },
  { value: "019" },
];

const SingUp = () => {
  const inputRef = useRef([]);
  const [pwValid, setPwVaild] = useState(false);
  const [state, setState] = useState({
    id: "",
    pw: "",
    pwcheck: "",
    email: "",
    name: "",
    addrnum: "",
    addr1: "",
    addr2: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    gender: "",
    year: "",
    month: "",
    day: "",
  });

  const handleAddressChange = ({ numAddress, fullAddress }) => {
    // 상위 컴포넌트의 상태 업데이트
    setState({
      ...state,
      addrnum: numAddress,
      addr1: fullAddress,
    });
  };

  const handleChangeState = (e) => {
    const { name, value, type } = e.target;

    // 비밀번호 유효성 검사
    const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    if (name === "pw" && pwReg.test(value)) {
      setPwVaild(true);
    } else if (name === "pw") {
      setPwVaild(false);
    }

    if ((name === "phone2" || name === "phone3") && isNaN(value)) {
      // 입력값이 숫자가 아닌 경우 무시
      return;
    }

    if (type === "radio" && name === "gender") {
      // 라디오 입력을 별도로 처리
      setState({
        ...state,
        gender: value,
      });
    } else {
      // 다른 입력 유형을 처리
      setState({
        ...state,
        [name]: value,
      });
    }
  };

  const handleSubmit = () => {
    for (let i = 0; i < inputRef.current.length; i++) {
      if (inputRef.current[i].value === "") {
        inputRef.current[i].focus();
        return;
      }
    }
    if (state.gender === "") {
      inputRef.current[10].focus();
      alert("성별을 선택해주세요.");
      return;
    }
    if (state.year === "" || state.month === "" || state.day === "") {
      alert("생년월일을 선택해주세요.");
      return;
    }
    console.log(state);
    // const onCombine = combineState();
    // setState(onCombine);
    // console.log(onCombine);
  };

  // 통신
  // const checkSignUp = (e) => {
  //   e.preventDefault();
  //   fetch("", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //       password: pw,
  //       name: name,
  //       birth: `${year}-${month}-${day}`,
  //       phone_number: `${phone1}${phone2}${phone3}`,
  //       gender: gender,
  //     }),
  //   })
  //     .then((response) => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       throw new Error("에러 발생!");
  //     })
  //     .catch((error) => alert(error))
  //     .then((data) => {
  //       if (data.ok === "회원가입 성공") {
  //         alert("회원가입 성공");
  //         <Link to="/login" />;
  //       } else {
  //         alert("회원가입 실패");
  //       }
  //     });
  // };

  return (
    <div className="SingUp">
      <LoginHeader titleText={"회원가입"} />

      <div className="signup_content">
        <div className="signup_title">아이디</div>
        <input
          className="input"
          name="id"
          value={state.id}
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[0] = el)}
          autoComplete="username"
        />
        <div>
          <button>중복 확인</button>
        </div>

        <div className="signup_title">비밀번호</div>
        <input
          className="input"
          name="pw"
          value={state.pw}
          type="password"
          maxLength="20"
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[1] = el)}
          autoComplete="new-password"
        />
        {!pwValid && state.pw.length > 0 && (
          <div className="pw_error">
            영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
          </div>
        )}
        <div className="signup_title">비밀번호 확인</div>
        <input
          className="input"
          name="pwcheck"
          value={state.pwcheck}
          type="password"
          maxLength="20"
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[2] = el)}
          autoComplete="new-password"
        />
        {state.pwcheck.length > 0 && state.pw !== state.pwcheck && (
          <div className="pw_error">비밀번호가 일치하지 않습니다.</div>
        )}

        <div className="signup_title">이메일</div>
        <input
          className="input"
          placeholder="ex) abc1234@gmail.com"
          name="email"
          value={state.email}
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[3] = el)}
          autoComplete="username"
        />

        <div className="signup_title">이름</div>
        <input
          className="input"
          name="name"
          value={state.name}
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[4] = el)}
          autoComplete="username"
        />

        <AddressInput
          state={state}
          inputRef={inputRef}
          handleChangeState={handleChangeState}
          onAddressChange={handleAddressChange}
        />

        <PhoneInput
          state={state}
          handleChangeState={handleChangeState}
          inputRef={inputRef}
        />

        <div className="signup_title">성별</div>
        <label htmlFor="male">
          <input
            className="radio"
            type="radio"
            name="gender"
            id="male"
            value="male"
            ref={(el) => (inputRef.current[9] = el)}
            onChange={handleChangeState}
          />
          <span>남자</span>
        </label>
        <label htmlFor="female">
          <input
            className="radio"
            type="radio"
            name="gender"
            id="female"
            value="female"
            ref={(el) => (inputRef.current[10] = el)}
            onChange={handleChangeState}
          />
          <span>여자</span>
        </label>

        <BirthDateInput state={state} handleChangeState={handleChangeState} />

        <div className="signup_title">
          <label>
            <input className="checkbox" type="checkbox" />
            <span>Real Moment의 정보수집에 동의하시겠습니까?</span>
          </label>
        </div>

        <MyButton
          buttonText={"회원 가입하기"}
          handleSubmit={handleSubmit}
          icon={FaCheck}
        />
      </div>
    </div>
  );
};

export default SingUp;
