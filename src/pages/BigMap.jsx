import React, { useEffect } from "react";
const { kakao } = window;

const BigMap = ({data}) => {
  useEffect(() => {
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.362, 126.5336), // 지도의 중심좌표
        // 33.362,126.5336 한라산 위,경도
        level: 9, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
    console.log(data);

    let positions = [];
    for (let i = 0; i < data.length; i++) {
      positions[i] = {
        title: data[i].oleumKname,
        latlng: new kakao.maps.LatLng(data[i].y, data[i].x),
      };
    }
    console.log(positions);

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, []);
  return (
    <div>
      <div id="map" style={{ width: "100%", height: "94.9vh" }}></div>
    </div>
  );
};

export default BigMap;
