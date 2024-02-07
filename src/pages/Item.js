import MyHeader from "../components/MyHeader";
import Menu from "../components/Menu";
import MyFooter from "../components/MyFooter";
import ItemList from "../components/ItemList";

import { dummyList } from "../util/dummyList";

const Item = () => {
  return (
    <div className="Item">
      <MyHeader />
      <Menu />
      <ItemList itemList={dummyList} />
      <MyFooter />
    </div>
  );
};
export default Item;
