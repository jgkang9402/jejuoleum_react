import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
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
let PageOl = styled.ol`
  display: flex;
  justify-content: center;
  margin: 2.5vh 0;
`;
let PageBtn = styled.li`
  margin-right: 10px;
  font-size: 2rem;
  border: 1px solid #000;
  text-align: center;
  width: 2.5rem;
`;

const All = ({ data, copied }) => {
  const [pageList, setPageList] = useState([]);
  let { id } = useParams();

  const pushIdx = () => {

  };

  const pagenation = () => {
    let arr = [];
    for (let num = 0; num < copied.length; num++) {
      arr.push(num);
    }
    // console.log(arr);
    setPageList(arr);
  };

  useEffect(() => {
    // console.log(id);
    pagenation();
    pushIdx();
  }, []);
  return (
    <div className="all_page">
      <GridUl>
        {copied[id].map((item, idx) => {
          return (
            <Link to={`/detail/${item.oleumAltitu}`} key={item.oleumEname}>
              <ItemLi>
                <ItemImg src={item.imgPath} />
                {/* <ItemImg
                  src={
                    idx == 46
                      ? "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141013_91%2Fjlk63_1413199771300aTtgY_JPEG%2F%25C0%25CC%25B4%25DE%25BA%25C01.JPG&type=sc960_832"
                      : item.imgPath
                  }
                /> */}
                <h1>{item.oleumKname}</h1>
                <p>{item.oleumAddr}</p>
              </ItemLi>
            </Link>
          );
        })}
      </GridUl>
      <PageOl>
        {pageList.map((item) => {
          return (
            <Link to={`/all/${item}`} key={item}>
              <PageBtn>{item + 1}</PageBtn>
            </Link>
          );
        })}
      </PageOl>
    </div>
  );
};

export default All;
