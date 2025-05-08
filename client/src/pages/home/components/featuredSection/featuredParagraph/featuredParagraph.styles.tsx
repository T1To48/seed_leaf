import { Link } from "react-router";
import styled from "styled-components";

export const StyledParagraphWrapper = styled.div`
  /* font-size: ${({ theme }) => theme.fontSize.medium.desktop}; */
  color: ${({ theme }) => theme.color.text};
  width: 20vw;
  margin-top: 12rem;

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    margin: 1rem auto;
    margin-top: 5rem;
    width: 90%;

    & a {
      font-size: ${({ theme }) => theme.fontSize.small.mobile};
      & > :first-child {
        width: 1.5rem;
      }
    }
  }
`;

export const StyledPreTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.text};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.small.mobile};
  }
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large.desktop};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.large.mobile};
  }
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  color: ${({ theme }) => theme.color.accent};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  }
`;

export const StyledStoreLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-top: 1.2rem;
  transition: 0.3s ease-in-out;
  width: fit-content;
  letter-spacing: 0.5px;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    letter-spacing: 3px;
  }
  & > :first-child {
    width: 1.8rem;
    stroke-width: 3px;
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.small.mobile};
    & > :first-child {
      width: 1.5rem;
    }
  }
`;
