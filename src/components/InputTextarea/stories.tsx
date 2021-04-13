import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Story, Meta } from '@storybook/react/types-6-0'
import InputTextarea from '.'

export default {
  title: 'InputTextarea',
  component: InputTextarea,
  args: {
    name: 'Nome',
    color: '#121214',
    placeholder: 'Digite aqui...',
    label: true
  }
} as Meta

export const Basic: Story = (args) => {
  return (
    <div style={{ width: '100%' }}>
      <InputTextarea
        name={args.name}
        color={args.color}
        placeholder={args.placeholder}
        label={args.label}
      />
    </div>
  )
}

Basic.args = {
  name: 'Nome',
  color: '#121214',
  placeholder: 'Digite aqui...',
  label: true
}
