import React from 'react'
import * as S from './styles'
// import { FiTag } from 'react-icons/fi'

interface Props {
  backgroundColor: string
  label: string
  fontColor: string
  icon: React.ReactNode
}

const Tag: React.FC<Props> = ({ backgroundColor, icon, label, fontColor }) => {
  return (
    <S.Wrapper
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      data-testid='tag-container'
    >
      {icon}
      <span>{label}</span>
    </S.Wrapper>
  )
}

export default Tag
