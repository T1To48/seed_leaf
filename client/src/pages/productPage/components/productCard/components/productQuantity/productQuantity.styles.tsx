import styled from "styled-components"

export const StyledQtyContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 75%;
border-radius:${({theme})=>theme.borderRadius.small};

box-shadow:inset 0 6.4px 40px rgba(75, 35, 94, 0.1);

padding: 1rem 1.5rem;
margin:3rem 0;
`