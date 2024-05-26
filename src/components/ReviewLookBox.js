import { FaStar } from "react-icons/fa6";

const ReviewLookBox = ({
  itemImg,
  itemName,
  itemStars,
  itemContent,
  itemPrice,
}) => {
  // 별점 아이콘 생성 함수
  const renderStarIcons = (count) => {
    const iconSize = 10 * 2;
    const starIcons = [];
    for (let i = 0; i < count; i++) {
      starIcons.push(<FaStar size={iconSize} key={i} />);
    }
    return starIcons;
  };
  return (
    <div className="ReviewLookBox">
      <div
        className="review_write_box"
        style={{ margin: 50, width: 500, height: 500 }}
      >
        <h2>나의 리뷰</h2>
        <div className="item_warpper">
          <img
            alt="상품정보이미지"
            style={{ width: 100, height: 120 }}
            src={itemImg}
          />

          <div className="item_name">
            <strong>{itemName}</strong>
            <div className="price">{itemPrice}원</div>
          </div>
        </div>

        <div className="content_warpper">
          <div className="stars">{renderStarIcons(itemStars)}</div>
          <p>{itemContent}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewLookBox;
