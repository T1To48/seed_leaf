import type { IsMobileBool } from "src/types";
import styled from "styled-components"
import { PlusIcon,MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import AmaranthImg from "src/assets/Amaranth.jpg"
const StyledTableRow = styled.tr`
height: 10rem;
border-bottom: 1px solid #ddd;
& td:first-child{
    width:40%;
    padding-bottom: 2rem;

}
& td:nth-child(2){
    width:30%;


}
& td:last-child{
    width:15%;

}
`

const StyledProduct=styled.div`
display:flex;
overflow: hidden;
height: 100%;
& img{
 margin-top: -5rem;
 height:15rem;

 object-fit: cover;
 aspect-ratio: 1;
}
& >div{
    display:flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    text-align:center;
    padding: 0rem 0 0 3rem;
    & h4{
        font-size:${({theme})=>theme.fontSize.medium.desktop}
    }
    & p{
        font-size:${({theme})=>theme.fontSize.small.desktop}
    }
}
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
& >div{
    padding:2rem 0 0 0;
    margin-left:0rem ;
    width: 100%;
    
}
& img{
    height:12rem;
    margin-top: -2rem;

}
}

`

const StyledQuantity = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
/* width: 75%; */
border-radius:${({theme})=>theme.borderRadius.small};

/* box-shadow:inset 0 6.4px 40px rgba(75, 35, 94, 0.1); */

padding: 1rem 1.5rem;
margin:3rem 0;
margin-left: 3rem;
& >svg{
    width:2rem;
     stroke-width:2px;
     color:${({theme})=>theme.color.accent};
     transition:0.2s ease-out;
    cursor: pointer;
     &:hover{
     color:${({theme})=>theme.color.hover};

     }
}
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    padding:0;
margin-left: 2rem;
margin-top:2rem;
    margin-bottom: 0;
}

`

const StyledQtyCounter = styled.div`
    display: flex;
align-items: center;
`
const StyledQtyBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0.7rem ;
border-radius:${({theme})=>theme.borderRadius.circle};
    aspect-ratio: 1;
    background:${({theme})=>theme.color.primary};
    transition: 0.2s ease-out;

    & svg{
     color:${({theme})=>theme.color.secondary};
    width:1.1rem;
     stroke-width:4px;
    }
    &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
`
const StyledCurrentQty = styled.p`
    font-size:${({theme})=>theme.fontSize.medium.desktop};
    font-weight:${({theme})=>theme.fontWeight.medium};
    margin:0 1rem;
`
const StyledSubTotal=styled.div`
text-align: right;
font-size:${({theme})=>theme.fontSize.medium.desktop};
font-weight:${({theme})=>theme.fontWeight.normal};
    @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
font-size:${({theme})=>theme.fontSize.medium.mobile};
text-align: center;
    
    }
`
const ProductRow = ({isMobile}:{isMobile:IsMobileBool}) => {
  return (
    <StyledTableRow>
               <td>
                    <StyledProduct>
                        <img src={AmaranthImg}/>
                        <div>
                            <h4>Amaranth</h4>
                            <p>&#8364;10.50</p>
                    {isMobile && 
<StyledQuantity>
<StyledQtyCounter>

<StyledQtyBtn><MinusIcon/></StyledQtyBtn>
<StyledCurrentQty>1</StyledCurrentQty>
<StyledQtyBtn><PlusIcon/></StyledQtyBtn>
</StyledQtyCounter>
 <TrashIcon/>
</StyledQuantity>
  }
                        </div>
                    </StyledProduct>
                </td> 
              {!isMobile &&
<td>
<StyledQuantity>
<StyledQtyCounter>

<StyledQtyBtn><MinusIcon/></StyledQtyBtn>
<StyledCurrentQty>1</StyledCurrentQty>
<StyledQtyBtn><PlusIcon/></StyledQtyBtn>
</StyledQtyCounter>
 <TrashIcon/>
</StyledQuantity>
 </td> 
              } 
               <td><StyledSubTotal>&#8364;10.50</StyledSubTotal></td> 
     </StyledTableRow>
  )
}

export default ProductRow