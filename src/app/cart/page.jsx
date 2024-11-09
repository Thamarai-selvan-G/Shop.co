"use client";

import Image from "next/image";
import styled from "styled-components";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/img/Frame 38.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/img/Frame 34.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/img/Frame 33.png",
    },
  ];

  return (
    <CartParent>
      <CartHeading>YOUR CART</CartHeading>
      <CartListContainer>
        <ShowListContainer>
          {cartItems.map((data, index) => {
            return (
              <SelectedProduct key={index}>
                <ProductImag
                  src={data.image}
                  width={124}
                  height={124}
                  alt="cartImg"
                />
                <CartProducts>
                  <NameWarper>
                    <ProductName>{data.name}</ProductName>
                    <DeleteBtn
                      src={"/img/delete.svg"}
                      width={24}
                      height={24}
                      alt="delete button"
                    />
                  </NameWarper>
                  <Size>
                    Size: <SizeSpan>{data.size}</SizeSpan>
                  </Size>
                  <Color>
                    Color: <ColorSpan>{data.color}</ColorSpan>
                  </Color>
                  <PriceWraper>
                    <Price>{data.price}</Price>
                    <CounterBtn>
                      <Mines
                        src={"/img/newmines.svg"}
                        width={16}
                        height={16}
                        alt="minues"
                      />
                      <Counter>1</Counter>
                      <Plus
                        src={"/img/newplus.svg"}
                        width={16}
                        height={16}
                        alt="plus"
                      />
                    </CounterBtn>
                  </PriceWraper>
                </CartProducts>
              </SelectedProduct>
            );
          })}
        </ShowListContainer>

        <SummaryContainer>
          <SummayHeader>Order Summary</SummayHeader>
          <SubTotalWarper>
            <SumHeading>Subtotal</SumHeading>
            <SumValues>$530</SumValues>
          </SubTotalWarper>
          <SubTotalWarper>
            <SumHeading>Discount(-20%)</SumHeading>
            <Discount>-$113</Discount>
          </SubTotalWarper>
          <SubFeeWraper>
            <SumHeading>Delivery Fee</SumHeading>
            <SumValues>$15</SumValues>
          </SubFeeWraper>
          <SumTotalWraper>
            <SumTotal>Total</SumTotal>
            <SumTotalValue>$416</SumTotalValue>
          </SumTotalWraper>
          <PromoCodeContainer>
            <CodeInputParent>
              <Tag src={"/img/tag.svg"} width={24} height={24} alt="tag" />
              <CodeInputFiled type="text" placeholder="Add your code.." />
            </CodeInputParent>
            <ApplyBtn>Apply</ApplyBtn>
          </PromoCodeContainer>
        </SummaryContainer>
      </CartListContainer>
    </CartParent>
  );
};

export default CartPage;

const CartParent = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 10rem;
  /* background-color: yellowgreen; */
`;
const CartHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
`;
const CartListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  justify-content: space-between;
  gap: 1.25rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const ShowListContainer = styled.div`
  width: 50%;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #0000001a;
  border-radius: 20px;
  /* background-color: green; */
  @media (max-width: 900px) {
    width: 90%;
    padding: 1rem 1.25rem;
  }
`;

const SelectedProduct = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid #0000001a;
`;
const CartProducts = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  /* border: 2px solid red; */
`;
const ProductImag = styled(Image)`
  border-radius: 0.541rem;

  @media (max-width: 900px) {
    width: 99px;
    height: 99px;
  }
`;

const NameWarper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductName = styled.span`
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
const DeleteBtn = styled(Image)`
  cursor: pointer;
  @media (max-width: 900px) {
    width: 20px;
    height: 20px;
  }
`;
const Size = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: black;
  margin: 0 0 4px 0;

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;
const Color = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: black;
  margin: 0 0 15px 0;

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;
const PriceWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;
const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 1.25rem;
  }
`;
const CounterBtn = styled.span`
  background-color: #f0f0f0;
  width: 126px;
  height: 44px;
  border-radius: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 900px) {
    width: 115px;
    height: 38px;
    gap: 10px;
  }
  @media (max-width: 576px) {
    width: 85px;
    height: 31px;
    gap: 10px;
  }
`;
const Mines = styled(Image)`
  margin: 0;
  cursor: pointer;
`;
const Plus = styled(Image)`
  margin: 0;
  cursor: pointer;
`;
const Counter = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const SizeSpan = styled.span`
  color: #00000099;
  font-size: 0.875rem;
`;
const ColorSpan = styled.span`
  color: #00000099;
  font-size: 0.875rem;
`;
const SummaryContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #0000001a;
  border-radius: 20px;

  @media (max-width: 900px) {
    width: 90%;
    padding: 1rem 1.25rem;
  }
`;
const SummayHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;

  @media (max-width: 900px) {
    font-size: 1.25rem;
  }
`;
const SubTotalWarper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1.25rem 0;
`;
const SumHeading = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  color: #00000099;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
const SumValues = styled.span`
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
const Discount = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: red;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
const SubFeeWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 1.25rem 0;
  border-bottom: 1px solid #0000001a;
  /* margin: 0 0 1.25rem 0; */
`;
const SumTotalWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.25rem 0 1.5rem 0;
`;
const SumTotal = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  color: black;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
const SumTotalValue = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 1.25rem;
  }
`;
const PromoCodeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
const CodeInputParent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 326px;
  height: 48px;
  border: none;
  border-radius: 62px;
  background-color: #f0f0f0;
  overflow-x: hidden;

  @media (max-width: 394px) {
    width: 200px;
  }
`;
const Tag = styled(Image)`
  margin: 0 0 0 16px;
`;
const CodeInputFiled = styled.input`
  border: none;
  background-color: #f0f0f0;
  font-size: 1rem;
  font-weight: 400;
  color: #00000066;
  &:focus {
    outline: none;
  }

  /* @media (max-width: 1050px) {
    width: 13.625rem;
  } */
`;

const ApplyBtn = styled.button`
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  width: 7.438rem;
  height: 3;
  text-align: center;
  border-radius: 62px;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
  }

  @media (max-width: 1050px) {
    width: 5.5rem;
  }
`;
