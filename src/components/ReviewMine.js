import { useState, useRef, useEffect } from "react";

import { dummyList } from "../util/dummyList";
import ModalContainer from "./ModalContainer";
import ReviewWriteBox from "./ReviewWriteBox";
import WhiteButton from "../util/whiteButton";
import ReviewLookBox from "./ReviewLookBox";

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ReviewMine = () => {
  const customStyles = {
    content: {
      top: "55%",
      left: "55%",
      right: "auto",
      bottom: "auto",
      height: "750px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
    },
  };

  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isLookModalOpen, setIsLookModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openWriteModal = (item) => {
    setSelectedItem(item);
    setIsWriteModalOpen(true);
  };

  const openLookModal = (item) => {
    setSelectedItem(item);
    setIsLookModalOpen(true);
  };

  const inputRef = useRef([]);
  const [state, setState] = useState({
    stars: null,
    content: "",
  });

  useEffect(() => {
    if (selectedItem) {
      setState({
        stars: selectedItem.item_review_stars,
        content: selectedItem.item_review_content,
      });
    }
  }, [selectedItem]);

  const handleStateChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (state.content === "") {
      inputRef.current[0].focus();
      return;
    }

    setIsWriteModalOpen(false);
    console.log(state);
  };

  const handleStarClick = (star) => {
    setState({ ...state, stars: star });
  };

  const renderStarIcon = (index) => {
    const iconSize = 10 * 3;
    if (state.stars >= index) {
      return <FaStar size={iconSize} onClick={() => handleStarClick(index)} />;
    } else {
      return (
        <FaRegStar size={iconSize} onClick={() => handleStarClick(index)} />
      );
    }
  };

  return (
    <div className="ReviewMine">
      <h2>내가 작성한 리뷰</h2>

      <table>
        <colgroup style={{ width: "auto" }} />
        <colgroup style={{ width: 250 }} />
        <colgroup style={{ width: 300 }} />
        <thead>
          <tr>
            <th>상품정보</th>
            <th>주문일자</th>
            <th>작성한 리뷰</th>
          </tr>
        </thead>
        <tbody>
          {dummyList.map((item) => (
            <tr key={item.item_id}>
              <td>
                <div className="iteminfo">
                  <a href="/">
                    <img
                      alt="상품정보이미지"
                      style={{ width: 100, height: 120 }}
                      src={item.item_img}
                    />
                  </a>
                  <div className="content">
                    <ul>
                      <li>
                        <strong>{item.item_name}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
              <td>
                <center>{item.item_orderdate}</center>
              </td>
              <td>
                <center>
                  <div className="button_warpper">
                    <WhiteButton
                      buttonText={"수정하기"}
                      onClick={() => openWriteModal(item)}
                    />
                    <WhiteButton
                      style={{ marginLeft: 20 }}
                      buttonText={"리뷰 보기"}
                      onClick={() => openLookModal(item)}
                    />
                  </div>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalContainer
        isOpen={isWriteModalOpen}
        onRequestClose={() => setIsWriteModalOpen(false)}
        customStyles={customStyles}
      >
        {selectedItem && (
          <ReviewWriteBox
            h2Text={"나의 리뷰 수정하기"}
            itemImg={selectedItem.item_img}
            itemName={selectedItem.item_name}
            setIsModalOpen={setIsWriteModalOpen}
            onClick={handleSubmit}
            inputRef={inputRef}
            textareaValue={state.content}
            onChange={handleStateChange}
            renderStarIcon={renderStarIcon}
          />
        )}
      </ModalContainer>

      <ModalContainer
        isOpen={isLookModalOpen}
        onRequestClose={() => setIsLookModalOpen(false)}
        customStyles={customStyles}
      >
        {selectedItem && (
          <ReviewLookBox
            itemImg={selectedItem.item_img}
            itemName={selectedItem.item_name}
            itemContent={selectedItem.item_review_content}
            itemStars={selectedItem.item_review_stars}
            itemPrice={selectedItem.item_price}
            setIsModalOpen={setIsLookModalOpen}
          />
        )}
      </ModalContainer>
    </div>
  );
};
export default ReviewMine;
