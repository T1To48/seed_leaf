import { Link } from "react-router";
import styled from "styled-components";
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

const StyledPaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    margin-bottom: 5rem;
  }

`;

const StyledArrow = styled(Link)<{ $size: number }>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2),
    inset 0px 4px 20px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.color.text};
  transition: transform 0.2s ease-in;

  & svg {
    width: ${({ $size }) => $size}rem;
    stroke-width: 2.5px;
  }

  &:hover{
    box-shadow: none;
    transform:scale(1.3);
    color: ${({ theme }) => theme.color.primary};

  }

`;
const StyledPagesNumbersList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  width: 8rem;
`;
const StyledPageNumberItem = styled.li`
  cursor: pointer;
  width: calc(8rem / 3);
  color: ${({ theme }) => theme.color.text};
  transition: transform 0.2s ease-out;
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.primary};
    transform: scale(1.3);
  }
`;
const ProductsPagination = () => {
  const valuesArr = [1, 2, 3];
  return (
    <StyledPaginationContainer>
      <StyledArrow $size={1.6} to="https://www.google.com">
        <ChevronDoubleLeftIcon />
      </StyledArrow>

      <StyledArrow $size={1.8} to="https://www.google.com">
        <ChevronLeftIcon />
      </StyledArrow>

      <StyledPagesNumbersList>
        {valuesArr.map((pageNum) => {
          return (
            <StyledPageNumberItem key={pageNum}>{pageNum}</StyledPageNumberItem>
          );
        })}
      </StyledPagesNumbersList>

      <StyledArrow $size={1.8} to="https://www.google.com">
        <ChevronRightIcon />
      </StyledArrow>

      <StyledArrow $size={1.6} to="https://www.google.com">
        <ChevronDoubleRightIcon />
      </StyledArrow>
    </StyledPaginationContainer>
  );
};

export default ProductsPagination;
