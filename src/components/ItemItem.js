const ItemItem = ({ item_id, item_img, item_name, item_price, item_sale }) => {
  const Round = (item_price * (100 - item_sale)) / 100;

  return (
    <div className="ItemItem">
      <a href={"/"}>
        <div className="box_img">
          <img src={item_img} />
        </div>
        <div className="box_content">
          <div className="name">
            <h4>{item_name}</h4>
          </div>
          <div className="price">
            <strong>{Math.round(Round)}</strong>
            <span className="sale">{item_sale}%</span>
            <span className="regular_price">{item_price}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ItemItem;
