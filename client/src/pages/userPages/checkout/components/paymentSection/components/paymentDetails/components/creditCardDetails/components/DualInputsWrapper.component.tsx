import type { FCWithChildren } from "src/types";
import styled from "styled-components";

const StyledDualInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  & > div {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const DualInputsWrapper = ({ children }: FCWithChildren) => {
  return <StyledDualInputsWrapper>{children}</StyledDualInputsWrapper>;
};

export default DualInputsWrapper;
