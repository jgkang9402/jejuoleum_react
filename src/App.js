import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navi from "./components/Navi";
import axios from "axios";
import All from "./pages/All";
import BigMap from "./pages/BigMap";
import Like from "./pages/Like";
import MainPage from "./pages/MainPage";
import Detail from "./components/Detail";

// import 'bootstrap/dist/css/bootstrap.min.css';

/* 
  explan: "비고 51m의 원형 화구를 가진 오름이다.  거칠지 않은 산 체와 완만한 탐방로가 있어 여유로운 분위기의 오름이다."
  imgPath: "https://gis.jeju.go.kr/images/oleum/abu.png"
  oleumAddr: "제주시 구좌읍 송당리"
  oleumAltitu: 51
  oleumEname: "abu"
  oleumKname: "아부오름"
  x: "126.777283002793"
  y: "33.4488750035003"
  */

function App() {
  const [data, setData] = useState([]);

  async function api() {
    const res = await axios.get(
      "https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumADetailList"
    );
    if (res.status) {
      const result = res.data.resultSummary;
      setData(result);
    }
  }
  useEffect(() => {
    api();
  }, []);
  // console.log(data);

  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/all" element={<All data={data} />} />
        <Route path="/map" element={<BigMap />} />
        <Route path="/like" element={<Like />} />
        <Route path="/detail/:id" element={<Detail data={data} />} />
      </Routes>
    </div>
  );
}

export default App;

// const api = async () => {
//   const response = await fetch(
//     "https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumADetailList"
//   );
//   const data = await response.json();
//   console.log(data.resultSummary);
//   setData(data.resultSummary)
// };
