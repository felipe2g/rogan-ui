import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Comment from '.'

export default {
  title: 'Comment',
  component: Comment,
  args: {
    text: 'Default'
  }
} as Meta

export const Basic: Story = (args) => <Comment {...args} />

Basic.args = {
  text: 'Eu sou um comentário!'
}
