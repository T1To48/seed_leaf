import styled from "styled-components";

export const StyledAddressNotice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.secondaryGreen(0.1)};
  height: 8rem;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  box-shadow: 0 8px 30px ${({ theme }) => theme.color.secondaryGreen(0.1)},
    0 -8px 30px ${({ theme }) => theme.color.secondaryGreen(0.1)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  & p {
    text-align: center;
    width: 75%;
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    margin-bottom: 4rem;
    height: 10rem;
  }
`;
