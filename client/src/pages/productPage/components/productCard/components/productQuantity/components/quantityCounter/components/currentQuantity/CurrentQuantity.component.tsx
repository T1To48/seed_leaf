import styled from "styled-components";

const StyledCurrentQty = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin: 0 1rem;
`;
const CurrentQuantity = ({ currentQty }: { currentQty: number }) => {
  return <StyledCurrentQty>{currentQty}</StyledCurrentQty>;
};

export default CurrentQuantity;
