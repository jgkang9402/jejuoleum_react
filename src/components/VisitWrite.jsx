import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const VisitWrite = ({ data, setModal }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const closeModal = (e) => {
    // e.stopPropagation()
    e.preventDefault();
    setModal(false);
  };
  useEffect(() => {
    console.log(data);
  });

  return (
    <div>
      <WriteParent className="write-parent" onClick={closeModal} />
      <WriteBox className="write-modal">
        <div>{id}</div>
        <CloseBtn className="close-btn" onClick={closeModal}>
          ❌
        </CloseBtn>
        <h1>{data.oleumKname}</h1>
        <TextArea></TextArea>
        <div>
          <button click="addVisitDiary">저장</button>
        </div>
      </WriteBox>
    </div>
  );
};
const WriteParent = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(35, 34, 34, 0.4);
  position: absolute;
  z-index: 2;
  top: 0;
`;
const WriteBox = styled.div`
  position: fixed;
  width: 80vw;
  height: 80vh;
  border: 1px solid #000;
  text-align: center;
  left: 10%;
  top: 10vh;
  z-index: 3;
  background-color: aliceblue;
`;
const TextArea = styled.textarea`
  width: 50%;
  height: 70%;
  resize: none;
  font-size: 1.5rem;
`;
const CloseBtn = styled.span`
  position: absolute;
  cursor: pointer;
  font-size: 2rem;
  right: 5%;
`;

export default VisitWrite;
