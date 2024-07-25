import type { MenuDropdownProps } from '@getcommunity/gcui/menu-dropdown';
import {
  MenuCheckboxItem,
  MenuDropdown,
  MenuGroup,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSubGroup,
} from '@getcommunity/gcui/menu-dropdown';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createSignal } from 'solid-js';
import {
  defaultColors,
  defaultCurves,
  defaultSizes,
  defaultStyleTypes,
} from '../constants';

type Story = StoryObj<MenuDropdownProps>;

export const Info: Story = { args: { color: 'info' } };
export const Error: Story = { args: { color: 'error' } };
export const Warning: Story = { args: { color: 'warning' } };
export const Success: Story = { args: { color: 'success' } };
export const Light: Story = { args: { color: 'light' } };
export const Dark: Story = { args: { color: 'dark' } };

export const Small: Story = { args: { size: 'small' } };
export const Default: Story = { args: { size: 'default' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

export const Square: Story = { args: { styleType: 'outline', curve: 'none' } };
export const Rounded: Story = { args: { styleType: 'outline', curve: 'full' } };

export default {
  title: 'GCui/Menus/MenuDropdown',
  tags: ['autodocs'],
  render: (props) => {
    const [showLogs, setShowLogs] = createSignal<boolean>(true);
    const [showHistory, setShowHistory] = createSignal<boolean>(false);
    return (
      <MenuDropdown {...props}>
        <MenuItem textValue='Commit' />
        <MenuItem textValue='Push' />
        <MenuItem textValue='Update Project' disabled={true} />
        <MenuSubGroup label='GitHub Sub'>
          <MenuItem textValue='Create Pull Request...' />
          <MenuItem textValue='View Pull Requests' />
          <MenuItem textValue='Sync Fork' />
          <MenuSeparator />
          <MenuItem textValue='Open on GitHub' />
        </MenuSubGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuCheckboxItem
            checked={showLogs()}
            onChange={setShowLogs}
            textValue='Show Git Log'
          />
          <MenuCheckboxItem
            checked={showHistory()}
            onChange={setShowHistory}
            textValue='Show History'
          />
        </MenuGroup>
        <MenuSeparator />
        <MenuRadioGroup label='Select Radio' defaultValue='main'>
          <MenuRadioItem value='main' textValue='main' />
          <MenuRadioItem value='develop' textValue='develop' />
        </MenuRadioGroup>
        <MenuSeparator />
        <MenuGroup label='Basic Group'>
          <MenuItem textValue='Group Item 1' />
          <MenuItem textValue='Group Item 2' />
        </MenuGroup>
      </MenuDropdown>
    );
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
    arrowSize: {
      control: {
        type: 'number',
        min: 0,
        max: 50,
      },
    },
  },
  args: {
    label: 'Git Settings',
    styleType: undefined,
    color: 'default',
    size: undefined,
    curve: undefined,
    arrowSize: 30,
  },
} as Meta<ComponentProps<typeof MenuDropdown>>;
