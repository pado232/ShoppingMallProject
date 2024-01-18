import LoginHeader from "../components/LoginHeader";
import { FaCheck } from "react-icons/fa6";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import PopAddress from "../components/PopAddress";

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
    birth: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (numAddress, fullAddress) => {
    setState({
      ...state,
      addrNum: numAddress,
      addr1: fullAddress,
    });
  };

  const handleSubmit = () => {
    for (let i = 0; i < inputRef.current.length; i++) {
      if (inputRef.current[i].value === "") {
        alert(inputRef.current[i].name + "는(은) 필수 입력사항입니다.");
        inputRef.current[i].focus();
        return;
      }
    }
    console.log(state);
  };

  // const handleSignUpSubmit = () => {
  //   onSubmit(
  //     state.id,
  //     state.pw,
  //     state.email,
  //     state.name,
  //     state.address,
  //     state.phone,
  //     state.sex,
  //     state.birthDate
  //   );
  //   alert("전송 성공");
  // };

  // const onCompletePost = (data) => {
  //   setModalState(false);
  //   setInputAddressValue(data.address);
  //   setInputZipCodeValue(data.zonecode);
  // };

  const checkIconSize = 8 * 3;

  return (
    <div className="SingUp">
      <LoginHeader titleText={"회원가입"} />
      <div className="signup_content">
        <div className="signup_h4">
          <h4>회원정보 입력</h4>
        </div>
        <div className="signup_box">
          <div className="signup_title">아이디</div>
          <input
            className="input"
            name="id"
            value={state.id}
            onChange={handleChangeState}
            ref={(el) => (inputRef.current[0] = el)}
          />
        </div>

        <div className="signup_box">
          <div className="signup_title">비밀번호</div>
          <input
            className="input"
            name="pw"
            value={state.pw}
            type="password"
            onChange={handleChangeState}
            ref={(el) => (inputRef.current[1] = el)}
          />
        </div>

        <div className="signup_box">
          <div className="signup_title">비밀번호 확인</div>
          <input
            className="input"
            name="pwCheck"
            value={state.pwCheck}
            type="password"
            onChange={handleChangeState}
            ref={(el) => (inputRef.current[2] = el)}
          />
        </div>

        <div className="signup_box">
          <div className="signup_title">이메일</div>
          <input
            className="input"
            placeholder="ex) abc1234@gmail.com"
            name="email"
            value={state.email}
            onChange={handleChangeState}
            ref={(el) => (inputRef.current[3] = el)}
          />
        </div>

        <div className="signup_box">
          <div className="signup_title">이름</div>
          <input
            className="input"
            name="name"
            value={state.name}
            onChange={handleChangeState}
            ref={(el) => (inputRef.current[4] = el)}
          />
        </div>

        <div className="signup_box">
          <div className="signup_title">주소</div>
          <div className="addr_box">
            <PopAddress
              onAddressChange={handleAddressChange}
              handleSubmit={handleSubmit}
            />
            <div className="addr_box_sub2">
              <input
                className="input_addr_detail"
                name="addr2"
                onChange={handleChangeState}
                value={state.addr2}
              />
            </div>
          </div>
        </div>

        <div className="signup_box">
          <div className="signup_title">휴대전화</div>
          <select
            name="phone1"
            value={state.phone1}
            onChange={handleChangeState}
          >
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
            ref={(el) => (inputRef.current[5] = el)}
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
            ref={(el) => (inputRef.current[6] = el)}
          />
        </div>

        {/* <div className="signup_box">
          <div className="signup_title">성별</div>
          <input className="checkbox" type="checkbox" value={state.sex} />
          <label>남자</label>
          <input className="checkbox" type="checkbox" value={state.sex} />
          <label>여자</label>
        </div> */}

        <div className="signup_box">
          <div className="signup_title">생년월일</div>
          <input
            className="input"
            placeholder="ex) 990101"
            name="birth"
            value={state.birth}
            onChange={handleChangeState}
            ref={(el) => (inputRef.current[7] = el)}
          />
        </div>

        <div className="signp_btn">
          <button onClick={handleSubmit}>
            <span>회원 가입하기</span>
            <FaCheck className="icon" size={checkIconSize} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
