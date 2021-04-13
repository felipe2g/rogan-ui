import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Tag from '.'

export default {
  title: 'Tag',
  component: Tag,
  args: {
    label: 'Default',
    backgroundColor: 'red',
    icon: null,
    fontColor: 'blue'
  }
} as Meta

export const Basic: Story = (args) => <Tag {...args} />

Basic.args = {
  label: 'Eu sou um comentário!'
}
