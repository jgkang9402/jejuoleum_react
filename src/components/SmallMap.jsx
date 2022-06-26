import React, { useEffect } from "react";
const { kakao } = window;

const SmallMap = ({ xy }) => {
  useEffect(() => {
    // console.log(xy);
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(xy[1], xy[0]), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);

    let positions = [
      {
        title: "오름",
        latlng: new kakao.maps.LatLng(xy[1], xy[0]),
      },
    ];

    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
      // console.log(marker);
    }
  }, []);
  return (
    <div>
      <div
        id="map"
        style={{ width: "600px", height: "350px", border: "1px solid" }}
      ></div>
    </div>
  );
};

export default SmallMap;
