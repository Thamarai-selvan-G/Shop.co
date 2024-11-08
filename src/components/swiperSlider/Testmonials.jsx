"use client";
import styled from "styled-components";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { useRef } from "react";

// components/CustomerReviews.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
    stars: 3,
  },
  {
    name: "Alex",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    stars: 5,
  },
  {
    name: "Aravind",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 4,
  },
  {
    name: " Thiru Kumaran",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 2,
  },
  {
    name: "Vijay",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 5,
  },
];

const CustomerReviews = () => {
  const swiperRef = useRef(null);

  return (
    <ReviewsContainer>
      <ReviewContainer>
        <Title>OUR HAPPY CUSTOMERS</Title>
        <ArrowContainer>
          <PrevBtn>
            <GrFormPreviousLink
              onClick={() => swiperRef.current.swiper.slidePrev()}
            />
          </PrevBtn>
          <NextBtn onClick={() => swiperRef.current.swiper.slideNext()}>
            <GrFormNextLink />
          </NextBtn>
        </ArrowContainer>
      </ReviewContainer>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        slidesPerView={3}
        navigation={false}
        pagination={{ clickable: false }}
        loop={true}
        breakpoints={{
          1440: {
            slidesPerView: 3,
          },
          680: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 1,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard>
              <Stars>
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star key={i}>⭐</Star>
                ))}
              </Stars>
              <Reviewer>
                <ReviewerName>{review.name}</ReviewerName>
                <VerifiedBadge>●</VerifiedBadge>
              </Reviewer>
              <ReviewText>{review.text}</ReviewText>
            </ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </ReviewsContainer>
  );
};

export default CustomerReviews;

const PrevBtn = styled.button`
  background-color: white;
  /* border: 1px solid red; */
  border: none;
  font-size: 2rem;
  margin: 0;

  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
`;
const NextBtn = styled.button`
  background-color: white;
  border: none;
  /* border: 1px solid red; */
  font-size: 2rem;
  margin: 0;
  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
`;
const ArrowContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 0.5rem;

  @media (max-width: 600px) {
    gap: 0.25rem;
  }
`;
const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// Styled-components
const ReviewsContainer = styled.div`
  padding: 1.25rem;
  max-width: 1200px;
  margin: 0 auto 15rem auto;
  /* background-color: yellowgreen; */
`;

const Title = styled.h2`
  font-family: "Integral CF", sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    text-align: start;
  }
`;

const ReviewCard = styled.div`
  padding: 1.75rem 2rem 0 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  height: 14.974rem;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
`;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0.75rem 0;
`;

const ReviewerName = styled.span`
  font-weight: bold;
`;

const VerifiedBadge = styled.span`
  color: green;
  font-size: 1.2rem;
`;

const ReviewText = styled.p`
  margin: 10px 0;
  font-family: "Satoshi", sans-serif;
  /* margin: 0 0 3.151rem 0; */
`;

const Stars = styled.div`
  font-size: 0.5rem;
  color: #ffd700;
  margin: 0 0 0.938rem 0;
`;

const Star = styled.span`
  font-size: 1.2rem;
`;

// Swiper custom styles
const SwiperContainer = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important; /* Hide default arrows */
  }

  .swiper-pagination-bullet-active {
    background-color: #000;
  }
`;
