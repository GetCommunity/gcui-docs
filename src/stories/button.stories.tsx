import type { ButtonProps } from '@getcommunity/gcui/button';
import { Button } from '@getcommunity/gcui/button';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps } from 'solid-js';
import {
  defaultColors,
  defaultCurves,
  defaultSizes,
  defaultStyleTypes,
} from '../constants';

type Story = StoryObj<ButtonProps>;

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
  title: 'GCui/Button',
  tags: ['autodocs'],
  render: ({ label, ...props }) => {
    return <Button {...props}>{label}</Button>;
  },
  argTypes: {
    label: {
      control: 'text',
    },
    styleType: {
      control: 'select',
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
  },
  args: {
    label: 'Button Text',
    styleType: 'outline',
    color: 'default',
    size: 'default',
    curve: 'default',
  },
} as Meta<ComponentProps<typeof Button>>;
