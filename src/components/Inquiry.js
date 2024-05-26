const Inquiry = () => {
  return (
    <div className="Inquiry">
      <div className="caution">
        <h3>문의 하기 전 꼭! 확인해주세요</h3>
        <div>
          {`1:1 문의 처리시간은 10:00 - 17:00입니다. (문의는 언제나 가능합니다!!)`}
        </div>
        <div>
          {` 빠른 시일 내에 접수사항을 조치하여 해결해 드리도록 하겠습니다.`}
        </div>
        <div>
          {`고객정보 보호를 위해 상담내용 본문에는 개인정보를 입력하지 말아주세요.`}
        </div>
        <div>{`(예: 성명, 연락처, 이메일주소, 계좌번호 등)`}</div>
      </div>
      <div className="editinfo_content">
        <table>
          <colgroup style={{ width: 170 }} />
          <colgroup style={{ width: 350 }} />
          <colgroup style={{ width: "auto" }} />
          <tbody>
            <tr>
              <th>이름</th>
              <td>홍길동</td>
            </tr>
            <tr>
              <th>상담 구분</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>배송지</th>
              <td>{}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Inquiry;
