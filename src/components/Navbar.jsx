"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const router = useRouter();

  function goTocart() {
    router.push("/cart");
  }
  return (
    <ParentContainer>
      <Logo href={"/"}>
        <BurgerMenu>
          <GiHamburgerMenu />
        </BurgerMenu>
        SHOP.CO
      </Logo>
      <Menu>
        <Links href={"/"}>
          Shop <FaChevronDown />
        </Links>
        <Links href={"/onsale"}>On Sale</Links>
        <Links href={"/newarrivals"}>New Arrivals</Links>
        <Links href={"/brands"}>Brands</Links>
      </Menu>
      <SearchContainer>
        <Icon>
          <IoIosSearch />
        </Icon>
        <InputFiled type="text" placeholder="search your product..." />
      </SearchContainer>
      <UserOpt>
        <Searchicon>
          <FaSearch />
        </Searchicon>
        <FaCartShopping onClick={goTocart} />
        <FaCircleUser />
      </UserOpt>
    </ParentContainer>
  );
};

export default Navbar;

const ParentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 5.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  @media (max-width: 1300px) {
    justify-content: space-around;
    gap: 1rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-family: "Integral CF";
  color: black;
  display: flex;
  align-items: end;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  /* justify-content: space-between; */
  @media (max-width: 750px) {
    display: none;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  color: #000000;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.25rem;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  width: 36.063rem;
  background-color: #f0f0f0;

  border-radius: 3.875rem;
  @media (max-width: 1280px) {
    width: 28rem;
  }
  @media (max-width: 1200px) {
    width: 25rem;
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;

const Icon = styled.span`
  color: #00000066;
  font: 1rem;
`;
const InputFiled = styled.input`
  background-color: #f0f0f0;
  border-radius: 3.875rem;
  border: none;
  font-size: 1rem;
  color: #00000066;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
const UserOpt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.5rem;
  @media (max-width: 525px) {
    font-size: 1rem;
    gap: 0.785rem;
    align-items: end;
  }
`;
const Searchicon = styled.span`
  opacity: 0;
  @media (max-width: 1150px) {
    opacity: 1;
  }
  @media (max-width: 525px) {
    display: flex;
    align-items: end;
    align-items: end;
  }
`;
const BurgerMenu = styled.span`
  display: none;

  @media (max-width: 750px) {
    font-size: 1.5rem;
    display: block;
  }
`;
