const ListTable = ({ filteredOrders }) => {
  return (
    <div className="ListTable">
      <table>
        <colgroup style={{ width: 420 }} />
        <colgroup style={{ width: 170 }} />
        <colgroup span={"2"} style={{ width: 200 }} />
        <colgroup style={{ width: 270 }} />
        <thead>
          <tr>
            <th>상품정보</th>
            <th>주문일자</th>
            <th>주문번호</th>
            <th>{`결제금액(수량)`}</th>
            <th>주문상태</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((it) => (
            <tr key={it.item_id}>
              <td>
                {
                  <div className="iteminfo">
                    {/** 나중에 a태그로 img 클릭하면 상세 페이지로 갑니다 */}
                    <a href="/">
                      <img
                        alt="상품정보이미지"
                        style={{ width: 100, height: 120 }}
                        src={it.item_img}
                      />
                    </a>

                    <div className="content">
                      <ul>
                        <li>
                          <strong>{it.item_name}</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                }
              </td>
              <td>
                <center>{it.item_orderdate}</center>
              </td>
              <td>
                <center>{it.item_ordernum}</center>
              </td>
              <td>
                <center>
                  <div>{it.item_price}원</div>
                  <div style={{ color: "grey" }}>0개</div>
                </center>
              </td>
              <td>
                <div>배송중, 교환, 구매확정, 후기작성? </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListTable;
