import type { NumberInputProps } from '@getcommunity/gcui/form-input';
import { NumberInput } from '@getcommunity/gcui/form-input';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createMemo, createSignal } from 'solid-js';

type Story = StoryObj<NumberInputProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of number inputs

export default {
  title: 'GCui/FormInput/NumberInput',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ label, value, required }) => {
    const [numberInput, setNumberInput] = createSignal<number | undefined | null>(
      value
    );
    const numberError = createMemo(() => {
      if ((required && numberInput() === undefined) || numberInput() === null) {
        return 'This field is required';
      }
      return (numberInput() as number) > 100
        ? 'Value must be less than 100.'
        : undefined;
    });
    return (
      <NumberInput
        label={label ?? 'Number Input'}
        name={'number-input'}
        description='Enter a number value that is less than 100.'
        required={required}
        // @ts-ignore-next-line
        value={numberInput()}
        onChange={setNumberInput}
        error={numberError()}
      />
    );
  },
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
    required: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Number Input',
    value: undefined,
    required: false,
  },
} as Meta<ComponentProps<typeof NumberInput>>;
