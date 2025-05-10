import styled from "styled-components";

export const StyledProductDescription = styled.div`
width: 75%;
box-shadow:inset 0 6.4px 40px rgba(75, 35, 94, 0.1);
padding: 1rem 1.5rem;
font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
font-weight: ${({ theme }) => theme.fontWeight.medium}; 
`

