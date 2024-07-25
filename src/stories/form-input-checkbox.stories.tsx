import type { CheckboxInputProps } from '@getcommunity/gcui/form-input';
import { CheckboxInput } from '@getcommunity/gcui/form-input';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createSignal } from 'solid-js';

type Story = StoryObj<CheckboxInputProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of checkbox inputs

export default {
  title: 'GCui/FormInput/CheckboxInput',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: (props) => {
    const [checkboxInput, setCheckboxInput] = createSignal<boolean>(false);
    return (
      <CheckboxInput
        value={checkboxInput() ? '1' : '0'}
        checked={checkboxInput()}
        defaultChecked={true}
        name={'checkbox-input'}
        label={checkboxInput() ? 'TRUE' : 'FALSE'}
        required={true}
        error={checkboxInput() === false ? 'This field is required.' : undefined}
        description='Check this box.'
        onChange={setCheckboxInput}
      />
    );
  },
  argTypes: {},
  args: {},
} as Meta<ComponentProps<typeof CheckboxInput>>;
