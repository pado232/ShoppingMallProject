import { useEffect, useReducer } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Item from "./pages/Item";
import Login from "./pages/Login";
import New from "./pages/New";
import MyPage from "./pages/MyPage";
import Best from "./pages/Best";
import SingUp from "./pages/SignUp";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return;
    }
    default:
      return state;
  }
};

function App() {
  //   const [data, dispatch] = useReducer(reducer, []);

  //   const getDate = async () => {
  //     const Response = await fetch(
  //       "https://jsonplaceholder.typicode.com/photos"
  //     ).then((Response) => Response.json());

  //     const initData = Response.slice(0, 10).map(() => {
  //       return {
  //         id: it.id,
  //         name: it.title,
  //         image: it.url,
  //       };
  //     });
  //     // 데이터를 전달(date: initData)하고 데이터를 초기화(type: "INIT")하는 액션을 발생(dispatch)시키겠다.
  //     // reducer은 액션객체를 받는데 그 객체의 타입은 INIT이고 그 액션에 필요한 데이터는 initData가 된다.
  //     dispatch({ type: "INIT", date: initData });
  //   };

  // useEffect(() => {
  //   getDate();
  // }, []);

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
