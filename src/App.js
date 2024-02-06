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
import FindId from "./pages/FindId";
import FindPw from "./pages/FindPw";

Modal.setAppElement("#root");

function App() {
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
          <Route path="/findId" element={<FindId />} />
          <Route path="/findpw" element={<FindPw />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
