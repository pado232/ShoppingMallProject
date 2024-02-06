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
          <img src={process.env.PUBLIC_URL + `/image/main_face.jpg`} />
          <img src={process.env.PUBLIC_URL + `/image/powder.jpg`} />
        </div>
        <HomeBestItem />
      </div>
      <MyFooter />
    </div>
  );
};

export default Home;
