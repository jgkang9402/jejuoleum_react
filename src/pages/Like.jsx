import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Like = () => {
  const likeList = useSelector((state) => state.visitDiary);
  useEffect(() => {
    console.log(likeList);
  }, []);
  return (
    <div className="visit-parent">
      <ol className="visit-wrap">
        {likeList.map((item, idx) => {
          return (
            <li className="visit-item" key={idx}>
              <h4>{idx + 1}</h4>
              <div className="visit-img-box">
                <img src={item.imgPath} />
              </div>
              <div className="visit-infobox">
                <h1>{item.oleumKname}</h1>
                <p>{item.oleumAddr}</p>
              </div>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Like;
