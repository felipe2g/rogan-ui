import React from 'react'
import * as S from './styles'

interface Props {
  text: string
}

const Comment: React.FC<Props> = ({ text }) => {
  return (
    <S.Comment>
      <span>{text}</span>
    </S.Comment>
  )
}

export default Comment
