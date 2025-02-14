import styled from "styled-components"

export const StyledNavWrapper = styled.nav<{ $isHidden: boolean }>`
width:100%;
  padding: 0.5rem 2rem;
  position:fixed;
  top:${
  ({ $isHidden }) => ($isHidden ?
     "0px" :
      ({theme}) => theme.navbar.mainNavHeight.desktop)
  };
  right:0;
  left:0;
  z-index:900;
  background-color:${({ theme }) => theme.color.primary};
  transition: top 0.4s ease-in-out;
  height: ${({theme})=>theme.navbar.pagesNavHeight};

  `