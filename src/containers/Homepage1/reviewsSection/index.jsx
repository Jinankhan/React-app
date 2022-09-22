import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import { ReviewCard } from "../../../components/reviewCard";

import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";
import { SectionTitle } from "../../../components/sectionTitle";



const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:white-smoke;
  border:1px solid rgba(84,86,86,.1);
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

export function ReviewsSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer name="reviewsSection">
      <SectionTitle>What others are saying about us</SectionTitle>
      
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl="https://photocatchthemoment.com/wp-content/uploads/2016/01/business_headshot_linkedIn_profile-picture_Dublin_Rafael-Photography.jpg"
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl="https://cache.desktopnexus.com/thumbseg/2487/2487414-bigthumbnail.jpg"
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl="https://i.pinimg.com/originals/c2/89/58/c289580703cbf2beebc41ea78da78182.jpg"
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl="https://tse4.mm.bing.net/th?id=OIP.WSygn9S7OeEtbfILB4gT4wHaLI&pid=Api&P=0&w=300&h=300"
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}