import MyButton from "./MyButton";

const ReviewWriteBox = ({
  itemImg,
  itemName,
  renderStarIcon,
  onClick,
  setIsModalOpen,
  h2Text,
  inputRef,
  onChange,
  textareaValue,
}) => {
  // const inputRef = useRef([]);
  // const [state, setState] = useState({
  //   stars: 5,
  //   content: "",
  // });

  // const handleStateChange = (e) => {
  //   const { name, value } = e.target;

  //   setState({
  //     ...state,
  //     [name]: value,
  //   });
  // };
  // 별점 클릭 이벤트 핸들러
  // const handleStarClick = (star) => {
  //   setState({ ...state, stars: star });
  // };

  // 별점 아이콘 생성 함수
  // const renderStarIcon = (index) => {
  //   const iconSize = 10 * 3;
  //   if (state.stars >= index) {
  //     return <FaStar size={iconSize} onClick={() => handleStarClick(index)} />;
  //   } else {
  //     return (
  //       <FaRegStar size={iconSize} onClick={() => handleStarClick(index)} />
  //     );
  //   }
  // };
  // const handleSubmit = () => {
  //   if (state.content === "") {
  //     inputRef.current[0].focus();
  //     return;
  //   }

  //   setIsModalOpen(false);
  //   console.log(state);
  // };

  return (
    <div className="ReviewWriteBox">
      <div
        className="review_write_box"
        style={{ margin: 50, width: 500, height: 500 }}
      >
        <h2>{h2Text}</h2>
        <div className="item_warpper">
          <img
            alt="상품정보이미지"
            style={{ width: 100, height: 120 }}
            src={itemImg}
          />

          <div className="item_name">
            <strong>{itemName}</strong>
          </div>
        </div>

        <div className="stars_warpper">
          <strong>상품이 마음에 드셨나요?</strong>
          <div className="stars" style={{ cursor: "pointer" }}>
            <div>{renderStarIcon(1)}</div>
            <div>{renderStarIcon(2)}</div>
            <div>{renderStarIcon(3)}</div>
            <div>{renderStarIcon(4)}</div>
            <div>{renderStarIcon(5)}</div>
          </div>
        </div>

        <div className="content_warpper">
          <div>
            <strong>이번 상품은 어떠셨나요? 리뷰를 남겨주세요 🖤</strong>
          </div>
          <textarea
            name="content"
            value={textareaValue}
            onChange={onChange}
            ref={(el) => (inputRef.current[0] = el)}
            placeholder="상세한 리뷰를 작성해보세요.&#13;여러분의 소중한 리뷰들이 모여 합리적인 쇼핑을 즐기실 수 있습니다!&#13;리뷰 작성 시 지급 포인트 (100P)&#13;&#13;- 반품 / 환불 관련 문의는 '문의하기'에 별도 문의해주세요."
          />
        </div>
        <div className="button_warpper">
          <MyButton buttonText={"취소"} onClick={() => setIsModalOpen(false)} />
          <MyButton
            style={{ marginLeft: 80 }}
            buttonText={"등록하기"}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewWriteBox;
