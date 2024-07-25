import type { ButtonGroupProps } from '@getcommunity/gcui/button';
import { ButtonGroup } from '@getcommunity/gcui/button';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createMemo } from 'solid-js';
import {
  defaultColors,
  defaultCurves,
  defaultSizes,
  defaultStyleTypes,
} from '../constants';

type Story = StoryObj<ButtonGroupProps>;

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
  title: 'GCui/ButtonGroup',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ numberOfItems, ...props }) => {
    const items = createMemo(() => {
      let listNum = [...Array((numberOfItems as number) ?? (1 as number)).keys()];
      return listNum.map((i) => ({
        value: `item-${i + i}`,
        children: `Item ${i + 1}`,
        onClick: () => console.log(`#item-${i + 1}`),
      }));
    });
    const defaultItem = createMemo(() => {
      return items()[0].value;
    });
    return <ButtonGroup {...props} items={items()} defaultValue={defaultItem()} />;
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
    label: 'Button Text',
    styleType: 'outline',
    color: 'default',
    size: 'default',
    curve: 'default',
    numberOfItems: 3,
  },
} as Meta<ComponentProps<typeof ButtonGroup>>;
