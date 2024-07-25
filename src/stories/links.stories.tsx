import type { LinkProps } from '@getcommunity/gcui/link';
import { Link } from '@getcommunity/gcui/link';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps } from 'solid-js';
import { defaultColors } from '../constants';

type Story = StoryObj<LinkProps>;

export const Default: Story = { args: {} };
export const Bold: Story = { args: { bold: true } };
export const Italic: Story = { args: { italic: true } };
export const BoldItalic: Story = { args: { bold: true, italic: true } };

// @ts-ignore-next-line
export const Underline: Story = { args: { lineType: 'underline' } };
// @ts-ignore-next-line
export const LineThrough: Story = { args: { lineType: 'lineThrough' } };
// @ts-ignore-next-line
export const Overline: Story = { args: { lineType: 'overline' } };

export const Info: Story = { args: { color: 'info' } };
export const Error: Story = { args: { color: 'error' } };
export const Warning: Story = { args: { color: 'warning' } };
export const Success: Story = { args: { color: 'success' } };
export const Light: Story = { args: { color: 'light' } };
export const Dark: Story = { args: { color: 'dark' } };

export default {
  title: 'GCui/Link',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ label, href, lineType, ...props }) => {
    return (
      <Link
        {...props}
        href={`#link`}
        underline={lineType === 'underline'}
        lineThrough={lineType === 'lineThrough'}
        overline={lineType === 'overline'}
      >
        {label}
      </Link>
    );
  },
  argTypes: {
    label: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: defaultColors,
    },
    disabled: {
      control: 'boolean',
    },
    italic: {
      control: 'boolean',
    },
    bold: {
      control: 'boolean',
    },
    lineType: {
      control: 'select',
      options: ['none', 'underline', 'lineThrough', 'overline'],
    },
  },
  args: {
    label: 'Link Text',
    disabled: false,
    italic: false,
    bold: false,
    lineType: 'none',
  },
} as Meta<ComponentProps<typeof Link>>;
