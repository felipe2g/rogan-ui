import styled from 'styled-components'

interface InputTextareaProps {
  color?: string
}

interface LabelProps {
  label?: boolean
}

export const TextareaWrapper = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label<LabelProps>`
  display: ${(props) => (props.label ? '' : 'none')};
`

export const InputTextarea = styled.textarea<InputTextareaProps>`
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
