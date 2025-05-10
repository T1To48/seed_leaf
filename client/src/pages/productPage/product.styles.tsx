import styled from "styled-components"

export const StyledProductWrapper = styled.div`
    display:flex;
    align-items: start;
    justify-content: center;
    gap:10rem;
width:100%;
/* background-color: red; */
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
flex-direction: column;
align-items: center;
gap: 5rem;
}
`