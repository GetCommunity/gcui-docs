import type { AlertMessageProps } from '@getcommunity/gcui/alert';
import { AlertMessage } from '@getcommunity/gcui/alert';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps } from 'solid-js';
import { defaultColors } from '../constants';

type Story = StoryObj<AlertMessageProps>;

export const Default: Story = {
  args: {
    message: 'Default Alert Message',
  },
};
export const Info: Story = {
  args: {
    message: 'Info Alert Message',
    color: 'info',
  },
};
export const Error: Story = {
  args: {
    message: 'Error Alert Message',
    color: 'error',
  },
};
export const Warning: Story = {
  args: {
    message: 'Warning Alert Message',
    color: 'warning',
  },
};
export const Success: Story = {
  args: {
    message: 'Success Alert Message',
    color: 'success',
  },
};
export const Light: Story = {
  args: {
    message: 'Light Alert Message',
    color: 'light',
  },
};
export const Dark: Story = {
  args: {
    message: 'Dark Alert Message',
    color: 'dark',
  },
};

export default {
  title: 'GCui/AlertMessage',
  tags: ['autodocs'],
  render: (props: AlertMessageProps) => <AlertMessage {...props} />,
  argTypes: {
    message: { control: 'text' },
    color: {
      control: 'select',
      options: defaultColors,
    },
    closeable: { control: 'boolean' },
    timeout: { name: 'timeout (ms)', control: 'number' },
  },
  args: {
    message: 'Alert Message',
    color: 'default',
    closeable: false,
    timeout: 0,
  },
} as Meta<ComponentProps<typeof AlertMessage>>;
