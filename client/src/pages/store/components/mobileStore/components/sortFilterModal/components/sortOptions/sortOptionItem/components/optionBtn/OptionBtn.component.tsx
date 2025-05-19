import styled from "styled-components";

const StyledOptionBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0.5rem;
  height: 2.5rem;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.color.accent};
  opacity: 0.6;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  transition: 0.2s linear;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    padding: 0.55rem;
    border: 1px solid ${({ theme }) => theme.color.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    opacity: 0;
    background: black;
  }
`;
const OptionBtn = () => {
  return (
    <StyledOptionBtn>
      <span></span>
    </StyledOptionBtn>
  );
};

export default OptionBtn;
