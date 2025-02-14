import { ChevronRightIcon } from "@heroicons/react/24/outline"
import styled from "styled-components"

const StyledMenuWrapper = styled.div<{$isOpen:boolean}>`
/* display: none; */
position: fixed;
z-index: 1000;
top:${({theme}) => theme.navbar.mainNavHeight.mobile};
background: ${({theme})=>theme.color.primary};
left:0;
padding: 5rem;
width: 100%;
height:calc(100% - ${({theme}) => theme.navbar.mainNavHeight.mobile}) ;
transform:${({$isOpen})=>($isOpen?"translateX(0)":"translateX(-100%)")};
transition:  transform 0.5s ease-in-out;
`
const StyledMenuList=styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 6rem;
font-size:${({theme})=>theme.fontSize.large.mobile};
`
const StyledManuItem=styled.li`
display: flex;
justify-content: space-between;
text-align: left;
width: 100%;
`
const StyledItemLink=styled.a`
color:${({theme})=>theme.color.secondary};
letter-spacing: 2px;
font-weight:${({theme})=>theme.fontWeight.semiBold};
`
const StyledItemIcon=styled.div`
    width:2.5rem;
    color:${({theme})=>theme.color.secondary};
`
const HamburgerManu = ({isOpen}:{isOpen:boolean}) => {
  return (
    <StyledMenuWrapper $isOpen={isOpen}>
        <StyledMenuList>

            <StyledManuItem>
                <StyledItemLink href="google.com">
                    HOME
                </StyledItemLink>
                <StyledItemIcon>
                    <ChevronRightIcon/>
                </StyledItemIcon>
            </StyledManuItem>

            <StyledManuItem>
                <StyledItemLink href="google.com">
                    STORE
                </StyledItemLink>
                <StyledItemIcon>
                    <ChevronRightIcon/>
                </StyledItemIcon>
            </StyledManuItem>

            <StyledManuItem>
                <StyledItemLink href="google.com">
                    CONCEPT
                </StyledItemLink>
                <StyledItemIcon>
                    <ChevronRightIcon/>
                </StyledItemIcon>
            </StyledManuItem>

            <StyledManuItem>
                <StyledItemLink href="google.com">
                    GALLERY
                </StyledItemLink>
                <StyledItemIcon>
                    <ChevronRightIcon/>
                </StyledItemIcon>
            </StyledManuItem>

        </StyledMenuList>
        
    </StyledMenuWrapper>
 )
}

export default HamburgerManu