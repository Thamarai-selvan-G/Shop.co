"use client";

import PageTwo from "@/components/Pg-1screen2";
import styled from "styled-components";

const page = () => {
  return (
    <>
      <HomeParent>
        <HomeContainer>
          <HomeContentContainer>
            <Heading>
              FIND CLOTHES <br />
              THAT MATCHES YOUR STYLE
            </Heading>
            <Description>
              {" "}
              Browse through our diverse range of meticulously crafted garments,
              designed <br />
              to bring out your individuality and cater to your sense of style.
            </Description>
            <Button>Shop Now</Button>
            <DataContainer>
              <Data>
                <DataNumber>2,000+</DataNumber>
                <DataName>International Bransds</DataName>
              </Data>
              <Pipe></Pipe>
              <Data>
                <DataNumber>2,000+</DataNumber>
                <DataName>International Bransds</DataName>
              </Data>
              <Pipe></Pipe>
              <Data>
                <DataNumber>2,000+</DataNumber>
                <DataName>International Bransds</DataName>
              </Data>
            </DataContainer>
          </HomeContentContainer>
        </HomeContainer>
      </HomeParent>
      <PageTwo />
    </>
  );
};

export default page;

const HomeParent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.438rem 0 7.25rem 0;
  background-image: url("/img/homebaner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;

  @media (max-width: 610px) {
    padding: 2.5rem 0 0 0;
  }
`;
const HomeContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  /* background-color: greenyellow; */
  margin: 0;
`;
const HomeContentContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  /* background-color: red; */

  @media (max-width: 970px) {
    width: 100%;
  }

  @media (max-width: 610px) {
    align-items: center;
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  margin: 0 0 2rem 0;

  @media (max-width: 610px) {
    font-size: 3rem;
  }
  @media (max-width: 575px) {
    font-size: 2.25rem;
    line-height: 2.125rem;
    margin: 0 0 1.25rem 0;
  }
`;
const Description = styled.p`
  font-size: 1rem;
  line-height: 1.375rem;
  font-weight: 400;
  color: #00000099;
  margin: 0 0 2rem 0;
  @media (max-width: 575px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0 0 1.5rem 0;
  }
`;
const Button = styled.span`
  background-color: black;
  color: white;
  font-size: 1rem;
  padding: 1rem 3.375rem;
  border-radius: 3.875rem;
  border: none;
  margin: 0 0 3rem 0;

  &:hover {
    transform: scale(0.9);
    transition: 0.3s;
  }

  @media (max-width: 610px) {
    text-align: center;
    width: 50%;
  }
`;
const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 610px) {
    gap: 1.719rem;
  }
`;
const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const DataNumber = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`;
const DataName = styled.p`
  font-size: 1rem;
  color: #00000099;
  font-weight: 400;
  margin: 0;
`;
const Pipe = styled.span`
  height: 4.625rem;
  border: 1px solid #0000001a;

  @media (max-width: 610px) {
    height: 2.25rem;
  }
`;
