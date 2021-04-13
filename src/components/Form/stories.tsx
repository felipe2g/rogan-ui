import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Story, Meta } from '@storybook/react/types-6-0'
import Form from '.'
import InputText from '../InputText'
import InputTextarea from '../InputTextarea'

export default {
  title: 'Form',
  component: Form,
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
} as Meta

export const Basic: Story = (args) => (
  <Form {...args}>
    <InputText name='Nome' placeholder='Digite aqui seu nome...' label />
    <InputTextarea
      name='Descrição'
      placeholder='Digite aqui a descrição...'
      label
    />
  </Form>
)
