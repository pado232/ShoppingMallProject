import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import DaumPostcode from "react-daum-postcode";

const PopAddress = forwardRef(({ onAddressChange, handleSubmit }, ref) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const postCodeStyle = {
    paddingLeft: "30px",
    paddingRigth: "20px",
    paddingBottom: "10px",
    paddingTop: "20px",
    width: "400px",
    height: "500px",
  };
  const divStyle = {
    display: "flex",
  };

  const iconSize = 9 * 3;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const inputRefAddr = useRef([]);

  const handleComplete = (data) => {
    setModalIsOpen(false);
    let numAddress = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setInputValue1(numAddress);
    setInputValue2(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

    onAddressChange(numAddress, fullAddress);
  };

  useImperativeHandle(ref, () => ({
    handleSubmit() {
      for (let i = 0; i < inputRefAddr.current.length; i++) {
        if (inputRefAddr.current[i].value === "") {
          alert(inputRefAddr.current[i].name + "는(은) 필수 입력사항입니다.");
          inputRefAddr.current[i].focus();
          return;
        }
      }
      handleSubmit();
    },
  }));

  return (
    <div className="PopAdress">
      <div className="addr_box_num">
        <input
          className="input_addr_num"
          value={inputValue1}
          readOnly
          name="addrNum"
          ref={(el) => (inputRefAddr.current[0] = el)}
          // onKeyDown={handleTabKey}
        />
        <button onClick={() => setModalIsOpen(true)}>우편번호 찾기</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <div style={divStyle}>
            <DaumPostcode onComplete={handleComplete} style={postCodeStyle} />
            <FiX
              onClick={() => setModalIsOpen(false)}
              size={iconSize}
              style={{ cursor: "pointer" }}
            />
          </div>
        </Modal>
      </div>
      <div className="addr_box_sub">
        <input
          className="input_addr_main"
          name="addr1"
          value={inputValue2}
          ref={(el) => (inputRefAddr.current[1] = el)}
          readOnly
        />
      </div>
    </div>
  );
});

export default PopAddress;
