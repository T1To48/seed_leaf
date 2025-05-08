import { FCWithChildren } from "src/types"
import styled from "styled-components"
const StyledFactText=styled.h5`
    font-size:${({theme})=>theme.fontSize.medium.desktop};
    font-weight:${({theme})=>theme.fontWeight.normal};
    
    padding: 0 3rem;
  
`

const FactText = ({children}:FCWithChildren) => {
  return (
    <StyledFactText>{children}</StyledFactText>
  )
}

export default FactText