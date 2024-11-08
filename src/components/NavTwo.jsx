"use client"
// import Link from "next/link"
import styled from "styled-components"
const NavTwo = () => {
  return (
    <NavContainer>
      <SignupOffer>Sign up and get 20% off to your first order.</SignupOffer>
      <SignupBtn>Sign Up Now</SignupBtn>
    </NavContainer>
  )
}

export default NavTwo

const NavContainer = styled.div`
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    gap: 0.5rem;
    background-color: #000000;
`
const SignupOffer = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: #FFFFFF;
    @media(max-width:576px){
      font-size: 0.75rem;
    }
`
const SignupBtn =styled.p`
     font-size: 0.875rem;
     font-weight: 500;
     color: #FFFFFF;
     border-bottom: 1px solid #FFFFFF;

     @media(max-width:576px){
      font-size: 0.75rem;
    }
`