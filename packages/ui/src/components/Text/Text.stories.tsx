import { StoryFn, Meta } from '@storybook/react'
import { Text } from '.'

export default {
  component: Text,
} as Meta<typeof Text>

const Template: StoryFn<typeof Text> = args => <Text {...args}>A text</Text>

export const Default = Template.bind({})

export const Sizes: StoryFn<typeof Text> = () => (
  <>
    <Text size="sm">size=sm</Text>
    <Text size="md">size=md</Text>
    <Text size="lg">size=lg</Text>
    <Text size="xl">size=xl</Text>
    <Text size="2xl">size=2xl</Text>
  </>
)

export const Strong = Template.bind({})
Strong.args = {
  strong: true,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
}
