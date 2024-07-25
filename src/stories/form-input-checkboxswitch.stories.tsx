import type { CheckboxInputProps } from '@getcommunity/gcui/form-input';
import { CheckboxSwitchInput } from '@getcommunity/gcui/form-input';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createSignal } from 'solid-js';

type Story = StoryObj<CheckboxInputProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of checkbox switch inputs

export default {
  title: 'GCui/FormInput/CheckboxSwitchInput',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: () => {
    const [checkboxSwitchInput, setCheckboxSwitchInput] = createSignal<boolean>(false);
    return (
      <CheckboxSwitchInput
        value={checkboxSwitchInput() ? '1' : '0'}
        checked={checkboxSwitchInput()}
        defaultChecked={true}
        name={'checkbox-switch-input'}
        label={checkboxSwitchInput() ? 'TRUE' : 'FALSE'}
        required={true}
        error={checkboxSwitchInput() === false ? 'This field is required.' : undefined}
        description='Toggle this switch.'
        onChange={setCheckboxSwitchInput}
      />
    );
  },
  argTypes: {},
  args: {},
} as Meta<ComponentProps<typeof CheckboxSwitchInput>>;
