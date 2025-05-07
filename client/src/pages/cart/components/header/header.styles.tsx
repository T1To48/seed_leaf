import styled from "styled-components";
import { Link } from "react-router";

export const StyledHeader = styled.header`
display: flex;
align-items: end;
justify-content: space-between;
padding: 0 3rem;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
display: block;
}
`;

export const StyledCartTitle = styled.h1`
font-size: ${({theme})=>theme.fontSize.giant};
color: ${({theme})=>theme.color.text};
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
font-size: ${({theme})=>theme.fontSize.xxLarge.mobile};
text-align:left;
margin-bottom: 1rem;
}
`

export const StyledLink = styled(Link)`
font-size: ${({theme})=>theme.fontSize.medium.desktop};
font-weight: ${({theme})=>theme.fontWeight.medium};
text-decoration:underline;
letter-spacing: 1px;
color: ${({theme})=>theme.color.text};
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
display: block;
font-size: ${({theme})=>theme.fontSize.medium.mobile};
letter-spacing: normal;
text-align:right;
}
`;