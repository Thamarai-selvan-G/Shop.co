"use client";
import React from "react";
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

  // Helper function to create page numbers with ellipsis
  const getPageNumbers = () => {
    let pageNumbers = [];
    let startPage = Math.max(currentPage - 1, 2); // Start from 2nd page or before
    let endPage = Math.min(currentPage + 2, totalPages - 1); // End at 2nd last page or before

    // Adjust pagination for 2 pages on smaller screens (below 400px)
    const isSmallScreen = window.innerWidth <= 400;

    if (isSmallScreen) {
      // Show only 2 pages, e.g., current page and one page before or after
      startPage = currentPage > 2 ? currentPage - 1 : currentPage;
      endPage = currentPage < totalPages - 1 ? currentPage + 1 : currentPage;
    } else {
      // For larger screens, use the previous logic with 4 pages
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
        {/* Previous Button */}
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
            <NextBtn src="/img/right.svg" width={20} height={20} alt="Next" />
          </PageButton>
        )}
      </NextPreviousWrapper>
    </Nav>
  );
};

export default PaginationPage;

// Styled components
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
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
