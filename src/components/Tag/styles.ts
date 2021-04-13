import styled from 'styled-components'

interface TagProps {
  backgroundColor: string
  fontColor: string
}

export const Wrapper = styled.div<TagProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 36px;
  background-color: ${(props) => props.backgroundColor};

  span {
    color: ${(props) => props.fontColor};
    font-size: 13px;
    margin-left: 8px;
    user-select: none;
  }

  svg {
    color: ${(props) => props.fontColor};
  }
`
