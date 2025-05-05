import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const StyledFormTitle = styled.h1`
  width: 30%;
  text-align: center;
  margin: 4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.xxLarge.desktop};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge.mobile};
    width: 40%;
  }
`;

export const StyledForm = styled.form`
width:40%;
text-align:center;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width:80%;
}
`