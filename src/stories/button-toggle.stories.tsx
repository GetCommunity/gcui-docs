import type { ButtonToggleProps } from '@getcommunity/gcui/button';
import { ButtonToggle } from '@getcommunity/gcui/button';
import { AudioOff, AudioOn, DarkMode, LightMode } from '@getcommunity/gcui/icon';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, Match, Switch } from 'solid-js';
import {
  defaultColors,
  defaultCurves,
  defaultSizes,
  defaultStyleTypes,
} from '../constants';

type Story = StoryObj<ButtonToggleProps>;

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
  title: 'GCui/ButtonToggle',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ iconActive, iconInactive, icon, ...props }) => {
    return (
      <Switch>
        <Match when={icon === 'theme'}>
          <ButtonToggle
            iconActive={<LightMode size='medium' />}
            iconInactive={<DarkMode size='medium' />}
            {...props}
          />
        </Match>
        <Match when={icon === 'audio'}>
          <ButtonToggle
            iconActive={<AudioOn size='medium' />}
            iconInactive={<AudioOff size='medium' />}
            {...props}
          />
        </Match>
      </Switch>
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
    icon: {
      control: 'select',
      options: ['theme', 'audio'],
    },
  },
  args: {
    label: 'Button Text',
    styleType: 'fill',
    color: 'default',
    size: 'default',
    curve: 'default',
    icon: 'theme',
  },
} as Meta<ComponentProps<typeof ButtonToggle>>;
