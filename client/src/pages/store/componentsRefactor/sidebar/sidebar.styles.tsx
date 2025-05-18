import styled from "styled-components";

export const StyledSidebarWrapper= styled.aside`
  display:flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 18%;
  margin:4rem 0 2rem;
  padding: 1rem  2rem;
  border-right: 0.12rem solid ${({theme})=>theme.color.accent};
`