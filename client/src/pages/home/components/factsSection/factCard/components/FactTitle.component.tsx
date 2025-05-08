import { FCWithChildren } from "src/types"
import styled from "styled-components"

const StyledFactTitle=styled.h3`
  font-size:${({theme})=>theme.fontSize.large.desktop};
letter-spacing: 1px;
`
const FactTitle = ({children}:FCWithChildren) => {
  return (
    <StyledFactTitle>{children}</StyledFactTitle>
  )
}

export default FactTitle