import styled from "styled-components";
import stage1Icon from "src/assets/1_order_stage.png"
import stage2Icon from "src/assets/2_order_stage.png"
import stage3Icon from "src/assets/3_order_stage.png"
import stage4Icon from "src/assets/4_order_stage.png"
import stage5Icon from "src/assets/5_order_stage.png"
const StyledOrderStagesSection = styled.section`
  width: 100%;
  height: 30rem;
  
  /* background-color: greenyellow; */
/* padding: 0 2rem; */
  /* display: flex; */
  /* justify-content: center; */
    margin: 5rem 0;
  text-align:center;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: 100%;
  }
`;
const StyledSectionTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.xLarge.desktop};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color:${({theme})=>theme.color.text};

    letter-spacing: 1px;
    @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    letter-spacing: normal;
    padding: 0 1rem;
    font-size: ${({ theme }) => theme.fontSize.xLarge.mobile};
}
`
const StyledStagesContainer = styled.div`
display: flex;
margin-top: 8rem;
justify-content: space-evenly;
/* align-items: center; */
position: relative;

/* gap:14rem; */
& > :nth-child(2){
    & img{
        padding-top: 2rem;
    }
}
&::after{
    content:"";
    position: absolute;
    top:27%;
    left:15%;
    width:70vw;
    height:1rem;
    background-color: ${({theme}) => theme.color.accent};
/* box-shadow:0 0.5rem 1.2rem rgba(0, 0, 0, 0.20); */

}

@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
flex-direction: column;
align-items: center;
gap: 10rem;
/* margin-left: 5vw; */
/* left:20vw; */
width: 100%;
&::after{
top:0;
left:75%;
width:1rem;
height:100%;
}

}
`
const StyledStage = styled.div`
    /* width:calc(10%); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap:4rem;
    text-align: right;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    flex-direction: row-reverse;
    justify-content: space-around;
    /* align-items: start; */

    /* width: 35rem; */
width: 100%;

    /* margin-right:5rem; */
    /* margin:0 1rem; */

}

    `
const StyledStageCircle = styled.div`
/* padding: 0; */
/* margin: 0; */
background: white ;
width: 10.1rem;
height: 10.1rem;
border-radius: ${({theme})=>theme.borderRadius.circle};
z-index: 10;
position: relative;
box-shadow:inset 0 -0.5rem 1rem rgba(0, 0, 0, 0.30);
display: flex;
justify-content: center;
align-items: center;
&::before{
    content:"";
    position: absolute;
    top:-0.95rem;
    left:-0.95rem;
    width:12rem;
    height:12rem;
    z-index: 5;
    border :1rem solid ${({theme})=>theme.color.primary};
    /* background-color: red; */
border-radius: ${({theme})=>theme.borderRadius.circle};
box-shadow:0 0.5rem 1.2rem rgba(0, 0, 0, 0.30);

}



`
const StyledStageIcon = styled.img<{$size:number}>`
    width:${({$size})=>$size}rem;
padding: 1rem;

    /* height:8rem; */
`
const StyledStageTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSize.medium.desktop};
    font-weight:${({ theme }) => theme.fontWeight.medium} ;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    font-weight:${({ theme }) => theme.fontWeight.semiBold} ;

    /* margin-left:4rem; */
    width: 8rem;
    text-align: center;
    /* background: red; */
    /* white-space: pre-line; */
    
}
`
const OrderStages = () => {
  return (
    <StyledOrderStagesSection>

        <StyledSectionTitle>
            Enjoying microgreens made easy
        </StyledSectionTitle>
        <StyledStagesContainer>

            <StyledStage>
                <StyledStageCircle>
                    <StyledStageIcon $size={11} src={stage1Icon}/>
                 </StyledStageCircle>
                
                <StyledStageTitle>
                   Choose Products 
                </StyledStageTitle>
            </StyledStage>

            <StyledStage>
                <StyledStageCircle>
                    <StyledStageIcon $size={8} src={stage2Icon}/>
                 </StyledStageCircle>
                
                <StyledStageTitle>
                   Checkout
                </StyledStageTitle>
            </StyledStage>

            <StyledStage>
                <StyledStageCircle>
                    <StyledStageIcon $size={10} src={stage3Icon}/>
                 </StyledStageCircle>
                
                <StyledStageTitle>
                   Order Packaging
                </StyledStageTitle>
            </StyledStage>

            <StyledStage>
                <StyledStageCircle>
                    <StyledStageIcon $size={10} src={stage4Icon}/>
                 </StyledStageCircle>
                
                <StyledStageTitle>
                   Delivery
                </StyledStageTitle>
            </StyledStage>

            <StyledStage>
                <StyledStageCircle>
                    <StyledStageIcon $size={8} src={stage5Icon}/>
                 </StyledStageCircle>
                
                <StyledStageTitle>
                   Bon Appetit!
                </StyledStageTitle>
            </StyledStage>

        </StyledStagesContainer>
    </StyledOrderStagesSection>
  )
}

export default OrderStages