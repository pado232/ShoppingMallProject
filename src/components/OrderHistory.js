import { useState } from "react";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

import { dummyList } from "../util/dummyList";

const OrderHistory = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // const handledate = () => {};
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const handleSearch = () => {
    // 여기서 선택된 시작일과 종료일을 사용하여 검색을 수행합니다.
    // 선택된 날짜를 이용해 API 호출 또는 로컬 데이터를 필터링할 수 있습니다.
    console.log("검색 시작일:", startDate);
    console.log("검색 종료일:", endDate);
  };

  const handleRadioChange = (period) => {
    setSelectedPeriod(period);
    const today = new Date();
    const newStartDate = new Date(today);
    let newEndDate = new Date(today);

    // 선택된 기간에 따라 종료일을 조정합니다.
    switch (period) {
      case "15days":
        newStartDate.setDate(today.getDate() - 15);
        break;
      case "1month":
        newStartDate.setMonth(today.getMonth() - 1);
        break;
      case "2months":
        newStartDate.setMonth(today.getMonth() - 2);
        break;
      case "3months":
        newStartDate.setMonth(today.getMonth() - 3);
        break;
      case "6months":
        newStartDate.setMonth(today.getMonth() - 6);
        break;
      default:
        break;
    }

    // 종료일은 오늘로 설정합니다.
    setEndDate(newEndDate);
    // 시작일은 위에서 계산한 값으로 설정합니다.
    setStartDate(newStartDate);
  };
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
            <button className="search" onClick={handleSearch}>
              검색
            </button>
          </div>

          <div className="box" style={{ border: 0 }}>
            <span className="box_title">기간 조회</span>
            {[
              { label: "15일", value: "15days" },
              { label: "1개월", value: "1month" },
              { label: "2개월", value: "2months" },
              { label: "3개월", value: "3months" },
              { label: "6개월", value: "6months" },
            ].map((period) => (
              <label key={period.value}>
                <input
                  type="radio"
                  checked={selectedPeriod === period.value}
                  onChange={() => handleRadioChange(period.value)}
                />
                {period.label}
              </label>
            ))}
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
                <th>{`결제금액(수량)`}</th>
                <th>주문상태</th>
              </tr>
            </thead>
            <tbody>
              {dummyList.map((it) => (
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
                            <li>
                              <div>옵션 : RAD</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    }
                  </td>
                  <td>
                    <center>2024.01.22</center>
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
      </div>
    </div>
  );
};

export default OrderHistory;
