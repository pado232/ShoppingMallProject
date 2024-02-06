import { FaInstagram } from "react-icons/fa6";

const Menu = () => {
  const iconSize = 10 * 3;
  return (
    <div className="Menu">
      <ul>
        <div className="menu_main">
          <li>
            <a href={"/item"}>Category</a>
          </li>
          <li>
            <a href={"/new"}>New</a>
          </li>
          <li>
            <a href={"/item"}>Sale</a>
          </li>
          <li>
            <a href={"https://www.instagram.com/"}>
              <FaInstagram size={iconSize} />
              <span>RealMoment</span>
            </a>
          </li>
        </div>
        <div className="menu_sub">
          <li>
            <a href={"/mypage"}>My_page</a>
          </li>
          <li>
            <a href={"/item"}>Cart</a>
          </li>
          <li>
            <a href={"/login"}>Login</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
