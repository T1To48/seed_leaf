import styled from "styled-components";
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
const NumberItem = ({ pageNumber }: { pageNumber: number }) => {
  return <StyledPageNumberItem>{pageNumber}</StyledPageNumberItem>;
};

export default NumberItem;
