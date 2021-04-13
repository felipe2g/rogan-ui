import React from 'react'
import * as S from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: 'primary' | 'secondary'
  label: string
  size: 'large' | 'default' | 'small'
}

const Button: React.FC<ButtonProps> = ({ btnType, label, size, ...props }) => (
  <S.Wrapper btnType={btnType} size={size} {...props}>
    <span>{label}</span>
  </S.Wrapper>
)

export default Button
