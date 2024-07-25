import { Button } from '@getcommunity/gcui/button';
import type { PopoverProps } from '@getcommunity/gcui/popover';
import { Popover } from '@getcommunity/gcui/popover';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createSignal } from 'solid-js';
import { defaultColors, defaultCurves, defaultSizes } from '../constants';

type Story = StoryObj<PopoverProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of Popovers

export default {
  title: 'GCui/Popovers',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ content, ...props }) => {
    const [openPopover, setOpenPopover] = createSignal(false);
    return (
      <>
        <Popover
          {...props}
          open={openPopover()}
          onOpenChange={setOpenPopover}
          trigger={
            <Button styleType='fill' color='info' tabIndex={0}>
              Trigger Popover
            </Button>
          }
        >
          {content}
        </Popover>
      </>
    );
  },
  argTypes: {
    label: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
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
    label: 'Default Popover',
    title: 'Default Popover Popup Title Text',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab voluptas doloribus ipsum dolorum iste quia delectus nemo itaque, inventore ducimus perspiciatis soluta ratione sed nostrum molestiae aut minima, quasi quisquam.',
    color: 'default',
    size: 'default',
    curve: 'default',
  },
} as Meta<ComponentProps<typeof Popover>>;
