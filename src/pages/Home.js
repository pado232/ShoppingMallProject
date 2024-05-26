import Menu from "../components/Menu";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import HomeBestItem from "../components/SignUpInput/HomeBestItem";

const Home = () => {
  return (
    <div className="Home">
      <MyHeader />
      <div className="middle">
        <Menu />
        <div className="Home_img">
          <img
            alt="메인이미지1"
            src={process.env.PUBLIC_URL + `/image/main_face.jpg`}
          />
          <img
            alt="메인이미지2"
            src={process.env.PUBLIC_URL + `/image/powder.jpg`}
          />
        </div>
        <HomeBestItem />
      </div>
      <MyFooter />
    </div>
  );
};

export default Home;
