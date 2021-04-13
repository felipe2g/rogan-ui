import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Primary: Story = (args) => (
  <Button
    btnType='primary'
    size='default'
    label='Botão'
    onClick={() => console.log('clicou')}
    {...args}
  />
)

export const Secondary: Story = (args) => (
  <Button btnType='secondary' size='default' label='Botão' {...args} />
)

Primary.args = {
  btnType: 'primary',
  label: 'Click me',
  size: 'default'
}

Secondary.args = {
  btnType: 'secondary',
  label: 'Click me',
  size: 'default'
}
