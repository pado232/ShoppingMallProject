import LoginHeader from "../components/LoginHeader";
import { FaCheck } from "react-icons/fa6";
import { useRef, useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import DaumPostcode from "react-daum-postcode";
import { YEAR } from "../components/SignUpInput/Year";
import { MONTH } from "../components/SignUpInput/Month";
import { DAY } from "../components/SignUpInput/Day";

const sortOptionList = [
  { value: "010" },
  { value: "011" },
  { value: "016" },
  { value: "017" },
  { value: "018" },
  { value: "019" },
];

const SingUp = () => {
  const inputRef = useRef([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pwValid, setPwVaild] = useState(false);
  const [state, setState] = useState({
    id: "",
    pw: "",
    pwCheck: "",
    email: "",
    name: "",
    addrNum: "",
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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const postCodeStyle = {
    paddingLeft: "30px",
    paddingRigth: "20px",
    paddingBottom: "10px",
    paddingTop: "20px",
    width: "400px",
    height: "500px",
  };
  const divStyle = {
    display: "flex",
  };

  const iconSize = 9 * 3;
  const checkIconSize = 8 * 3;

  // const combineState = () => {
  //   const { phone1, phone2, phone3, year, month, day, ...rest } = state;

  //   const phone = `${phone1}${phone2}${phone3}`;
  //   const birth = `${year}-${month}-${day}`;

  //   return {
  //     ...rest,
  //     phone,
  //     birth,
  //   };
  // };

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

  const handleComplete = (data) => {
    setModalIsOpen(false);
    let numAddress = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setState({
      ...state,
      addrNum: numAddress,
      addr1: fullAddress,
    });
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
          name="pwCheck"
          value={state.pwCheck}
          type="password"
          maxLength="20"
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[2] = el)}
          autoComplete="new-password"
        />
        {state.pwCheck.length > 0 && state.pw !== state.pwCheck && (
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

        <div className="signup_title">주소</div>
        <div>
          <button onClick={() => setModalIsOpen(true)}>우편번호 찾기</button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <div style={divStyle}>
            <DaumPostcode onComplete={handleComplete} style={postCodeStyle} />
            <FiX
              onClick={() => setModalIsOpen(false)}
              size={iconSize}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Modal>
        <input
          className="input"
          value={state.addrNum}
          readOnly
          name="addrNum"
          placeholder="우편번호 : 우편번호 찾기를 눌러주세요."
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[5] = el)}
          autoComplete="username"
        />
        <input
          className="input"
          name="addr1"
          value={state.addr1}
          readOnly
          placeholder="주소 : 우편번호 찾기를 눌러주세요."
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[6] = el)}
          autoComplete="username"
        />
        <input
          className="input"
          name="addr2"
          placeholder="상세주소"
          value={state.addr2}
          onChange={handleChangeState}
          autoComplete="username"
        />

        <div className="signup_title">휴대전화</div>
        <select name="phone1" value={state.phone1} onChange={handleChangeState}>
          {sortOptionList.map((it) => (
            <option key={it.value}>{it.value}</option>
          ))}
        </select>
        <span>-</span>
        <input
          className="input"
          placeholder="0000"
          style={{ width: 50 }}
          maxLength="4"
          name="phone2"
          value={state.phone2}
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[7] = el)}
        />
        <span>-</span>
        <input
          className="input"
          placeholder="0000"
          style={{ width: 50 }}
          maxLength="4"
          name="phone3"
          value={state.phone3}
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[8] = el)}
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

        <div className="signup_title">생년월일</div>
        <select name="year" value={state.year} onChange={handleChangeState}>
          <option value="">출생년도</option>
          {YEAR.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select
          name="month"
          value={state.month}
          style={{ marginLeft: 30 }}
          onChange={handleChangeState}
        >
          <option value="">월</option>
          {MONTH.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <select
          name="day"
          value={state.day}
          style={{ marginLeft: 30 }}
          onChange={handleChangeState}
        >
          <option value="">일</option>
          {DAY.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <div className="signup_title">
          <label>
            <input className="checkbox" type="checkbox" />
            <span>Real Moment의 정보수집에 동의하시겠습니까?</span>
          </label>
        </div>

        <button className="final_btn" onClick={handleSubmit}>
          <span>회원 가입하기</span>
          <FaCheck className="icon" size={checkIconSize} />
        </button>
      </div>
    </div>
  );
};

export default SingUp;
