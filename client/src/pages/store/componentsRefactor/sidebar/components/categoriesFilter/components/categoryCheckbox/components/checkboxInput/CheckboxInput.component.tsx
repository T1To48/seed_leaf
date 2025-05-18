import type { Categories } from 'src/types'
import { StyledCheckbox } from './checkboxInput.styles'

const CheckboxInput = ({category}:{category:Categories}) => {
  return (
    <StyledCheckbox $category={category}/>
  )
}

export default CheckboxInput