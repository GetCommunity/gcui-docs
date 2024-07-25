import type { TextInputProps } from '@getcommunity/gcui/form-input';
import { TextInput } from '@getcommunity/gcui/form-input';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createSignal } from 'solid-js';

type Story = StoryObj<TextInputProps>;

export const Default: Story = { args: {} };
export const Text: Story = { args: { type: 'text' } };
export const TextArea: Story = { args: { type: 'textarea' } };

// TODO: add more stories for different variations of text inputs

export default {
  title: 'GCui/FormInput/TextInput',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ type, value, label, placeholder, required }) => {
    const [textInput, setTextInput] = createSignal<string>(value ?? '');
    return (
      <TextInput
        type={type}
        value={textInput()}
        name={'text-input'}
        label={label ?? 'Text Input Label'}
        placeholder={placeholder}
        required={required}
        onChange={setTextInput}
        error={
          textInput() === 'Hello World'
            ? 'What did I tell you... I cannot equal "Hello World"'
            : undefined
        }
        description='This value cannot equal "Hello World"... try typing it in to see an example error'
      />
    );
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['text', 'textarea'],
    },
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
  args: {
    type: 'text',
    label: 'Text Input Label',
    value: '',
    placeholder: 'Enter a text value...',
    required: false,
  },
} as Meta<ComponentProps<typeof TextInput>>;
