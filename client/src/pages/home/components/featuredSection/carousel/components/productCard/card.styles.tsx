import styled from "styled-components";

export const StyledProductCard = styled.div<{ $translateValue: number }>`
overflow: hidden;
cursor: pointer;

display: flex;
flex-direction: column;
flex: 0 0 30%;
align-items: center;
text-align: center;
width:100%;
/* height: 100%; */
aspect-ratio: 10/14;
transform: translateX(calc(${({ $translateValue }) => $translateValue}% + ${({ $translateValue }) => $translateValue === 0 ? 0 : $translateValue / 100 * 3 + 0.5}rem) );
transition: transform 0.5s ease-in-out;
box-shadow:0 0.5rem 1.2rem rgba(0, 0, 0, 0.10);
border-radius: ${({ theme }) => theme.borderRadius.small};
&:hover{
  & img{
    transform: translateY(-15px) scale(1.2);
  }
  & h2::before{
    width: 90%;
  }
}

@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
flex: 0 0 calc(50% - 2rem);
/* flex: 0 0 30vw; */
}
`

