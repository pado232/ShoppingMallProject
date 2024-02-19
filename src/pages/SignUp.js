import LoginHeader from "../components/LoginHeader";
import SignUpContent from "../components/SignUpInput";
const SignUp = () => {
  return (
    <div className="SingUp">
      <LoginHeader titleText={"회원가입"} />
      <SignUpContent />
    </div>
  );
};

export default SignUp;
