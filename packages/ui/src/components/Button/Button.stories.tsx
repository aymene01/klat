import { StoryFn, Meta } from '@storybook/react'
import { Button } from '.'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default {
  component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = args => <Button {...args}>A button</Button>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const LeftIcon = Template.bind({})
LeftIcon.args = {
  leftIcon: <ChevronDownIcon className="h-4 w-4" />,
}

export const RightIcon = Template.bind({})
RightIcon.args = {
  rightIcon: <ChevronDownIcon className="h-4 w-4" />,
}

export const Center = Template.bind({})
Center.args = {
  center: true,
}

export const Href = Template.bind({})
Href.args = {
  href: 'https://google.com',
}
