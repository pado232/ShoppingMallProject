import { useRef, useState } from "react";

import { dummyList } from "../util/dummyList";
import ModalContainer from "./ModalContainer";
import ReviewWriteBox from "./ReviewWriteBox";
import WhiteButton from "../util/whiteButton";

import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ReviewWrite = () => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const inputRef = useRef([]);
  const [state, setState] = useState({
    stars: 5,
    content: "",
  });

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

    setSelectedItem(null);
    setIsModalOpen(false);
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

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  return (
    <div className="ReviewWrite">
      <h2>작성 가능한 리뷰</h2>

      <table>
        <colgroup style={{ width: "auto" }} />
        <colgroup style={{ width: 250 }} />
        <colgroup style={{ width: 300 }} />
        <thead>
          <tr>
            <th>상품정보</th>
            <th>작성기간</th>
            <th>리뷰작성</th>
          </tr>
        </thead>
        <tbody>
          {dummyList.map((item) => (
            <tr key={item.item_id}>
              <td>
                {
                  <div className="iteminfo">
                    {/** 나중에 a태그로 img 클릭하면 상세 페이지로 갑니다 */}
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
                }
              </td>
              <td>
                <center>{item.item_orderdate}</center>
              </td>
              <td>
                <center>
                  <div>
                    <WhiteButton
                      onClick={() => openModal(item)}
                      buttonText={"리뷰 작성"}
                    />

                    <ModalContainer
                      isOpen={isModalOpen && selectedItem === item}
                      onRequestClose={() => setIsModalOpen(false)}
                      customStyles={customStyles}
                    >
                      {
                        <ReviewWriteBox
                          h2Text={"리뷰 작성"}
                          itemImg={item.item_img}
                          itemName={item.item_name}
                          setIsModalOpen={setIsModalOpen}
                          onClick={handleSubmit}
                          inputRef={inputRef}
                          textareaValue={state.content}
                          onChange={handleStateChange}
                          renderStarIcon={renderStarIcon}
                        />
                      }
                    </ModalContainer>
                  </div>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ReviewWrite;
