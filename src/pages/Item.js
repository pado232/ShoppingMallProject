import { useCategory } from "../components/CategoryProvider";
import MyHeader from "../components/MyHeader";
import Menu from "../components/Menu";
import MyFooter from "../components/MyFooter";
import ItemList from "../components/ItemList";
import { dummyList } from "../util/dummyList";
import Container from "../components/Container";

const Item = () => {
  const { selectedCategoryName } = useCategory();

  return (
    <div className="Item">
      <MyHeader />
      <Menu />
      <Container>
        <h2>{selectedCategoryName}</h2>
        <ItemList itemList={dummyList} />
      </Container>
      <MyFooter />
    </div>
  );
};
export default Item;
