import { Button } from '@getcommunity/gcui/button';
import type { ThemeElementColor } from '@getcommunity/gcui/core';
import type { ToastProps } from '@getcommunity/gcui/toast';
import { toast, ToastPortal } from '@getcommunity/gcui/toast';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps } from 'solid-js';
import { defaultColors } from '../constants';

type Story = StoryObj<ToastProps>;

export const Default: Story = { args: {} };
export const Info: Story = { args: { color: 'info' } };
export const Error: Story = { args: { color: 'error' } };
export const Warning: Story = { args: { color: 'warning' } };
export const Success: Story = { args: { color: 'success' } };
export const Light: Story = { args: { color: 'light' } };
export const Dark: Story = { args: { color: 'dark' } };

export default {
  title: 'GCui/Toast',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ color }) => {
    const showToast = (color?: ThemeElementColor) => {
      switch (color) {
        case 'info':
          toast.info('Info Toast', 'This is an info themed toast message.');
          break;
        case 'error':
          toast.error('Error Toast', 'This is an error themed toast message.');
          break;
        case 'warning':
          toast.warning('Warning Toast', 'This is a warning themed toast message.');
          break;
        case 'success':
          toast.success('Success Toast', 'This is a success themed toast message.');
          break;
        case 'light':
          toast.show('Light Toast', 'This is a light themed toast message.', {
            color: 'light',
          });
          break;
        case 'dark':
          toast.show('Dark Toast', 'This is a dark themed toast message.', {
            color: 'dark',
          });
          break;
        case undefined:
          toast.show('Default Toast', 'This is a default toast message.');
          break;
        default:
          toast.show('Default Toast', 'This is a default toast message.');
          break;
      }
    };
    return (
      <>
        <Button
          styleType='fill'
          color={color}
          tabIndex={0}
          onClick={() => showToast(color)}
        >
          Show Toast
        </Button>
        <ToastPortal placement='bottom-right' />
      </>
    );
  },
  argTypes: {
    color: {
      control: 'select',
      options: defaultColors,
    },
  },
  args: {
    color: undefined,
  },
} as Meta<ComponentProps<typeof ToastPortal>>;
