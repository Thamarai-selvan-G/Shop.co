"use client";

import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ProductCard = (props) => {
  const navigate = useRouter();

  function navigateFun() {
    navigate.push("/tshirts");
  }
  return (
    <Container>
      <StyledImage
        src={props.img}
        alt="img"
        width={295}
        height={298}
        onClick={navigateFun}
      />
      <Name>{props.name}</Name>
      <RatingContainer>
        <RatingImg src={"/img/star.png"} width={104} height={18.49} alt="img" />
        <RatingNumber>4.5/5</RatingNumber>
      </RatingContainer>
      <PriceContainer>
        <Price>{props.price}</Price>
        {props.discount && <DiscountPrice>{props.discount}</DiscountPrice>}
        {props.percentage && (
          <DiscountPercentage>{props.percentage}</DiscountPercentage>
        )}
      </PriceContainer>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const StyledImage = styled(Image)`
  margin-bottom: 1rem;
  cursor: pointer;

  @media (max-width: 970px) {
    width: 172px;
    height: 174px;
  }
`;
const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  margin: 0 0 0.5rem 0;

  @media (max-width: 970px) {
    font-size: 1rem;
  }
`;
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.813rem;
  margin: 0 0 0.5rem 0;

  @media (max-width:970px){
    font-size: 1.25rem;
    gap: 0.688rem;
  }
`;
const RatingImg = styled(Image)``;
const RatingNumber = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  margin: 0;

  @media (max-width: 970px) {
    font-size: 0.875rem;
  }
`;
const PriceContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  /* margin: 0 0 2.25rem 0; */
`;
const Price = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 970px) {
    font-size: 1.25rem;
  }
`;
const DiscountPrice = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #00000066;
  text-decoration: line-through;
  @media (max-width: 970px) {
    font-size: 1.25rem;
  }
`;
const DiscountPercentage = styled.h2`
  padding: 0.375rem 0.875rem;
  color: #ff3333;
  border-radius: 3.875rem;
  background-color: #ff33331a;
  font-size: 0.75rem;
  margin: 0;

  @media (max-width: 970px) {
    padding: 6px 14px;
  }
`;
