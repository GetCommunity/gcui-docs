import type { SeparatorProps } from '@getcommunity/gcui/separator';
import { Separator } from '@getcommunity/gcui/separator';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, Match, Switch } from 'solid-js';
import { defaultOrientations } from '../constants';

type Story = StoryObj<SeparatorProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of separators

export default {
  title: 'GCui/Separator',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ orientation, ...props }) => {
    return (
      <Switch>
        <Match when={orientation === 'horizontal'}>
          <div class='flex flex-col gap-2'>
            <p>Horizontal Item</p>
            <Separator {...props} orientation='horizontal' />
            <p>Horizontal Item</p>
            <Separator {...props} orientation='horizontal' />
            <p>Horizontal Item</p>
          </div>
        </Match>
        <Match when={orientation === 'vertical'}>
          <div class='mt-5 flex h-7 gap-4'>
            <p>Vertical Item</p>
            <Separator {...props} orientation='vertical' />
            <p>Vertical Item</p>
            <Separator {...props} orientation='vertical' />
            <p>Vertical Item</p>
          </div>
        </Match>
      </Switch>
    );
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: defaultOrientations,
    },
    align: {
      control: 'radio',
      options: ['start', 'center', 'end'],
    },
    size: {
      control: 'number',
      min: 1,
      max: 100,
    },
    weight: {
      control: 'number',
      min: 1,
      max: 100,
    },
    rounded: {
      control: 'boolean',
    },
  },
  args: {
    orientation: 'horizontal',
    align: 'center',
    size: 100,
    weight: 3,
    rounded: false,
  },
} as Meta<ComponentProps<typeof Separator>>;
