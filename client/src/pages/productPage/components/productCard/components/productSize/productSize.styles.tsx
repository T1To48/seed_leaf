import styled from "styled-components";

export const StyledProductSize = styled.div`
  background: ${({ theme }) => theme.color.secondaryGreen(0.2)};
  width: 75%;
  height: 5rem;
  padding: 1rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
