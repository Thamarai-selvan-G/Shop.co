"use client";
import styled from "styled-components";
import Image from "next/image";
import ProductCard from "./cards/ProductCard";
import Testmonials from "./swiperSlider/Testmonials";
import { useState } from "react";
const PageTwo = () => {
  const [viewAll, setViewAll] = useState(false);
  const [viewAllTwo, setViewAllTwo] = useState(false);
  return (
    <div>
      <MarqueeParent>
        <Image
          src={"/img/Group.png"}
          width={166.48}
          height={33.16}
          alt="brand img"
        />
        <Image src={"/img/zara.png"} width={91} height={38} alt="brand img" />
        <Image src={"/img/gucci.png"} width={156} height={36} alt="brand img" />
        <Image src={"/img/prada.png"} width={194} height={32} alt="brand img" />
        <Image
          src={"/img/cv.png"}
          width={206.79}
          height={33.35}
          alt="brand img"
        />
      </MarqueeParent>
      <NewArrivalsParent>
        <Heading>New Arrivals</Heading>
        <SliderContainer>
          <ProductCard
            img={"/img/Frame 32.png"}
            name="T-shirts with Tape Details"
            price="$120"
            discount=""
          />
          <ProductCard
            img={"/img/Frame 33.png"}
            name="Skinny Fit Jeans"
            price="$240"
            discount="$260"
            percentage="-20%"
          />
          <ProductCard
            img={"/img/Frame 34.png"}
            name="Checked Shirt"
            price="$180"
          />
          <ProductCard
            img={"/img/Frame 38.png"}
            name="Sleeve Striped T-shirt"
            price="$130"
            discount="$160"
            percentage="-30%"
          />
        </SliderContainer>
        {viewAll && (
          <SliderContainer>
            <ProductCard
              img={"/img/shirt.png"}
              name="Vertical Striped Shirt"
              price="$212"
              discount="$232"
              percentage="-20%"
            />
            <ProductCard
              img={"/img/tshirt.png"}
              name="Courage Graphic T-shirt"
              price="$145"
              discount=""
              percentage=""
            />
            <ProductCard
              img={"/img/drowser.png"}
              name="Loose Fit Drowser"
              price="$80"
            />
            <ProductCard
              img={"/img/pant.png"}
              name="Faded Skinny Jeans"
              price="$210"
              discount=""
              percentage=""
            />
          </SliderContainer>
        )}
        <ViewAllBtn onClick={() => setViewAll(!viewAll)}>
          {viewAll ? "View Less" : "View All"}
        </ViewAllBtn>
      </NewArrivalsParent>
      <TopSelling>
        <Heading>TOP SELLING</Heading>
        <SliderContainer>
          <ProductCard
            img={"/img/shirt.png"}
            name="Vertical Striped Shirt"
            price="$212"
            discount="$232"
            percentage="-20%"
          />
          <ProductCard
            img={"/img/tshirt.png"}
            name="Courage Graphic T-shirt"
            price="$145"
            discount=""
            percentage=""
          />
          <ProductCard
            img={"/img/drowser.png"}
            name="Loose Fit Drowser"
            price="$80"
          />
          <ProductCard
            img={"/img/pant.png"}
            name="Faded Skinny Jeans"
            price="$210"
            discount=""
            percentage=""
          />
        </SliderContainer>
        {viewAllTwo && (
          <SliderContainer>
            <ProductCard
              img={"/img/Frame 32.png"}
              name="T-shirts with Tape Details"
              price="$120"
              discount=""
            />
            <ProductCard
              img={"/img/Frame 33.png"}
              name="Skinny Fit Jeans"
              price="$240"
              discount="$260"
              percentage="-20%"
            />
            <ProductCard
              img={"/img/Frame 34.png"}
              name="Checked Shirt"
              price="$180"
            />
            <ProductCard
              img={"/img/Frame 38.png"}
              name="Sleeve Striped T-shirt"
              price="$130"
              discount="$160"
              percentage="-30%"
            />
          </SliderContainer>
        )}
        <ViewAllBtn onClick={() => setViewAllTwo(!viewAllTwo)}>
          {viewAllTwo ? "View Less" : "View All"}
        </ViewAllBtn>
      </TopSelling>

      <CategoryContainer>
        <CatHeading>BROWSE BY DRESS STYLE</CatHeading>
        <Categorys>
          <CategoreyList>Casual</CategoreyList>
          <CategoreyListTwo>Formal</CategoreyListTwo>
          <CategoreyListThree>Party</CategoreyListThree>
          <CategoreyListFour>Gym</CategoreyListFour>
        </Categorys>
      </CategoryContainer>
      <Testmonials />
    </div>
  );
};

export default PageTwo;

const MoreDatas = styled.div`
  width: 90%;
  margin: 0 auto 2.25rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;
const MarqueeParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 7.625rem;
  display: flex;
  gap: 6.625rem;
  background-color: #000000;
  overflow-x: scroll;
  margin-bottom: 4.5rem;
`;
const NewArrivalsParent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 4rem 0;
  border-bottom: 1px solid #0000001a;
`;
const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3.438rem;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;
const SliderContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  overflow-x: scroll;
  margin: 0 0 2.25rem 0;
  /* background-color: yellowgreen; */
`;
const ViewAllBtn = styled.button`
  padding: 1rem 3.375rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #0000001a;
  border-radius: 3.875rem;
  cursor: pointer;
  background-color: white;
  margin: 0 0 4rem 0;

  &:hover {
    transition: 0.3s;
    background-color: black;
    color: white;
  }
`;

// TopSelling...
const TopSelling = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryContainer = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 1.25rem;
  background-color: #f0f0f0;
  margin: 0 auto 5rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    width: 93%;
  }
`;
const CatHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin: 4.375rem 0 4rem 0;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Categorys = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  /* background-color: red; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CategoreyList = styled.div`
  background-image: url("/img/img1.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 18.063rem;
  grid-column: span 1;
  border-radius: 1.25rem;
  font-size: 2.25rem;
  font-weight: 700;
  padding: 1.563rem 0 0 2.25rem;

  &:hover {
    transition: 0.3s;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transform: rotate(3deg);
  }

  @media (max-width: 1024px) {
    background-position: center;
  }
  @media (max-width: 768px) {
    background-position: center;
    grid-column: span 2;
  }
`;
const CategoreyListTwo = styled.div`
  background-image: url("/img/img2.png");
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: span 2;
  border-radius: 1.25rem;
  height: 18.063rem;
  font-size: 2.25rem;
  font-weight: 700;
  padding: 1.563rem 0 0 2.25rem;
  &:hover {
    transition: 0.3s;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transform: rotate(3deg);
  }

  @media (max-width: 1024px) {
    background-position: center;
  }
`;
const CategoreyListThree = styled.div`
  background-image: url("/img/img3.png");
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: span 2;
  border-radius: 1.25rem;
  height: 18.063rem;
  font-size: 2.25rem;
  font-weight: 700;
  padding: 1.563rem 0 0 2.25rem;
  &:hover {
    transition: 0.3s;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transform: rotate(-3deg);
  }

  @media (max-width: 1024px) {
    background-position: center;
  }
`;
const CategoreyListFour = styled.div`
  background-image: url("/img/img4.png");
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: span 1;
  border-radius: 1.25rem;
  height: 18.063rem;
  font-size: 2.25rem;
  font-weight: 700;
  padding: 1.563rem 0 0 2.25rem;
  margin: 0 0 4.75rem 0;

  &:hover {
    transition: 0.3s;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transform: rotate(-3deg);
  }

  @media (max-width: 1024px) {
    background-position: center;
  }
  @media (max-width: 768px) {
    background-position: center;
    grid-column: span 2;
  }
`;
