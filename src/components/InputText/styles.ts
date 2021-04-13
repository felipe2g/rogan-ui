import styled from 'styled-components'

interface InputTextProps {
  color?: string
}

interface LabelProps {
  label?: boolean
}

export const InputTextWrapper = styled.div`
  margin: 16px 0;
`

export const Label = styled.label<LabelProps>`
  display: ${(props) => (props.label ? '' : 'none')};
`

export const InputText = styled.input<InputTextProps>`
  width: 100%;
  color: ${(props) => (props.color ? props.color : '')};

  padding: 0.75rem;

  font-size: 13.3333px;

  border: 1px solid ${(props) => (props.color ? props.color : '#121214')};
  border-radius: 4px;

  :focus {
    outline: none;
  }
`
