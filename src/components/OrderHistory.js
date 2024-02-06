import { useState } from "react";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const OrderHistory = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handledate = () => {};

  return (
    <div className="OrderHistory">
      <h2>주문내역</h2>
      <div className="orderhistory_content">
        <div className="lookup_box">
          <div className="box">
            <span className="box_title">날짜 조회</span>
            <DatePicker
              showIcon
              locale={ko}
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
            <span style={{ padding: 10, fontWeight: "lighter" }}>-</span>
            <DatePicker
              showIcon
              locale={ko}
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
            <button className="search">검색</button>
          </div>

          <div className="box" style={{ border: 0 }}>
            <span className="box_title">기간 조회</span>
            <label>
              <input type="radio" />
              15일
            </label>
            <label>
              <input type="radio" />
              1개월
            </label>
            <label>
              <input type="radio" />
              2개월
            </label>
            <label>
              <input type="radio" />
              3개월
            </label>
            <label>
              <input type="radio" />
              6개월
            </label>
          </div>
        </div>

        <div className="orderhistory_list">
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
                <th>결제금액</th>
                <th>주문상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>상품정보1</th>
                <th>주문일자1</th>
                <th>주문번호1</th>
                <th>결제금액1</th>
                <th>주문상태1</th>
              </tr>
              <tr>
                <th>상품정보2</th>
                <th>주문일자2</th>
                <th>주문번호2</th>
                <th>결제금액2</th>
                <th>주문상태2</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
