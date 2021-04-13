// eslint-disable-next-line no-unused-vars
import React, { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  color?: string
  placeholder: string
  label?: boolean
}

const InputText: React.FC<Props> = ({ name, label, color, placeholder }) => {
  console.log('label input text', label)

  return (
    <S.InputTextWrapper>
      <S.Label label={label} htmlFor={name}>
        {name}
      </S.Label>
      <S.InputText
        name={name}
        type='text'
        color={color}
        placeholder={placeholder}
      />
    </S.InputTextWrapper>
  )
}

export default InputText
