"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePagination from "@mui/material/usePagination";
import Image from "next/image";

const PaginationPage = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postPerPage);
  const { items } = usePagination({
    count: totalPages,
    page: currentPage,
    onChange: (event, page) => setCurrentPage(page),
  });

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 400); 
    };
    if (typeof window !== "undefined") {
      handleResize(); 
      window.addEventListener("resize", handleResize); 
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize); 
      }
    };
  }, []);

  
  const getPageNumbers = () => {
    let pageNumbers = [];
    let startPage = Math.max(currentPage - 1, 2); 
    let endPage = Math.min(currentPage + 2, totalPages - 1); 

    if (isSmallScreen) {
    
      startPage = currentPage > 2 ? currentPage - 1 : currentPage;
      endPage = currentPage < totalPages - 1 ? currentPage + 1 : currentPage;
    } else {
      
      if (currentPage <= 2) {
        startPage = 2;
        endPage = Math.min(4, totalPages - 1);
      } else if (currentPage >= totalPages - 1) {
        startPage = Math.max(totalPages - 4, 2);
        endPage = totalPages - 1;
      }
    }

    if (startPage > 2) pageNumbers.push(1);
    if (startPage > 3) pageNumbers.push("...");
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    if (endPage < totalPages - 1) pageNumbers.push("...");
    if (endPage < totalPages) pageNumbers.push(totalPages);

    return pageNumbers;
  };

  return (
    <Nav>
      <PreviousNextWrapper>
       
        {items.find((item) => item.type === "previous") && (
          <PageButton {...items.find((item) => item.type === "previous")}>
            <PreviousBtn
              src="/img/left.svg"
              width={20}
              height={20}
              alt="Previous"
            />
            Previous
          </PageButton>
        )}
      </PreviousNextWrapper>

      <List>
        {getPageNumbers().map((page, index) => {
          let content = null;

          if (page === "...") {
            content = "…";
          } else if (typeof page === "number") {
            content = (
              <PageButton
                selected={currentPage === page}
                onClick={() => setCurrentPage(page)}
                key={page} 
              >
                {page}
              </PageButton>
            );
          }

          return <li key={index}>{content}</li>;
        })}
      </List>

      <NextPreviousWrapper>
        {/* Next Button */}
        {items.find((item) => item.type === "next") && (
          <PageButton {...items.find((item) => item.type === "next")}>
            Next
            <NextBtn src="/img/next.svg" width={20} height={20} alt="Next" />
          </PageButton>
        )}
      </NextPreviousWrapper>
    </Nav>
  );
};

export default PaginationPage;


const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  flex-wrap: wrap; 
  gap: 1rem;
`;

const PreviousNextWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const NextPreviousWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  border-radius: 4px;
  cursor: pointer;
  min-width: 40px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: black;
    color: white;

    svg,
    img {
      filter: brightness(0) invert(1);
    }
  }
`;

const PreviousBtn = styled(Image)``;
const NextBtn = styled(Image)``;
