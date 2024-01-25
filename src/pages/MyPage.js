import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import Menu from "../components/Menu";

const MyPage = () => {
  return (
    <div className="MyPage">
      <MyHeader />
      <Menu />
      <div>
        <ul>
          <li>
            <a>주문내역</a>
          </li>
          <li>리뷰</li>
          <li>적립금</li>
          <li>찜</li>
          <li>1:1 문의</li>
          <li>개인정보 수정</li>
        </ul>
      </div>
      <MyFooter />
    </div>
  );
};

export default MyPage;
