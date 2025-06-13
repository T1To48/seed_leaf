import { Link } from "react-router";
import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  height: 16vh;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0px 8px 10px rgba(169, 169, 169, 0.15),
    0px -8px 10px rgba(169, 169, 169, 0.15);
`;

const StyledContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.accent};
  display: grid;
  grid-auto-flow: column;
  padding: 2rem 4rem;
  height: 8vh;
`;

export const StyledInfoContainer = styled(StyledContainer)`
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-between;
  background: rgba(169, 169, 169, 0.15);
  border-top-right-radius: ${({ theme }) => theme.borderRadius.small};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  letter-spacing: 0.2px;
  row-gap: 0.3rem;
  & span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;
export const StyledLinkBtnContainer = styled(StyledContainer)`
  border-top: none;
  grid-template-rows: 1fr;
  justify-content: end;
  align-items: center;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const StyledLink = styled(Link)`
  border: 2px solid black;
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: black;
  letter-spacing: 0.5px;
  position: relative;
  transition: 0.2s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;
