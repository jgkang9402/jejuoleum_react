import React, { useEffect } from "react";
const { kakao } = window;

const SmallMap = ({xy}) => {
  useEffect(() => {
    console.log(xy);
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(xy[1],xy[0]), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);
  return (
    <div>
      <div id="map" style={{ width: "600px", height: "350px" }}></div>
    </div>
  );
};

export default SmallMap;
