import styled from "styled-components"
import { EyeIcon,
    // EyeSlashIcon
 } from "@heroicons/react/24/outline"
import { Link } from "react-router"
const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 22rem auto 5rem;
  min-height: 55vh;
  
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
  margin-top:15rem;
  min-height: 60vh;

  }
`
const StyledFormWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width:100%;
margin:0 auto;

`
const StyledFormTitle = styled.h1`
width:30%;
text-align:center;
margin: 4rem;
padding-bottom:1rem;
border-bottom:1px solid ${({theme})=>theme.color.primary};
font-size:${({theme})=>theme.fontSize.xxLarge.desktop};
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size:${({theme})=>theme.fontSize.xxLarge.mobile};
    width:40%;

}
`
const StyledForm = styled.form`
width:40%;
text-align:center;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width:80%;

}
`
const StyledInputWrapper = styled.div`
position:relative;
margin-bottom: 4rem;

& svg{
    position:absolute;
    top:1.3rem;
    right:1rem;
    width:2.2rem;
    stroke-width: 2px;
    color:${({theme})=>theme.color.accent};
}
`

const StyledInput = styled.input`
position:relative;
background:none;
z-index:10;
width:100%;
padding: 1rem;
border-radius:${({theme})=>theme.borderRadius.small};
outline:none;
border:1px solid ${({theme})=>theme.color.accent};
font-size:${({theme})=>theme.fontSize.medium.desktop} ;

&:focus ~ label{
top:-0.8rem;
left:1.4rem;
font-size:${({theme})=>theme.fontSize.xSmall.desktop} ;
z-index:10;
}

`
const StyledInputLabel = styled.label`
position:absolute;
z-index:5;
transition:  0.2s ease-in;

top:1.3rem;
left:1rem;
background:${({theme})=>theme.color.background} ;
font-size:${({theme})=>theme.fontSize.small.desktop} ;
`
const StyledBtn=styled.button`
width:30%;
padding: 1rem;
font-size:${({theme})=>theme.fontSize.medium.desktop} ;
border-radius:${({theme})=>theme.borderRadius.small};

border:none;
background:${({theme})=>theme.color.primary};
color:${({theme})=>theme.color.secondary};
font-weight:${({theme})=>theme.fontWeight.semiBold};
transition: 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width:70%;

}
`
const StyledLine = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top:6rem;
& p{
    margin: 0 1rem;
font-size:${({theme})=>theme.fontSize.xSmall.desktop} ;

}
& span{
    height: 1px;
    width: calc(15% - 4rem);
    background-color: ${({theme})=>theme.color.primary};
}
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    & p{
font-size:${({theme})=>theme.fontSize.xSmall.mobile} ;
}
    & span{
    height: 1px;
    width: calc(30% - 4rem);
    background-color: ${({theme})=>theme.color.primary};
}

}
`
const StyledRegisterLink  = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
margin-top:2rem;
font-size:${({theme})=>theme.fontSize.medium.desktop} ;
background: ${({theme})=>theme.color.accent};
width: 25%;
margin: 2rem auto;
color:${({theme})=>theme.color.secondary};
padding:1rem;
border-radius:${({theme})=>theme.borderRadius.small};
font-weight:${({theme})=>theme.fontWeight.semiBold};
letter-spacing: 1px;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size:${({theme})=>theme.fontSize.medium.mobile} ;
width: 65%;
margin-bottom:8rem;
}
`
const Login = () => {
  return (
    <StyledPageWrapper>
        <StyledFormWrapper>
            <StyledFormTitle>LOGIN</StyledFormTitle>
            <StyledForm>
                <StyledInputWrapper>

                <StyledInput />
                <StyledInputLabel>Email</StyledInputLabel>
                </StyledInputWrapper>

                 <StyledInputWrapper>

                <StyledInput/>
                <StyledInputLabel>Password</StyledInputLabel>
                <EyeIcon/>
                </StyledInputWrapper>
            <StyledBtn>Login</StyledBtn>
            </StyledForm>
        </StyledFormWrapper>
        <StyledLine>
            <span></span><p>New Customer?</p><span></span>
        </StyledLine>
        <StyledRegisterLink to="/register">Register Now!</StyledRegisterLink>
    </StyledPageWrapper>
  )
}

export default Login
