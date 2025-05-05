import styled from "styled-components"
import { Link } from "react-router"

export const StyledRedirectLink  = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
margin-top:2rem;
font-size:${({theme})=>theme.fontSize.medium.desktop} ;
background: ${({theme})=>theme.color.accent};
width: 25%;
margin: 2rem auto;
color:${({theme})=>theme.color.secondary};
padding:1rem;
border-radius:${({theme})=>theme.borderRadius.small};
font-weight:${({theme})=>theme.fontWeight.semiBold};
letter-spacing: 1px;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size:${({theme})=>theme.fontSize.medium.mobile} ;
width: 65%;
margin-bottom:8rem;
}
`