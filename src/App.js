import { useEffect, useReducer, useRef, useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Item from "./pages/Item";
import Login from "./pages/Login";
import New from "./pages/New";
import MyPage from "./pages/MyPage";
import Best from "./pages/Best";
import SingUp from "./pages/SignUp";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  // const [memberData, setData] = useState([]);

  // const dataId = useRef(0);

  // const onSubmit = (
  //   memberNum,
  //   id,
  //   pw,
  //   email,
  //   name,
  //   address,
  //   phone,
  //   sex,
  //   birthDate
  // ) => {
  //   const newMember = {
  //     memberNum: dataId.current,
  //     id,
  //     pw,
  //     email,
  //     name,
  //     address,
  //     phone,
  //     sex,
  //     birthDate,
  //   };
  //   dataId.current += 1;
  //   setData([newMember, ...memberData]);
  // };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<Item />} />
          <Route path="/new" element={<New />} />
          <Route path="/best" element={<Best />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
