import styled from "styled-components"

export const StyledImgWrapper = styled.section`
width: 40%;
box-shadow: 0 6.4px 40px rgba(75, 35, 94, 0.2);
border-radius:${({theme})=>theme.borderRadius.medium};

& img{
    border-radius:${({theme})=>theme.borderRadius.medium};
    object-fit: cover;
    width:100%;
    aspect-ratio: 12/12;
}
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
    border-radius:0;
}
`