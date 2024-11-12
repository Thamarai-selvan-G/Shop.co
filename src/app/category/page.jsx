"use client";
import dynamic from 'next/dynamic';
import RangeTag from "@/components/RangeTag";
import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import dummydata from "@/api/dummydata";

const ProductCard = dynamic(() => import("@/components/cards/ProductCard"), { ssr: false });
const PaginationPage = dynamic(() => import("@/components/PaginationPage"), { ssr: false });

const CategoryPage = () => {
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const colors = [
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06CAF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "#FFFFFF",
    "#000000",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const [selectedColor, setSelectedColor] = useState(5);
  const [selectedSize, setSelectedSize] = useState(4);
  const [Filtercss, setFilterCss] = useState(false);
  const [filterValue, setFilterValue] = useState("Most Popular");

  //Pagination section

  const [productData, setProductData] = useState(dummydata);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  const lastPostIndex = currentPage * postPerPage;
  const firstPageIndex = lastPostIndex - postPerPage;

  const currentPosts = productData.slice(firstPageIndex, lastPostIndex);
  function settingFilterValue(event) {
    setFilterValue(event);
    setFilterCss(false);
  }
  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <PageParent>
      <FilterContainer>
        <FilterWraper>
          <FiltersHeaading>Filters</FiltersHeaading>
          <FilterIcon
            src={"/img/filter.svg"}
            width={24}
            height={24}
            alt="filterImg"
          />
        </FilterWraper>
        <FilterMenus>
          <FilterMenuWraper>
            <MenuHeading>T-shirts</MenuHeading>
            <NextIncon
              src={"/img/next.svg"}
              width={16}
              height={16}
              alt="nextIcon"
            />
          </FilterMenuWraper>
          <FilterMenuWraper>
            <MenuHeading>Shorts</MenuHeading>
            <NextIncon
              src={"/img/next.svg"}
              width={16}
              height={16}
              alt="nextIcon"
            />
          </FilterMenuWraper>
          <FilterMenuWraper>
            <MenuHeading>Shirts</MenuHeading>
            <NextIncon
              src={"/img/next.svg"}
              width={16}
              height={16}
              alt="nextIcon"
            />
          </FilterMenuWraper>
          <FilterMenuWraper>
            <MenuHeading>Hoodies</MenuHeading>
            <NextIncon
              src={"/img/next.svg"}
              width={16}
              height={16}
              alt="nextIcon"
            />
          </FilterMenuWraper>
          <FilterMenuWraper>
            <MenuHeading>Jeans</MenuHeading>
            <NextIncon
              src={"/img/next.svg"}
              width={16}
              height={16}
              alt="nextIcon"
            />
          </FilterMenuWraper>
        </FilterMenus>
        <PriceContainer>
          <PriceWraper>
            <RangeTag />
          </PriceWraper>
        </PriceContainer>
        <ColorContainer>
          <ColorWraper>
            <ColorHeading>Colors</ColorHeading>
            <UpArrow src={"/img/up.svg"} width={16} height={16} alt="upImg" />
          </ColorWraper>
          <ColorFilds>
            {colors &&
              colors.map((colCode, index) => {
                return (
                  <Colors
                    key={index}
                    color={colCode}
                    onClick={() => setSelectedColor(index)}
                  >
                    {selectedColor === index && (
                      <Tick
                        src={"/img/tick.svg"}
                        width={16}
                        height={16}
                        alt="tickImg"
                      />
                    )}
                  </Colors>
                );
              })}
          </ColorFilds>
        </ColorContainer>
        <SizeContainer>
          <SizeWraper>
            <SizeHeading>Size</SizeHeading>
            <UpArrow src={"/img/up.svg"} width={16} height={16} alt="upImg" />
          </SizeWraper>
          <SizeFilds>
            {sizes &&
              sizes.map((sizeLable, index) => {
                return (
                  <Size
                    key={index}
                    selectedSize={selectedSize === index}
                    onClick={() => setSelectedSize(index)}
                  >
                    {sizeLable}
                  </Size>
                );
              })}
          </SizeFilds>
        </SizeContainer>
        <StyleContainer>
          <StyleWraper>
            <StytleHeading>Dress Style</StytleHeading>
            <UpArrow src={"/img/up.svg"} width={16} height={16} alt="upImg" />
          </StyleWraper>
          <FilterMenus>
            <FilterMenuWraper>
              <MenuHeading>casual</MenuHeading>
              <NextIncon
                src={"/img/next.svg"}
                width={16}
                height={16}
                alt="nextIcon"
              />
            </FilterMenuWraper>
            <FilterMenuWraper>
              <MenuHeading>Formal</MenuHeading>
              <NextIncon
                src={"/img/next.svg"}
                width={16}
                height={16}
                alt="nextIcon"
              />
            </FilterMenuWraper>
            <FilterMenuWraper>
              <MenuHeading>party</MenuHeading>
              <NextIncon
                src={"/img/next.svg"}
                width={16}
                height={16}
                alt="nextIcon"
              />
            </FilterMenuWraper>
            <FilterMenuWraper>
              <MenuHeading>Gym</MenuHeading>
              <NextIncon
                src={"/img/next.svg"}
                width={16}
                height={16}
                alt="nextIcon"
              />
            </FilterMenuWraper>
          </FilterMenus>
          <FilterBtn>Apply Filter</FilterBtn>
        </StyleContainer>
      </FilterContainer>
      <PaginationParent>
        <PaginationHeader>
          <PageHeading>Casual</PageHeading>
          <DummyDiv>
            <HeadFilter1>Showing 1-10 of 100 Products</HeadFilter1>
            <SecoundMenu>
              <FilterIcon
                src={"/img/filter.svg"}
                width={24}
                height={24}
                alt="filterImg"
              />
            </SecoundMenu>
            <RecentContainer onClick={() => setFilterCss(!Filtercss)}>
              <HeadingFilter>
                <HeadFilter1>Sort By :</HeadFilter1>
              </HeadingFilter>

              <UserOption>
                {filterValue} <FaChevronDown />
              </UserOption>

              {Filtercss && (
                <RecentMenu>
                  <MenuList onClick={() => settingFilterValue("Trending")}>
                    Latest
                  </MenuList>
                  <MenuList onClick={() => settingFilterValue("Older")}>
                    Older
                  </MenuList>
                  <MenuList onClick={() => settingFilterValue("New")}>
                    New
                  </MenuList>
                  <MenuList onClick={() => settingFilterValue("Most Popular")}>
                    Most Popular
                  </MenuList>
                </RecentMenu>
              )}
            </RecentContainer>
          </DummyDiv>
        </PaginationHeader>
        <ProductsContainer>
          {dummydata &&
            currentPosts.map((data, index) => {
              return (
                <ProductCard
                  key={index}
                  img={data.img}
                  name={data.name}
                  price={data.price}
                  percentage={data.discount}
                />
              );
            })}
        </ProductsContainer>
        <PaginationPage
          totalPosts={productData.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </PaginationParent>
    </PageParent>
  );
};

export default CategoryPage;

const PageParent = styled.div`
  width: 90%;
  margin: 2rem auto 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding-bottom: 6rem;
`;
const FilterContainer = styled.div`
  width: 18.438rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 24px;
  border-radius: 20px;
  border: 1px solid #0000001a;

  @media (max-width: 970px) {
    display: none;
  }
`;
const FilterWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #0000001a;
  margin-bottom: 1.5rem;
`;
const FiltersHeaading = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;
const FilterIcon = styled(Image)``;
const FilterMenus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #0000001a;
  margin-bottom: 1.5rem;
`;
const FilterMenuWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuHeading = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #00000099;
  margin: 0%;
`;
const NextIncon = styled(Image)``;

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #0000001a;
  margin-bottom: 1.5rem;
`;
const PriceWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ColorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ColorWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;
const ColorHeading = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;
const UpArrow = styled(Image)``;

const ColorFilds = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 0.969rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #0000001a;
  margin-bottom: 1.5rem;
`;
const Colors = styled.span`
  width: 37px;
  height: 37px;
  background-color: ${(props) => props.color};
  border: 1px solid #0000001a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;
const Tick = styled(Image)``;

const SizeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SizeWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

const SizeHeading = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

const SizeFilds = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 0.969rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #0000001a;
  margin-bottom: 1.5rem;
`;
const Size = styled.span`
  background-color: ${(props) => (props.selectedSize ? "black" : "#F0F0F0")};
  color: ${(props) => (props.selectedSize ? "white" : "#00000099")};
  padding: 10px 20px;
  border-radius: 62px;
  cursor: pointer;
`;

const StyleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const StyleWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

const StytleHeading = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;
const FilterBtn = styled.span`
  margin-bottom: 1.813rem;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem 3.375rem;
  border-radius: 62px;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
    transition: 0.3s;
  }
`;
const PaginationParent = styled.div`
  width: 57.813rem;
  display: flex;
  flex-direction: column;
`;
const PaginationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
const PageHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;
const HeadingFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 970px) {
    display: none;
  }
`;
const HeadFilter1 = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: #00000099;

  @media (max-width: 685px) {
    font-size: 0.75rem;
  }
`;

const RecentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.313rem;
  position: relative;
  cursor: pointer;

  @media (max-width: 685px) {
    display: none;
  }
`;
const UserOption = styled.span`
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 970px) {
    display: none;
  }
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
  top: 110%;
  right: 0%;
  border-radius: 0.25rem;
  padding: 0.25rem 0 0.25rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 970px) {
    display: none;
  }
`;
const MenuList = styled.p`
  color: black;
  margin: 0;
  cursor: pointer;
`;
const DummyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: 970px) {
    width: 60%;
    justify-content: space-evenly;
    /* background-color: red; */
  }
`;
const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-bottom: 2rem;
  border-bottom: 1px solid #0000001a;
  margin:  0 0 20px 0;

  @media (max-width: 400px) {
    gap: 10px;
  }

`;
const SecoundMenu = styled.div`
  display: none;

  @media (max-width: 970px) {
    display: block;
  }
`;
