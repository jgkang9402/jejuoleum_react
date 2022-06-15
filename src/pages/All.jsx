import React from "react";
import styled from "styled-components";

let GridUl=styled.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
width: 100vw;
`
let ItemLi=styled.li`
  width: 100%;
  border:1px solid #000 ;
`
let ItemImg=styled.img`
  width: 100%;
`


const All = ({data}) => {
  
  return (
    <div className="all_page">
      <GridUl>
        {data.map((item, idx) => {
          return (
            <ItemLi key={item.oleumEname}>
              <ItemImg src={item.imgPath} />
              <h1>{item.oleumKname}</h1>
              <p>{item.oleumAddr}</p>
            </ItemLi>
          );
        })}
      </GridUl>
    </div>
  );
};

export default All;
