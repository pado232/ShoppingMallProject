import React, { useRef, useEffect } from "react";
import { useState } from "react";
import DeliveryForm from "./DeliveryForm";
import ModalContainer from "./ModalContainer";
import DeliveryTable from "./DeliveryTable";

const Delivery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonCreate, setButtonCreate] = useState(false);
  const [deliveries, setDeliveries] = useState([]);

  const deliveryId = useRef(0);

  useEffect(() => {
    console.log(`${buttonCreate}`);
  }, [buttonCreate]);

  const customStyles = {
    content: {
      top: "55%",
      left: "55%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
    },
  };

  /* 배송지 추가 */
  const onCreate = (
    icon,
    iconcom,
    recipient,
    addrnum,
    addr1,
    addr2,
    phone1,
    phone2,
    phone3
  ) => {
    const newItem = {
      icon,
      iconcom,
      recipient,
      addrnum,
      addr1,
      addr2,
      phone1,
      phone2,
      phone3,
      id: deliveryId.current,
    };
    deliveryId.current += 1;
    setDeliveries([newItem, ...deliveries]);
    console.log(`${newItem.id} 번째새로운 아이템`);
  };

  /* 배송지 삭제 */
  const onRemove = (targetId) => {
    console.log(`${targetId} 번째 삭제`);
    const newDeliveryList = deliveries.filter((it) => it.id !== targetId);
    console.log(newDeliveryList);
    setDeliveries(newDeliveryList);
  };

  /* 배송지 수정 */
  const onEdit = ({
    targetId,
    newIcon,
    newIconcom,
    newRecipient,
    newAddrnum,
    newAddr1,
    newAddr2,
    newPhone1,
    newPhone2,
    newPhone3,
  }) => {
    const editDeliveryList = deliveries.map((it) =>
      it.id === targetId
        ? {
            ...it,
            icon: newIcon,
            iconcom: newIconcom,
            recipient: newRecipient,
            addrnum: newAddrnum,
            addr1: newAddr1,
            addr2: newAddr2,
            phone1: newPhone1,
            phone2: newPhone2,
            phone3: newPhone3,
          }
        : it
    );
    console.log(`편집 ${targetId}`);
    console.log(editDeliveryList);
    setDeliveries(editDeliveryList);
  };

  return (
    <div className="Delivery">
      <h2>배송지 관리</h2>
      <div className="delivery-content">
        <div className="button_add">
          <button
            // onChange={}
            onClick={() => {
              setButtonCreate(true);
              setModalIsOpen(true);
            }}
          >
            배송지 추가
          </button>
        </div>

        <ModalContainer
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          customStyles={customStyles}
        >
          <DeliveryForm
            onCreate={onCreate}
            setModalIsOpen={setModalIsOpen}
            buttonCreate={buttonCreate}
            setButtonCreate={setButtonCreate}
          />
        </ModalContainer>

        <DeliveryTable
          onEdit={onEdit}
          deliveryList={deliveries}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
};

export default Delivery;
