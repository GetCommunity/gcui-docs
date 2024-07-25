import type { RadioGroupInputProps } from '@getcommunity/gcui/form-input';
import { RadioGroupInput } from '@getcommunity/gcui/form-input';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createMemo, createSignal } from 'solid-js';

type Story = StoryObj<RadioGroupInputProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of check radio groups

export default {
  title: 'GCui/FormInput/RadioGroupInput',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: () => {
    const [radioInput, setRadioInput] = createSignal<string>('');
    const radioInputError = createMemo(() => {
      if (radioInput() === '') return 'This field is required.';
      if (radioInput() === 'Apples') return 'Apples are not allowed.';
      return undefined;
    });
    return (
      <RadioGroupInput
        name='radio-group'
        options={['Apples', 'Bananas', 'Oranges']}
        value={radioInput()}
        defaultValue=''
        label='Radio Group'
        required={true}
        description='Select an option.'
        error={radioInputError()}
        onChange={setRadioInput}
      />
    );
  },
  argTypes: {},
  args: {},
} as Meta<ComponentProps<typeof RadioGroupInput>>;
