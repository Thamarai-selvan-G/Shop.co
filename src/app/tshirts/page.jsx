"use client";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { HiAdjustments } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import ProductCard from "@/components/cards/ProductCard";

const Products = () => {
  const reviews = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
      stars: 3,
      datePosted: "November 1, 2024",
    },
    {
      name: "Alex",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      stars: 5,
      datePosted: "November 2, 2024",
    },
    {
      name: "Aravind",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
      stars: 4,
      datePosted: "November 3, 2024",
    },
    {
      name: "Thiru Kumaran",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
      stars: 2,
      datePosted: "November 4, 2024",
    },
    {
      name: "Vijay",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
      stars: 5,
      datePosted: "November 5, 2024",
    },
  ];

  const Imgs = ["/img/image 5.png", "/img/image 2.png", "/img/image 6.png"];
  const colors = ["#4f4631", "#314F4A", "#31344F"];
  const sizes = ["Small", "Medium", "Large", "X-large"];

  const [selectedColor, setSelectedColor] = useState(1);
  const [image, setImage] = useState(Imgs[0]);
  const [size, setSize] = useState(2);
  const [count, setCount] = useState(1);
  const [Filtercss, setFilterCss] = useState(false);
  const [filterValue, setFilterValue] = useState("Older");
  function setPoster(imgUrl) {
    setImage(imgUrl);
  }

  function settingFilterValue(event) {
    setFilterValue(event);
    setFilterCss(false);
  }
  return (
    <>
      <ProductInfoContainer>
        <InfoImgContainer>
          <InfoImglist>
            {Imgs.map((data, index) => {
              return (
                <ImgItems
                  key={index}
                  src={data}
                  width={152}
                  height={167}
                  alt={`image ${index}`}
                  onClick={() => setPoster(data)}
                />
              );
            })}
          </InfoImglist>
          <InfoImgView
            src={image}
            width={444}
            height={530}
            alt="Selected Image"
          />
        </InfoImgContainer>
        <ProductDetailContainer>
          <ProductName>One Life Graphic T-shirt</ProductName>
          <RatingContainer>
            <StarRating>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </StarRating>
            <RatingNumber>4.5/5</RatingNumber>
          </RatingContainer>
          <PriceContainer>
            <Price>$201</Price>
            <DiscountPrice>$300</DiscountPrice>
            <DiscountPercentage>-20%</DiscountPercentage>
          </PriceContainer>
          <ProductDescription>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and <br />
            breathable fabric, it offers superior comfort and style.
          </ProductDescription>
          <ColorHeading>Select Colors</ColorHeading>
          <ColorsList>
            {colors.map((color, index) => (
              <Colors
                key={index}
                color={color}
                onClick={() => setSelectedColor(index)}
              >
                {selectedColor === index && <Tick>✔</Tick>}
              </Colors>
            ))}
          </ColorsList>
          <SizeHead>Choose Size</SizeHead>
          <SizeContainer>
            {sizes.map((val, index) => {
              return (
                <SizeLable
                  key={index}
                  onClick={() => setSize(index)}
                  isselected={size === index}
                >
                  {val}
                </SizeLable>
              );
            })}
          </SizeContainer>
          <CartParent>
            <CartCounterContainer>
              <Less onClick={() => count > 1 && setCount(count - 1)}>-</Less>
              <CountSum>{count}</CountSum>
              <Add onClick={() => setCount(count + 1)}>+</Add>
            </CartCounterContainer>
            <ConfirmBtn>Add to Cart</ConfirmBtn>
          </CartParent>
        </ProductDetailContainer>
      </ProductInfoContainer>
      <RatingsParent>
        <RatingNav>
          <SelectedUserProduct> Product Details</SelectedUserProduct>
          <RatingNdReview>Rating & Review</RatingNdReview>
          <Faqs>FAQs</Faqs>
        </RatingNav>
      </RatingsParent>
      <AllReviewsContainer>
        <TotalReview>
          All reviews <ReviewCount>(455)</ReviewCount>
        </TotalReview>
        <ReviewFilterContainer>
          <SettingsIcon>
            <HiAdjustments />
          </SettingsIcon>
          <RecentContainer onClick={() => setFilterCss(!Filtercss)}>
            <UserOption>{filterValue}</UserOption>
            <FaChevronDown />
            {Filtercss && (
              <RecentMenu>
                <MenuList onClick={() => settingFilterValue("Latest")}>
                  Latest
                </MenuList>
                <MenuList onClick={() => settingFilterValue("Older")}>
                  Older
                </MenuList>
                <MenuList onClick={() => settingFilterValue("New")}>
                  New
                </MenuList>
              </RecentMenu>
            )}
          </RecentContainer>
          <WriteReview>Write a Review</WriteReview>
        </ReviewFilterContainer>
      </AllReviewsContainer>
      <TestimonialContainer>
        {/* here......... */}
        {reviews.map((data, index) => {
          return (
            <TesimonialParent key={index}>
              <StarContainer>
                <div>
                  {[...Array(data.stars)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                  {[...Array(5 - data.stars)].map((_, i) => (
                    <FaStar key={i} color="#e0e0e0" />
                  ))}
                </div>
                <BsThreeDots />
              </StarContainer>

              <Reviewer>
                <ReviewerName>{data.name}</ReviewerName>
                <VerifiedBadge>●</VerifiedBadge>
              </Reviewer>
              <ReviewText>{data.text}</ReviewText>
              <PostedOn> Posted On {data.datePosted}</PostedOn>
            </TesimonialParent>
          );
        })}
      </TestimonialContainer>

      <AlsoLikeContainer>
        <LikeHeading>You might also like</LikeHeading>
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
      </AlsoLikeContainer>
    </>
  );
};

export default Products;

const ProductInfoContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  display: flex;
  gap: 2.5rem;

  @media (max-width: 1440px) {
    justify-content: center;
  }
  @media (max-width: 1240px) {
    flex-direction: column;
  }
`;
const InfoImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  /* background-color: green; */

  @media (max-width: 578px) {
    flex-direction: column-reverse;
  }
`;
const InfoImglist = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 578px) {
    flex-direction: row;
    width: 100%;
    column-gap: 0.5rem;
  }
  @media (max-width: 355px) {
    flex-wrap: nowrap;
  }
`;
const ImgItems = styled(Image)`
  margin: 0 0 0.875rem 0;
  object-fit: cover;
  border-radius: 1.25rem;

  @media (max-width: 576px) {
    width: 111px;
    height: 106px;
  }
  @media (max-width: 410px) {
    width: 101px;
    height: 96px;
  }
`;
const InfoImgView = styled(Image)`
  border-radius: 1.25rem;
  margin: 0 0 0.875rem 0;
  object-fit: cover;
  @media (max-width: 576px) {
    width: 95%;
    height: 350px;
  }
  @media (max-width: 450px) {
    width: 100%;
    height: 290px;
  }
`;
const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;
const ProductName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.875rem 0;

  @media (max-width: 676px) {
    font-size: 2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
const RatingContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 0 0 0.875rem 0;
`;
const StarRating = styled.span`
  color: gold;
  margin: 0;
`;
const RatingNumber = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;
const PriceContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  margin: 0 0 1.25rem 0;
`;
const Price = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
const DiscountPrice = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #00000066;
  text-decoration: line-through;

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;
const DiscountPercentage = styled.h2`
  padding: 0.375rem 0.875rem;
  color: #ff3333;
  border-radius: 3.875rem;
  background-color: #ff33331a;
  font-size: 0.75rem;
  margin: 0;

  @media (max-width: 400px) {
    padding: 0.375rem 0.75rem;
  }
`;
const ProductDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #00000099;
  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid #0000001a;
  width: 80%;
  margin: 0 0 1.5rem 0;

  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 0.875rem;
  }
`;
const ColorHeading = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #00000099;
  margin: 0 0 1rem 0;
`;
const ColorsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding: 0 0 1.491rem 0;
  margin: 0 0 1.5rem 0;
  border-bottom: 1px solid #0000001a;
  width: 80%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Colors = styled.span`
  background-color: ${(props) => props.color};
  width: 2.313rem;
  height: 2.313rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;
const Tick = styled.span`
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
`;
const SizeHead = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #00000099;
  margin: 0 0 1rem 0;
`;
const SizeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 0.75rem;
  padding: 0 0 1.5rem 0;
  margin: 0 0 1.5rem 0;
  border-bottom: 1px solid #0000001a;
  width: 80%;

  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 476px) {
    gap: 0.5rem;
  }
`;

const SizeLable = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isselected", // Prevents 'isselected' from being passed to the DOM
})`
  padding: 0.75rem 1.5rem;
  color: ${(props) => (props.isselected ? "white" : "black")};
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  border-radius: 3.875rem;
  border: 1px solid black;
  cursor: pointer;
  margin: 0;

  @media (max-width: 476px) {
    padding: 0.625rem 0.75rem;
  }
`;

const CartParent = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: 476px) {
    gap: 0.75rem;
  }
`;
const CartCounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  gap: 2.375rem;
  border-radius: 3.875rem;
  width: 10.625rem;
  height: 3.25rem;

  @media (max-width: 1024px) {
    width: 10rem;
  }

  @media (max-width: 476px) {
    width: 6.875rem;
    height: 2.75rem;
    gap: 1rem;
  }
`;
const Less = styled.span`
  font-size: 1.5rem;

  @media (max-width: 476px) {
    font-size: 0.875rem;
  }
`;
const CountSum = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
  @media (max-width: 476px) {
    font-size: 0.875rem;
  }
`;
const Add = styled.span`
  font-size: 1.5rem;
  @media (max-width: 476px) {
    font-size: 0.875rem;
  }
`;
const ConfirmBtn = styled.button`
  background-color: black;
  color: white;
  width: 25rem;
  height: 3.25rem;
  border-radius: 3.875rem;

  &:hover {
    transition: 0.3s;
    transform: scale(0.95);
  }

  @media (max-width: 1110px) {
    width: 20rem;
  }
  @media (max-width: 1024px) {
    width: 15rem;
  }
  @media (max-width: 476px) {
    width: 10.75rem;
    height: 2.75rem;
  }
`;

const RatingsParent = styled.div`
  width: 90%;
  border-bottom: 1px solid #0000001a;
  margin: 0 auto 1.5rem auto;
`;
const RatingNav = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0 0 0;
  justify-content: space-between;

  /* background-color: yellowgreen; */
`;
const RatingNdReview = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 1.5rem;
  color: #00000099;
  font-size: 1.25rem;
  font-weight: 400;
  border-bottom: 1px solid black;
  @media (max-width: 676px) {
    font-size: 1rem;
  }
  /* background-color: darkblue; */
`;
const SelectedUserProduct = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 1.5rem;
  color: #00000099;
  font-size: 1.25rem;
  font-weight: 400;
  @media (max-width: 676px) {
    font-size: 1rem;
  }
`;

const Faqs = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 1.5rem;
  color: #00000099;
  font-size: 1.25rem;
  font-weight: 400;
  @media (max-width: 676px) {
    font-size: 1rem;
  }
  /* background-color: rebeccapurple; */
`;
const AllReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 1.5rem auto;
  /* background-color: red; */

  @media (max-width: 676px) {
    width: 95%;
    /* gap: 3.625rem; */
  }
`;
const TotalReview = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0;

  @media (max-width: 510px) {
    font-size: 1rem;
  }
  @media (max-width: 676px) {
    justify-content: start;
  }
`;
const ReviewCount = styled.p`
  color: #00000099;
  font-size: 1rem;
  margin: 0%;

  @media (max-width: 676px) {
    font-size: 0.875rem;
  }
`;
const ReviewFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`;
const SettingsIcon = styled.span`
  padding: 1rem 1.25rem;
  background-color: #f0f0f0;
  border-radius: 3.875rem;
  font-size: 1rem;

  @media (max-width: 510px) {
    font-size: 0.75rem;
    padding: 0.75rem 1rem;
  }
`;

const RecentContainer = styled.div`
  padding: 1rem 1.25rem;
  background-color: #f0f0f0;
  border-radius: 3.875rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.313rem;
  position: relative;

  @media (max-width: 685px) {
    display: none;
  }
`;
const UserOption = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const RecentMenu = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: white;
  position: absolute;
  top: 105%;
  border-radius: 0.25rem;
  padding: 0.25rem 0 0.25rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
const MenuList = styled.p`
  color: black;
  margin: 0;
  cursor: pointer;
`;
const WriteReview = styled.span`
  background-color: black;
  color: white;
  font-size: 0.875rem;
  padding: 1rem 3.375rem;
  border-radius: 3.875rem;

  &:hover {
    transition: 0.3s;
    transform: scale(0.95);
  }
  @media (max-width: 510px) {
    font-size: 0.75rem;
    padding: 0.75rem 1rem;
  }
`;
const TestimonialContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const TesimonialParent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem 2rem;
  border: 1px solid black;
  border-radius: 1.25rem;
`;
const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0.938rem 0;
`;
const Star = styled.div``;

const Reviewer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  font-family: "Satoshi", sans-serif;
  color: #00000099;
  margin: 0 0 1.5rem 0;
`;
const PostedOn = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #00000099;
`;
const AlsoLikeContainer = styled.div`
  width: 95%;
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* background-color: rebeccapurple;  */
`;
const LikeHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-size: 3rem;
  margin: 0 0 3.438rem 0;

  @media (max-width: 676px) {
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
