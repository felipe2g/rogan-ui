import React from 'react'
import * as S from './styles'

interface Props {
  text: string
}

const Comment = ({ text }: Props) => {
  return <S.Comment>{text}</S.Comment>
}

export default Comment
