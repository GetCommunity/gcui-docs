import type { ProgressBarProps } from '@getcommunity/gcui/progress';
import { ProgressBar } from '@getcommunity/gcui/progress';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps } from 'solid-js';
import { defaultColors, defaultCurves, defaultSizes } from '../constants';

type Story = StoryObj<ProgressBarProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of progress bars

export default {
  title: 'GCui/ProgressBar',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: (props) => {
    return <ProgressBar {...props} />;
  },
  argTypes: {
    value: {
      control: 'number',
      min: 0,
      max: 100,
    },
    color: {
      control: 'select',
      options: defaultColors,
    },
    size: {
      control: 'select',
      options: defaultSizes,
    },
    curve: {
      control: 'select',
      options: defaultCurves,
    },
  },
  args: {
    value: 50,
    label: 'Loading...',
    color: 'default',
    size: 'default',
    curve: 'default',
  },
} as Meta<ComponentProps<typeof ProgressBar>>;
