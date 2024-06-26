import ItemItem from "./ItemItem";
const sortOptionList = [
  { id: 1, value: "latest", name: "최신순" },
  { id: 2, value: "best-sold", name: "판매량순" },
  { id: 3, value: "review", name: "리뷰순" },
  { id: 4, value: "low-price", name: "낮은 가격순" },
  { id: 5, value: "high-price", name: "높은 가격순" },
];
const ItemList = ({ itemList }) => {
  const ControlMenu = () => {
    return (
      <div className="ControlMenu">
        <select>
          {sortOptionList.map((it) => (
            <option key={it.id}>{it.name}</option>
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
