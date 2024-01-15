import MyHeader from "../components/MyHeader";
import Menu from "../components/Menu";
import MyFooter from "../components/MyFooter";
import ItemList from "../components/ItemList";

const dummyList = [
  {
    item_id: 1,
    item_img: process.env.PUBLIC_URL + `/image/lip.jpg`,
    item_detail: "LIP",
    item_name: "빨간 립스틱",
    item_price: 49000,
    item_sale: 0,
  },
  {
    item_id: 2,
    item_img: process.env.PUBLIC_URL + `/image/glass.jpg`,
    item_detail: "SKINCEAR",
    item_name: "마스크팩",
    item_price: 4000,
    item_sale: 20,
  },
  {
    item_id: 3,
    item_img: process.env.PUBLIC_URL + `/image/dummy.jpg`,
    item_detail: "FACEMACKUP",
    item_name: "쿠션팩트",
    item_price: 89000,
    item_sale: 33,
  },
  {
    item_id: 4,
    item_img: process.env.PUBLIC_URL + `/image/ampoule.jpg`,
    item_detail: "SKINCEAR",
    item_name: "로션",
    item_price: 39000,
    item_sale: 20,
  },
  {
    item_id: 5,
    item_img: process.env.PUBLIC_URL + `/image/tint.jpg`,
    item_detail: "LIP",
    item_name: "틴트",
    item_price: 49000,
    item_sale: 20,
  },
];

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
