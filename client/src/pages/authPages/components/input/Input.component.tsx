import type { InputTypes } from "src/types"
import { StyledInputWrapper,StyledInput,StyledInputLabel } from "./input.styles"
import { EyeIcon } from "@heroicons/react/24/outline"

const Input = ({type,value,label,name,onChange}:InputTypes) => {
 
    
  return (
    <>
    <StyledInputWrapper>
        <StyledInput $isBlank={!value.length} name={name} type={type} value={value} onChange={onChange}/>
        <StyledInputLabel>{label}</StyledInputLabel>
        {type==="password" && <EyeIcon/>}
    </StyledInputWrapper>
    </>
  )
}

export default Input