import styled from "styled-components";

export const StyledNavLogo=styled.a`
display:flex;
align-items: center;
  cursor: pointer;
  & >:first-child{
    width:6rem;
    margin-right: -3px;
  }
  & >:last-child{
    width: 7rem;
}
@media (max-width:${({theme})=>theme.siteMaxWidth.mobile}){
  margin-left: 1rem;
  & >:first-child{
    width:0rem;
  }
  & >:last-child{
    width: 6.5rem;
}
}
`