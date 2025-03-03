import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router"
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
width: 100%;
`
const StyledMenuItemWrapper=styled(NavLink)`
    display: flex;
justify-content: space-between;
text-align: left;
`

const StyledPageName=styled.p`
color:${({theme})=>theme.color.secondary};
letter-spacing: 2px;
font-weight:${({theme})=>theme.fontWeight.semiBold};
`
const StyledItemIcon=styled.div`
    width:2.5rem;
    color:${({theme})=>theme.color.secondary};
`
const HamburgerManu = ({isOpen,handleClose}:{isOpen:boolean,handleClose:(event:React.MouseEvent<HTMLAnchorElement>)=>void}) => {
  return (
    <StyledMenuWrapper $isOpen={isOpen}>
        <StyledMenuList>

            <StyledManuItem>
                <StyledMenuItemWrapper to="/" onClick={handleClose}>

                    <StyledPageName >
                        HOME
                    </StyledPageName>

                    <StyledItemIcon>
                        <ChevronRightIcon/>
                    </StyledItemIcon>

                </StyledMenuItemWrapper>
            </StyledManuItem>

            <StyledManuItem>
                <StyledMenuItemWrapper to="/store" onClick={handleClose}>

                    <StyledPageName >
                        STORE
                    </StyledPageName>
                    <StyledItemIcon>
                        <ChevronRightIcon/>
                    </StyledItemIcon>
                </StyledMenuItemWrapper>

            </StyledManuItem>

            <StyledManuItem>
            <StyledMenuItemWrapper to="/store" onClick={handleClose}>

                <StyledPageName >
                    CONCEPT
                </StyledPageName>
                <StyledItemIcon>
                    <ChevronRightIcon/>
                </StyledItemIcon>
                </StyledMenuItemWrapper>

            </StyledManuItem>

            <StyledManuItem>
            <StyledMenuItemWrapper to="/store" onClick={handleClose}>

                <StyledPageName >
                    GALLERY
                </StyledPageName>
                <StyledItemIcon>
                    <ChevronRightIcon/>
                </StyledItemIcon>
                </StyledMenuItemWrapper>

            </StyledManuItem>

        </StyledMenuList>
        
    </StyledMenuWrapper>
 )
}

export default HamburgerManu