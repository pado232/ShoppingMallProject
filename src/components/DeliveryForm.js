import { useState, useRef, useEffect } from "react";

import AddressInput from "../util/AddressInput";
import PhoneInput from "../util/PhoneInput";
import MyButton from "./MyButton";
import React from "react";

import { HiOutlineHome } from "react-icons/hi";
import { LuBuilding2 } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";

const DeliveryFrom = ({
  onCreate,
  setModalIsOpen,
  onEdit,
  buttonCreate,
  buttonEdit,
  setButtonCreate,
  setButtonEdit,
  editingId,
}) => {
  const inputRef = useRef([]);
  const iconSize = 10 * 3;

  const iconData = [
    { value: "우리집", icon: <HiOutlineHome /> },
    { value: "회사", icon: <LuBuilding2 /> },
    { value: "기타", icon: <HiOutlineLocationMarker /> },
  ];

  const [state, setState] = useState({
    id: editingId,
    icon: "",
    selectedIcon: <HiOutlineHome />,
    recipient: "",
    addrnum: "",
    addr1: "",
    addr2: "",
    phone1: "010",
    phone2: "",
    phone3: "",
  });

  // useEffect(() => {
  //   console.log("editingId:", editingId);
  //   console.log("state:", state);
  // }, [editingId, state]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      id: editingId,
    }));
  }, [editingId]);

  /** AddressInput에서 가져오는 값 */
  const handleAddressChange = ({ numAddress, fullAddress }) => {
    // 상위 컴포넌트의 상태 업데이트
    setState({
      ...state,
      addrnum: numAddress,
      addr1: fullAddress,
    });
  };

  /** state 유효성 검사 */
  const handleChangeState = (e) => {
    const { name, value } = e.target;

    if ((name === "phone2" || name === "phone3") && isNaN(value)) {
      // 입력값이 숫자가 아닌 경우 무시
      return;
    }

    if (
      name === "icon" &&
      (value === "우리집" || value === "회사" || value === "기타")
    ) {
      const selectedIcon = iconData.find((item) => item.value === value);

      setState({
        ...state,
        icon: value,
        selectedIcon: selectedIcon ? selectedIcon.icon : null,
      });
    }

    setState({
      ...state,
      [name]: value,
    });
  };

  /** 배송지 추가 버튼이 눌렸을 때 실행되어야할 */
  const handleCreate = () => {
    if (state.icon === "") {
      inputRef.current[1].focus();
      alert("배송지 별칭을 선택해주세요.");
      return;
    }

    for (let i = 1; i < inputRef.current.length; i++) {
      if (inputRef.current[i].value === "") {
        inputRef.current[i].focus();
        return;
      }
    }

    const {
      icon,
      newSelectedIcon,
      recipient,
      addrnum,
      addr1,
      addr2,
      phone1,
      phone2,
      phone3,
    } = state;
    // 새로운 아이템을 생성하는 로직
    onCreate(
      icon,
      newSelectedIcon,
      recipient,
      addrnum,
      addr1,
      addr2,
      phone1,
      phone2,
      phone3
    );
    console.log(state);
    console.log("배송지 추가하기 handleSubmit");
    setButtonCreate(false);
    setModalIsOpen(false);
  };

  /** 배송지 수정 버튼이 눌렸을 때 실행되어야할 */
  const handleEdit = () => {
    if (state.icon === "") {
      inputRef.current[1].focus();
      alert("배송지 별칭을 선택해주세요.");
      return;
    }

    for (let i = 1; i < inputRef.current.length; i++) {
      if (inputRef.current[i].value === "") {
        inputRef.current[i].focus();
        return;
      }
    }

    const {
      id,
      icon,
      recipient,
      addrnum,
      addr1,
      addr2,
      phone1,
      phone2,
      phone3,
    } = state;

    /** 객체 형태로 넣어줘야 제대로 값들을 참조할 수 있게 됨. */
    onEdit({
      targetId: id,
      newIcon: icon,
      newRecipient: recipient,
      newAddrnum: addrnum,
      newAddr1: addr1,
      newAddr2: addr2,
      newPhone1: phone1,
      newPhone2: phone2,
      newPhone3: phone3,
    });
    console.log(state);

    console.log("수정하기 handleSubmit");
    setButtonEdit(false);
    setModalIsOpen(false);
  };

  const handleSubmit = () => {
    if (buttonCreate) {
      handleCreate();
    }
    if (buttonEdit) {
      handleEdit();
    }
  };

  return (
    <div className="DeliveryFrom">
      <div className="signup_content">
        <div className="Delivery_icon">
          <ul>
            {/* 3개의 li 버튼을 만들어냄*/}
            {iconData.map((item, index) => (
              <li
                key={index}
                className={item.value === state.icon ? "click" : ""}
                onClick={() =>
                  handleChangeState({
                    target: { name: "icon", value: item.value },
                  })
                }
              >
                <div className="icon">
                  {state.selectedIcon &&
                    React.cloneElement(state.selectedIcon, { size: iconSize })}
                </div>
                <div
                  ref={(el) => (inputRef.current[index + 1] = el)}
                  name="icon"
                  value={item.value}
                >
                  {item.value}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="signup_title">받는 사람</div>
        <input
          className="input"
          name="recipient"
          value={state.recipient}
          onChange={handleChangeState}
          ref={(el) => (inputRef.current[4] = el)}
        />

        <AddressInput
          state={state}
          handleChangeState={handleChangeState}
          onAddressChange={handleAddressChange}
          inputRef={inputRef}
        />
        <PhoneInput
          state={state}
          handleChangeState={handleChangeState}
          inputRef={inputRef}
        />
        <MyButton buttonText={"배송지 등록하기"} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default DeliveryFrom;
