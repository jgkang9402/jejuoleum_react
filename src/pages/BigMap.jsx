import React, { useEffect } from "react";
const { kakao } = window;

const BigMap = () => {
  useEffect(() => {
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.4488750035003,126.777283002793), // 지도의 중심좌표
        // center: new kakao.maps.LatLng(33.448875,126.777283), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);
  return (
    <div>
      <div id="map" style={{ width: "100%", height: "90vh" }}></div>
    </div>
  );
};

export default BigMap;
