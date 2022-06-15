import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

let GridUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100vw;
  /* overflow: hidden; */
`;
let ItemLi = styled.li`
  width: 100%;
  height: 100%;
  /* border: 1px solid #000; */
  cursor: pointer;
`;
let ItemImg = styled.img`
  width: 100%;
`;

const All = ({ data }) => {
  useEffect(()=>{
    console.log(123);
  },[])
  return (
    <div className="all_page">
      <GridUl>
        {data.map((item, idx) => {
          return (
            <Link to={`/detail/${idx}`} key={item.oleumEname}>
              <ItemLi>
                <ItemImg
                  src={
                    idx == 46
                      ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141013_91%2Fjlk63_1413199771300aTtgY_JPEG%2F%25C0%25CC%25B4%25DE%25BA%25C01.JPG&type=sc960_832"
                      : item.imgPath
                  }
                />
                <h1>{item.oleumKname}</h1>
                <p>{item.oleumAddr}</p>
              </ItemLi>
            </Link>
          );
        })}
      </GridUl>
    </div>
  );
};

export default All;
