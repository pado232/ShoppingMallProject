import LoginHeader from "../components/LoginHeader";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

const SingUp = () => {
  const [state, setState] = useState({
    id: "",
    pw: "",
    email: "",
    name: "",
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

  const handleSubmit = () => {
    console.log(state);
    alert("저장 성공");
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
          />
        </div>

        <div className="signup_box">
          <div className="signup_title">비밀번호</div>
          <input type="password" className="input" />
        </div>

        <div className="signup_box">
          <div className="signup_title">비밀번호 확인</div>
          <input
            type="password"
            className="input"
            name="pw"
            value={state.pw}
            onChange={handleChangeState}
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
          />
        </div>

        <div className="signup_box">
          <div className="signup_title">이름</div>
          <input
            className="input"
            name="name"
            value={state.name}
            onChange={handleChangeState}
          />
        </div>

        <div className="signup_box">
          <div className="signup_title">주소</div>
          <div className="addr_box">
            <input className="input_addr_num" />
            <button>주소 검색</button>
            <div className="addr_box_sub">
              <input
                className="input_addr_main"
                name="addr1"
                value={state.addr1}
                onChange={handleChangeState}
              />
              <input
                className="input_addr_detail"
                name="addr2"
                value={state.addr2}
                onChange={handleChangeState}
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
            <option value={"010"}>010</option>
            <option value={"011"}>011</option>
            <option value={"016"}>016</option>
            <option value={"017"}>017</option>
            <option value={"018"}>018</option>
            <option value={"019"}>019</option>
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
          />
        </div>

        {/* <div className="signup_box">
          <div className="signup_title">성별</div>
          <input className="checkbox" type="checkbox" value={sex} />
          <label>남자</label>
          <input className="checkbox" type="checkbox" value={sex} />
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
