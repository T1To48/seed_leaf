import { Link} from "react-router"
import styled from "styled-components"

const StyledBreadCrumbs = styled.div`
width: fit-content;
    margin-left: 12rem;
    margin-bottom: 2.5rem;
    font-size: ${({theme})=>theme.fontSize.small.desktop};
    color:${({theme})=>theme.color.text};
    & a{
    color:${({theme})=>theme.color.text};
    &:hover{
        text-decoration: underline;
    }
    }
    & a:last-child{
        display: inline-block;
        margin:0 0.4rem;
       &::first-letter{

           text-transform:uppercase;
       }
    }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    position: relative;
    z-index: 950;
    top: 10.5rem;
    left:2.5rem;
    margin:0;
  }

`

const ProductBreadCrumbs = () => {
   
  return (
    <StyledBreadCrumbs>
        <Link to="/store">Store </Link> / 
                <Link to={"/store/microgreens"}> microgreens </Link>
         / Amaranth
        </StyledBreadCrumbs>
  )
}

export default ProductBreadCrumbs