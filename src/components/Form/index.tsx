// eslint-disable-next-line no-unused-vars
import React, { FormHTMLAttributes } from 'react'
import * as S from './styles'

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

const Form: React.FC<Props> = ({ children, ...props }) => (
  <S.FormWrapper {...props}>{children}</S.FormWrapper>
)

export default Form
