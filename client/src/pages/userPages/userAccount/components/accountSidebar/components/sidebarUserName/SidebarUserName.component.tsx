import { StyledUserName } from "./sidebarUserName.styles"

const SidebarUserName = ({userName}:{userName:string}) => {
  return (
    <StyledUserName>Hello, {userName} </StyledUserName>
  )
}

export default SidebarUserName