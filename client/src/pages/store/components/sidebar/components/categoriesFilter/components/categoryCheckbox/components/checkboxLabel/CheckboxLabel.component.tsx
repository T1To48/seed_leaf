import React from 'react'
import { StyledCheckboxLabel } from './checkboxLabel.styles'
import type { Categories } from 'src/types'
const CheckboxLabel = ({category}:{category:Categories}) => {
  return (
    <StyledCheckboxLabel $category={category} >{category}</StyledCheckboxLabel >
  )
}

export default CheckboxLabel