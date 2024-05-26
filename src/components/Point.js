import { useState } from "react";
import { useEffect } from "react";

import { dummyList } from "../util/dummyList";
import DatePickerSelector from "./DatePickerSelector";
import PeriodSelector from "./PeriodSelector";
import ListTable from "./ListTable";

const Point = () => {
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    const threeMonthsAgo = new Date(
      today.getFullYear(),
      today.getMonth() - 6,
      today.getDate()
    );
    return threeMonthsAgo;
  });
  const [endDate, setEndDate] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState(dummyList);

  const filterOrders = (startDate, endDate) => {
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const filtered = dummyList
      .filter((item) => {
        const orderDate = new Date(item.item_orderdate);
        return orderDate >= startDateObj && orderDate <= endDateObj;
      })
      .sort((a, b) => new Date(b.item_orderdate) - new Date(a.item_orderdate)); // 주문일자를 최신순으로 정렬 (내림차순)

    return filtered;
  };

  const handleSearch = () => {
    const filtered = filterOrders(startDate, endDate);
    setFilteredOrders(filtered);
  };

  const handleRadioChange = (period) => {
    setSelectedPeriod(period);
    const today = new Date();
    const newStartDate = new Date(today);
    let newEndDate = new Date(today);

    // 선택된 기간에 따라 종료일 조정
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

    const filtered = filterOrders(newStartDate, newEndDate);
    setFilteredOrders(filtered);
  };

  useEffect(() => {
    handleRadioChange("6months");
  }, []);

  return (
    <div className="Point">
      <h2 className="mypage_all_h2">적립금</h2>
      <div className="lookup_box">
        <DatePickerSelector
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          handleSearch={handleSearch}
        />
        <PeriodSelector
          selectedPeriod={selectedPeriod}
          handleRadioChange={handleRadioChange}
        />
      </div>

      <div className="pointtable">
        <table>
          <colgroup style={{ width: "auto" }} />
          <colgroup style={{ width: 250 }} />
          <colgroup style={{ width: 270 }} />
          <thead>
            <tr>
              <th>상품정보</th>
              <th>주문일자</th>
              <th>적립 / 사용</th>
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
                  <center>
                    <div>적립했는지 사용했는지</div>
                  </center>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Point;
