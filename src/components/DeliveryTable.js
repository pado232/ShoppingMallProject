import { useState, useEffect } from "react";
import ModalContainer from "./ModalContainer";
import DeliveryForm from "./DeliveryForm";
import WhiteButton from "../util/whiteButton";

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

  const iconSize = 10 * 3;

  return (
    <div className="DeliveryTable">
      <table>
        <colgroup style={{ width: 230 }} />
        <colgroup style={{ width: "auto" }} />
        <colgroup style={{ width: 230 }} />
        <thead>
          <tr>
            <th>아이콘</th>
            <th>주소</th>
            <th>변경 사항</th>
          </tr>
        </thead>
        <tbody>
          {/** 배송지 리스트를 table로 작성 */}
          {deliveryList.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ height: 300 }}>
                <center>
                  <strong>등록된 배송지가 없습니다.</strong>
                </center>
              </td>
            </tr>
          ) : (
            deliveryList.map((it) => (
              <tr key={it.id}>
                <td>
                  <center>
                    <div> {it.iconcom && <it.iconcom size={iconSize} />}</div>
                    <div style={{ fontSize: 14, color: "#aaa" }}>{it.icon}</div>
                  </center>
                </td>
                <td>{`[${it.addrnum}] ${it.addr1} ${it.addr2}`}</td>
                <td>
                  <center>
                    <div>
                      <WhiteButton
                        style={{ marginBottom: 10 }}
                        onClick={() => handleEditButtonClick(it.id)}
                        buttonText={"수정하기"}
                      />

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

                      <WhiteButton
                        onClick={() => onRemove(it.id)}
                        buttonText={"삭제하기"}
                      />
                    </div>
                  </center>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default DeliveryTable;
