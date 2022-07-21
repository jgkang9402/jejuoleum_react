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
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import VisitWrite from "./components/VisitWrite";

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
const override = css`
  display: block;
  position: absolute;
  left: calc(50% - 100px);
  top: calc(50% - 100px);
  border-color: aqua;
`;

function App() {
  const [data, setData] = useState([]);
  const [copied, setCopied] = useState([]);

  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const api = async () => {
    const res = await axios
      // .get(`${PROXY}/https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumADetailList`) //프록시테스트 이거안됨 X
      .get(`${PROXY}/rest/JejuOleumVRImg/getOleumADetailList`) // 프록시테스트 이거됨 O
      // .get(`https://gis.jeju.go.kr/rest/JejuOleumVRImg/getOleumADetailList`) //개발할땐이거로
      .then((response) => {
        if (response.status) {
          let result = response.data.resultSummary;
          // console.log(result);
          if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
              // console.log(data[i].oleumAltitu);
              result[i].oleumAltitu = i;
            }
          }
          // console.log(result);
          result[46].imgPath =
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141013_91%2Fjlk63_1413199771300aTtgY_JPEG%2F%25C0%25CC%25B4%25DE%25BA%25C01.JPG&type=sc960_832";
          setData(result);

          let copyArr = new Object(result);
          // console.log(copyArr);
          let seperateData = [];
          for (let z = 0; z < copyArr.length / 10; z++) {
            seperateData[z] = copyArr.slice(z * 10, z * 10 + 10);
          }
          setCopied(seperateData);
          // console.log(seperateData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, []);
  // console.log(data);

  return (
    <div>
      {data.length == 0 ? (
        <BeatLoader css={override} size={50} />
      ) : (
        <div className="App">
          <Navi />
          <Routes>
            <Route path="/" element={<MainPage copied={copied} />} />
            <Route
              path="/all/:id"
              element={<All data={data} copied={copied} />}
            />
            <Route path="/map" element={<BigMap data={data} />} />
            <Route path="/like" element={<Like />} />
            <Route path="/detail/:id" element={<Detail data={data} />} />
            {/* <Route path="/write/:px" element={<VisitWrite data={data}/>}/> */}
          </Routes>
        </div>
      )}
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
