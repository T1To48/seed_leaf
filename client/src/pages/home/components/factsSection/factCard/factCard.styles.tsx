import styled from "styled-components";

export const StyledFactWrapper=styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align:center;
gap:1rem;
width: 30rem;
aspect-ratio: 16/16;
padding: 1rem;
padding-top: 2rem;
color:${({theme})=>theme.color.text};
background-color: rgba(255,255,255,0.9);
border-radius:${({theme})=>theme.borderRadius.small};
box-shadow:0 0.5rem 2rem rgba(0, 0, 0, 0.5);
`