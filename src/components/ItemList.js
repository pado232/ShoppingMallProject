import ItemItem from "./ItemItem";
const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "best-sold", name: "판매량순" },
  { value: "review", name: "리뷰순" },
  { value: "low-price", name: "낮은 가격순" },
  { value: "high-price", name: "높은 가격순" },
];
const ItemList = ({ itemList }) => {
  const ControlMenu = ({ value, onChange, optionList }) => {
    return (
      <div className="ControlMenu">
        <select>
          {sortOptionList.map((it) => (
            <option>{it.name}</option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="ItemList">
      <ControlMenu />
      <div className="item_dummy">
        {itemList.map((it) => (
          <ItemItem key={it.item_id} {...it} />
        ))}
      </div>
    </div>
  );
};

// ItemList의 기본값을 빈 배열로 설정
ItemList.defaultProps = {
  itemList: [],
};

export default ItemList;
