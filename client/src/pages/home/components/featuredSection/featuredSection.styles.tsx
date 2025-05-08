import styled from "styled-components"

export const StyledFeaturedSection = styled.section`
display: flex;
/* align-items: center; */
justify-content: center;
gap: 3vw;
padding: 0 2rem;
margin: 5rem 0;
width: 100%;
@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
margin-top: 0rem;
gap: 0px;
display: block;
}
`