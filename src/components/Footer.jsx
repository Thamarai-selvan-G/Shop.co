"use client";
import styled from "styled-components";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

import Link from "next/link";

const Footer = () => {
  return (
    <FootParent>
      <>
        <Container>
          <Social>
            <SocialHead>SHOP.CO</SocialHead>
            <SocialPara>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </SocialPara>

            <SocialIcons>
              <StyledIcons>
                <FaTwitter />
              </StyledIcons>
              <StyledIcons>
                <FaFacebookF />
              </StyledIcons>
              <StyledIcons>
                <PiInstagramLogoBold />
              </StyledIcons>
              <StyledIcons>
                <FaGithub />
              </StyledIcons>
            </SocialIcons>
          </Social>

          <Company>
            <AddHeader>COMPANY</AddHeader>
            <AddList>
              <AppListLink href={"/"}>About</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Features</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Works</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Career</AppListLink>{" "}
            </AddList>
          </Company>
          <Company>
            <AddHeader>HELP</AddHeader>
            <AddList>
              <AppListLink href={"/"}>Customer Support</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Delivery Details</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Terms & Conditions</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Privacy Policy</AppListLink>{" "}
            </AddList>
          </Company>
          <Company>
            <AddHeader>FAQ</AddHeader>
            <AddList>
              <AppListLink href={"/"}>Account</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}> Manage Deliveries</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Orders</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Payment</AppListLink>{" "}
            </AddList>
          </Company>
          <Company>
            <AddHeader>Resources</AddHeader>
            <AddList>
              <AppListLink href={"/"}>Free eBooks</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Development Tutoria</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>How to - Blog</AppListLink>{" "}
            </AddList>
            <AddList>
              <AppListLink href={"/"}>Youtube Playlist</AppListLink>{" "}
            </AddList>
          </Company>
        </Container>
        <FooterEnd>
          <EndPara>Shop.co © 2000-2023, All Rights Reserved</EndPara>
          <Endcard
            src={"/img/cards.png"}
            width={281.07}
            height={40.03}
            alt="endcard"
          />
        </FooterEnd>
      </>
      <Subscribe>
        <SubscribeHeading>
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </SubscribeHeading>
        <InputFIledContainer>
          <EmailInputContainer>
            <MdOutlineEmail />
            <InputFiled placeholder="Enter your email...." />
          </EmailInputContainer>
          <SubcribeBtn>Subscribe to Newsletter</SubcribeBtn>
        </InputFIledContainer>
      </Subscribe>
    </FootParent>
  );
};

export default Footer;

const FootParent = styled.div`
  width: 100%;
  height: auto;
  background-color: #f0f0f0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10.5rem;
`;
const Container = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  gap: 7.094rem;
  padding: 8.75rem 0 0 0;
  /* background-color: yellow; */
`;
const Social = styled.div`
  width: 15.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* background-color: red; */
`;
const SocialHead = styled.h1`
  font-weight: 700;
  font-size: 2.091rem;
  margin: 0 0 1.563rem 0;
`;
const SocialPara = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  color: #00000099;
  margin: 0 0 2.188rem 0;
`;
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.75rem;
`;

const StyledIcons = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 50%;
  background-color: white;
  color: black;
  border: 1px solid #00000033;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: black;
    color: white;
  }
`;

const Company = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.625rem;
`;

const AddHeader = styled.h3`
  font-size: 1rem;
  font-weight: 500;

  color: #000000;
  margin: 0;
`;
const AddList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
`;
const AppListLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 400;
  color: #00000099;
  cursor: pointer;
`;

const FooterEnd = styled.div`
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #0000001a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.563rem 0 0 0;

  @media (max-width: 576px) {
    flex-direction: column;
    /* padding: 0 0 5.125rem 0; */
  }
`;

const EndPara = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
`;
const Endcard = styled(Image)``;

const Subscribe = styled.div`
  width: 80%;
  padding: 3rem 4rem;
  border-radius: 1.25rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: -20%;

  @media (max-width: 700px) {
    width: 65%;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 2rem;
    top: -14%;
  }
`;
const SubscribeHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;

  @media (max-width: 990px) {
    font-size: 2rem;
  }
`;
const InputFIledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
`;
const EmailInputContainer = styled.div`
  width: 21.803rem;
  height: 3rem;
  border-radius: 3.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-left: 1rem; */
  background-color: white;
  gap: 0.75rem;

  @media (max-width: 820px) {
    width: 16.438rem;
    gap: 1.5rem;
  }
`;
const InputFiled = styled.input`
  font-size: 1rem;
  font-weight: 400;
  border: none;

  &:focus {
    outline: none;
  }
`;

const SubcribeBtn = styled.button`
  background-color: white;
  color: black;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 3.875rem;
  width: 21.813rem;
  height: 2.875rem;
  padding: 0.75rem 1rem;
  border: none;

  @media (max-width: 820px) {
    width: 16.438rem;
  }
`;
