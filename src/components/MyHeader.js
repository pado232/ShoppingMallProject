import { IoSearch } from "react-icons/io5";

const MyHeader = () => {
  const iconSize = 14 * 2;

  return (
    <header className="MyHeader">
      <div className="head_title">
        <h1>
          <a href={"/"}>
            <img src={process.env.PUBLIC_URL + `/image/RealMoment.PNG`} />
          </a>
        </h1>
      </div>
      <div className="head_search">
        <div className="head_search_box">
          <button>
            <IoSearch size={iconSize} />
          </button>
          <input type="text" placeholder="검색어를 입력해주세요." />
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
