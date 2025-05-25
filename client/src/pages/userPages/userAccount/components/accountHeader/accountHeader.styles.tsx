import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large.desktop};
`;
