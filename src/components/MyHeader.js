const MyHeader = () => {
  return (
    <header>
      <div className="head_title">
        <h1>
          <a href={"/"}>Real Moment</a>
        </h1>
      </div>
      <div className="head_search">
        <input type="text" placeholder="검색어를 입력해주세요." />
        <button>검색</button>
      </div>
    </header>
  );
};

export default MyHeader;
