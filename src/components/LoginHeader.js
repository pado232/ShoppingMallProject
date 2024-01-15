import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { VscChevronLeft } from "react-icons/vsc";

const LoginHeader = ({ titleText }) => {
  const navigate = useNavigate();
  const backIconSize = 12 * 3;
  const homeIconSize = 10 * 3;

  return (
    <header className="LoginHeader">
      <div className="login_back">
        <a onClick={() => navigate(-1)}>
          <VscChevronLeft size={backIconSize} />
        </a>
      </div>
      <div className="login_home">
        <a href={"/"}>
          <IoHomeOutline size={homeIconSize} style={{ color: "black" }} />
        </a>
      </div>
      <div className="login_title">
        <h2>{titleText}</h2>
      </div>
    </header>
  );
};

export default LoginHeader;
