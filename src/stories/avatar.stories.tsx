import type { AvatarProps } from '@getcommunity/gcui/avatar';
import { AvatarImage } from '@getcommunity/gcui/avatar';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps } from 'solid-js';

type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {},
};

export const Image: Story = {
  args: {
    src: 'https://getcommunity.com/wp-content/uploads/2022/09/Joey-Grable_geo.jpg',
    alt: 'Joey Grable, Lead Developer @GetCommunity',
  },
};

export const Width50Pixels: Story = {
  args: {
    src: 'https://getcommunity.com/wp-content/uploads/2022/09/Joey-Grable_geo.jpg',
    alt: 'Joey Grable, Lead Developer @GetCommunity',
    width: 50,
  },
};

export const Width200Pixels: Story = {
  args: {
    src: 'https://getcommunity.com/wp-content/uploads/2022/09/Joey-Grable_geo.jpg',
    alt: 'Joey Grable, Lead Developer @GetCommunity',
    width: 200,
  },
};

export default {
  title: 'GCui/Avatar',
  tags: ['autodocs'],
  render: (props: AvatarProps) => <AvatarImage {...props} />,
  argTypes: {
    src: { control: 'text' },
    srcset: { control: 'text', nullable: true },
    alt: { control: 'text' },
    width: { control: 'number' },
    className: { control: 'text', nullable: true },
  },
  args: {
    src: 'https://www.gravatar.com/avatar/?d=identicon',
    alt: 'Avatar',
  },
} as Meta<ComponentProps<typeof AvatarImage>>;
