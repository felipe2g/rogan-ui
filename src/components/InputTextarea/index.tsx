// eslint-disable-next-line no-unused-vars
import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  color?: string
  placeholder: string
  label?: boolean
}

const InputTextarea: React.FC<Props> = ({
  name,
  label,
  color,
  placeholder
}) => {
  return (
    <S.TextareaWrapper>
      <S.Label label={label} htmlFor={name}>
        {name}
      </S.Label>
      <S.InputTextarea name={name} color={color} placeholder={placeholder} />
    </S.TextareaWrapper>
  )
}

export default InputTextarea
