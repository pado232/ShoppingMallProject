import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdPayment } from "react-icons/md";
import { useCategory } from "../components/CategoryProvider";

const ItemItem = ({ item_id, item_img, item_name, item_price, item_sale }) => {
  const { selectedCategory } = useCategory();
  const Round = (item_price * (100 - item_sale)) / 100;

  const [heart, setHeart] = useState(false);
  const iconSize = 10 * 2;
  const iconCartSize = 12 * 2;

  const haertIcon = heart ? (
    <FaHeart size={iconSize} />
  ) : (
    <FaRegHeart size={iconSize} />
  );
  const changeHeart = () => {
    setHeart(!heart);
  };
  return (
    <div className="ItemItem">
      <a href={`/item/${selectedCategory}/detail/${item_id}`}>
        <div className="box_img">
          <img alt="상품이미지" src={item_img} />
        </div>
        <div className="box_content">
          <div className="name">{item_name}</div>
          <div className="price">
            <span className="sale_price">{Math.round(Round)}원</span>
            <span className="sale">{item_sale}%</span>
            <span className="regular_price">{item_price}원</span>
          </div>
        </div>
      </a>
      <div className="payment">
        <div onClick={changeHeart}>{haertIcon}</div>
        <div>
          <a href="/">
            <TiShoppingCart size={iconCartSize} />
          </a>
        </div>
        <div>
          <a href="/">
            <MdPayment size={iconCartSize} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemItem;
