import styled from "styled-components";
import { Link } from "react-router";

export const StyledProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 10/14;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0 6.4px 40px rgba(75, 35, 94, 0.2),
    0 3px 10px ${({ theme }) => theme.color.secondaryGreen(0.3)};
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: 0 3px 10px ${({ theme }) => theme.color.secondaryGreen(0.2)};
    & img {
      transform: scale(1.4);
    }
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 80%;
    aspect-ratio: 13 / 14;
    &:hover {
      box-shadow: 0 6.4px 40px rgba(75, 35, 94, 0.2),
        0 3px 10px ${({ theme }) => theme.color.secondaryGreen(0.3)};
      & img {
        transform: scale(1.3);
      }
    }
  }
`;
