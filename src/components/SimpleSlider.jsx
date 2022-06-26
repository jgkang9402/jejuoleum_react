import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SimpleSlider = ({ copied }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };
  useEffect(() => {
    console.log(copied);
  }, []);
  return (
    <Container>
      <StyledSlider {...settings}>
        {copied[3].map((item, idx) => {
          return (
            <div key={idx}>
              <ImageContainer>
                <Wrap>
                  <h2>{item.oleumKname}</h2>
                  <Link to={`/detail/${item.oleumAltitu}`}>
                    <LinkTODetail>오름정보 보러가기</LinkTODetail>
                  </Link>
                </Wrap>
                <Image src={item.imgPath} />
              </ImageContainer>
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
  /* overflow: hidden; */
  margin-bottom: 5rem;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const ImageContainer = styled.div`
  margin: 16px 0;
  text-align: center;
`;
const Wrap = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;
const LinkTODetail = styled.h4`
  position: relative;
  display: inline-block;
  right: -30%;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  cursor: grab;
  border: 1px solid #000;
`;

export default SimpleSlider;
