import {
  Menubar,
  MenubarDropdown,
  MenubarDropdownProps,
  MenuCheckboxItem,
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

type Story = StoryObj<MenubarDropdownProps>;

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
  title: 'GCui/Menus/MenubarDropdown',
  tags: ['autodocs'],
  render: ({ value, color, ...props }) => {
    const [activeMenu, setActiveMenu] = createSignal<string>('1');
    const [checkItemA, setCheckItemA] = createSignal<boolean>(true);
    const [checkItemB, setCheckItemB] = createSignal<boolean>(false);
    return (
      <Menubar
        value={activeMenu()}
        onValueChange={setActiveMenu}
        // @ts-ignore-next-line
        color={color}
        {...props}
      >
        <MenubarDropdown label='Menu Item 1' value='1'>
          <MenuItem textValue='Item 1' />
          <MenuItem textValue='Item 2' />
          <MenuItem textValue='Item 3' />
          <MenuSeparator />
          <MenuGroup label='Group'>
            <MenuItem textValue='Group Item 1' />
            <MenuItem textValue='Group Item 2' />
          </MenuGroup>
        </MenubarDropdown>
        <MenubarDropdown label='Menu Item 2' value='2'>
          <MenuItem textValue='Item 1' />
          <MenuItem textValue='Item 2' />
          <MenuSeparator />
          <MenuSubGroup label='Item Submenu'>
            <MenuItem textValue='Sub Item 1' />
            <MenuItem textValue='Sub Item 2' />
            <MenuItem textValue='Sub Item 3' />
          </MenuSubGroup>
          <MenuSeparator />
          <MenuGroup label='Checkbox Options'>
            <MenuCheckboxItem
              checked={checkItemA()}
              onChange={setCheckItemA}
              textValue='Option 1'
            />
            <MenuCheckboxItem
              checked={checkItemB()}
              onChange={setCheckItemB}
              textValue='Option 2'
            />
          </MenuGroup>
        </MenubarDropdown>
        <MenubarDropdown label='Menu Item 3' value='3'>
          <MenuItem textValue='Item 1' />
          <MenuItem textValue='Item 2' />
          <MenuSeparator />
          <MenuRadioGroup label='Select Radio' defaultValue='1'>
            <MenuRadioItem value='1' textValue='Radio 1' />
            <MenuRadioItem value='2' textValue='Radio 2' />
            <MenuRadioItem value='3' textValue='Radio 3' />
          </MenuRadioGroup>
        </MenubarDropdown>
      </Menubar>
    );
  },
  argTypes: {
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
    styleType: undefined,
    color: 'default',
    size: undefined,
    curve: undefined,
    arrowSize: 30,
  },
} as Meta<ComponentProps<typeof MenubarDropdown>>;
