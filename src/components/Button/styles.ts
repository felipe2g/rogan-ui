import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

interface WrapperProps {
  btnType: string
  size: string
}

export const Wrapper = styled.button<WrapperProps>`
  ${(props) =>
    props.btnType === 'primary'
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: none;
          :hover {
            background-color: ${theme.colors.lightblue};
            transition: all 0.2s ease 0s;
          }
        `
      : null};

  ${(props) =>
    props.btnType === 'secondary'
      ? css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
        `
      : null};

  border-radius: ${theme.border.radius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          height: 30px;
          min-width: 72px;
          padding: 0 17px;
          span {
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 1px;
          }
        `
      case 'default':
        return css`
          height: 36px;
          min-width: 84px;
          padding: 0 23px;
          user-select: none;
          span {
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
          }
        `
      default:
        return css`
          height: 42px;
          padding: 0 29px;
          min-width: 102px;
          user-select: none;
          span {
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
          }
        `
    }
  }}
`
