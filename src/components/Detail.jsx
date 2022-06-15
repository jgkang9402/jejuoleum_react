import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SmallMap from "./SmallMap";
import styled from "styled-components";

const Detail = ({ data }) => {
  let { id } = useParams();
  const xy = [data[id].x, data[id].y];
  // const xy = `${data[id].x,data[id].y}`
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  console.log(xy);
  console.log(data[id]);

  const toTheTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(()=>{
    toTheTop()
  },[])

  return (
    <div className="detail-parent">
      <span className="go-back" onClick={goBack}>
        🔙
      </span>
      <img
        src={
          id == 46
            ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141013_91%2Fjlk63_1413199771300aTtgY_JPEG%2F%25C0%25CC%25B4%25DE%25BA%25C01.JPG&type=sc960_832"
            : data[id].imgPath
        }
      />
      <h1>{data[id].oleumKname}</h1>
      <h4>{data[id].oleumAddr}</h4>
      <p>{data[id].explan}</p>
      <a
        href={`https://terms.naver.com/search.naver?query=${data[id].oleumKname}`}
        target="_blank"
      >
        더보기
      </a>
      <SmallMap xy={xy} />
      <div className="empty-box"></div>
    </div>
  );
};

export default Detail;
