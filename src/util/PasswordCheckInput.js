const PasswordCheckInput = ({ name, value, onChange, inputRef, state }) => {
  return (
    <div className="PasswordCheckInput">
      <div className="signup_title">비밀번호 확인</div>
      <input
        className="input"
        name={name}
        value={value}
        type="password"
        maxLength="20"
        onChange={onChange}
        ref={(el) => (inputRef.current[2] = el)}
      />
      {state.pwcheck.length > 0 && state.pw !== state.pwcheck && (
        <div className="pw_error">비밀번호가 일치하지 않습니다.</div>
      )}
    </div>
  );
};

export default PasswordCheckInput;
