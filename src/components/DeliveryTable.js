import { useState, useEffect } from "react";
import ModalContainer from "./ModalContainer";
import DeliveryForm from "./DeliveryForm";

const DeliveryTable = ({ deliveryList, onRemove, onEdit }) => {
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [buttonEdit, setButtonEdit] = useState(false);
  const [editingId, setEditingId] = useState(0);
  useEffect(() => {
    console.log(`${buttonEdit}`);
  }, [buttonEdit]);

  /** 배송지 수정 버튼 onClick */
  const handleEditButtonClick = (id) => {
    setButtonEdit(true);
    setModalIsOpen(true);
    setEditingId(id); // id를 상태로 저장
    console.log(id);
  };

  return (
    <div className="DeliveryTable">
      <table>
        <colgroup style={{ width: 200 }} />
        <colgroup style={{ width: 600 }} />
        <colgroup style={{ width: 300 }} />
        <thead>
          <tr>
            <th>아이콘</th>
            <th>주소</th>
            <th>변경 사항</th>
          </tr>
        </thead>
        <tbody>
          {/** 배송지 리스트를 table로 작성 */}
          {deliveryList.map((it) => (
            <tr key={it.id}>
              <td>
                <center>{`${it.icon} ${it.selectedIcon}`}</center>
              </td>
              <td>{`[${it.addrnum}] ${it.addr1} ${it.addr2}`}</td>
              <td>
                <center>
                  {
                    <div>
                      <button
                        onClick={() => handleEditButtonClick(it.id)}
                        style={{ marginRight: 30 }}
                      >
                        수정하기
                      </button>

                      <ModalContainer
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        customStyles={customStyles}
                      >
                        <DeliveryForm
                          onEdit={onEdit}
                          setModalIsOpen={setModalIsOpen}
                          buttonEdit={buttonEdit}
                          setButtonEdit={setButtonEdit}
                          editingId={editingId}
                        />
                      </ModalContainer>
                      <button onClick={() => onRemove(it.id)}>삭제하기</button>
                    </div>
                  }
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DeliveryTable;
