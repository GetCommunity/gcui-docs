import type { CollapsableProps } from '@getcommunity/gcui/collapsable';
import { Collapsable } from '@getcommunity/gcui/collapsable';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps } from 'solid-js';
import {
  defaultColors,
  defaultCurves,
  defaultSizes,
  defaultStyleTypes,
} from '../constants';

type Story = StoryObj<CollapsableProps>;

export const Default: Story = { args: {} };

export const Fill: Story = { args: { styleType: 'fill' } };
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

export const SmallCurve: Story = { args: { curve: 'small' } };
export const MediumCurve: Story = { args: { curve: 'medium' } };
export const LargeCurve: Story = { args: { curve: 'large' } };
export const FullCurve: Story = { args: { curve: 'full' } };

export const Info: Story = { args: { color: 'info', styleType: 'fill' } };
export const Error: Story = { args: { color: 'error', styleType: 'fill' } };
export const Warning: Story = { args: { color: 'warning', styleType: 'fill' } };
export const Success: Story = { args: { color: 'success', styleType: 'fill' } };
export const Light: Story = { args: { color: 'light', styleType: 'fill' } };
export const Dark: Story = { args: { color: 'dark', styleType: 'fill' } };

export default {
  title: 'GCui/Collapsable',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ ...props }) => {
    return (
      <Collapsable {...props}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa laboriosam,
          doloribus dolores aspernatur, quo odio culpa illo eveniet totam voluptatum ut!
          Repellendus nemo beatae delectus fuga cupiditate? Nostrum, quis placeat?
        </p>
      </Collapsable>
    );
  },
  argTypes: {
    label: {
      control: 'text',
    },
    styleType: {
      control: 'radio',
      options: defaultStyleTypes,
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
    numberOfItems: {
      control: 'number',
    },
  },
  args: {
    label: 'Collapsable Dropdown',
    styleType: 'outline',
    color: 'default',
    size: 'default',
    curve: 'default',
  },
} as Meta<ComponentProps<typeof Collapsable>>;
