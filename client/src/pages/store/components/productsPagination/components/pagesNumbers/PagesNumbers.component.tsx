import styled from "styled-components";
import NumberItem from "./NumberItem.component";

const StyledPagesNumbers = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  width: 8rem;
`;

const PagesNumbers = () => {
  const pagesNumbers = [1, 2, 3];
  return (
    <StyledPagesNumbers>
      {pagesNumbers.map((num) => (
        <NumberItem pageNumber={num} key={num} />
      ))}
    </StyledPagesNumbers>
  );
};

export default PagesNumbers;
