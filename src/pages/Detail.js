import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import Menu from "../components/Menu";
import Container from "../components/Container";

const Detail = () => {
  return (
    <div className="Detail">
      <MyHeader />
      <Menu />
      <Container>
        <div className="detail_content">
          <h2>페이스</h2>
        </div>
      </Container>

      <MyFooter />
    </div>
  );
};
export default Detail;
