import type { ComboboxMultipleInputProps } from '@getcommunity/gcui/form-input';
import { ComboboxMultiInput } from '@getcommunity/gcui/form-input';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createSignal, onMount } from 'solid-js';

type ClientRead = {
  id: number;
  title: string;
  is_active: boolean;
};

type Story = StoryObj<ComboboxMultipleInputProps<ClientRead>>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of combobox multiple inputs

export default {
  title: 'GCui/FormInput/ComboboxMultiInput',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ label, required, numberOfClients }) => {
    const [clients, setClients] = createSignal<ClientRead[]>([]);
    const [comboboxClient, setComboboxClient] = createSignal<ClientRead[]>([]);
    onMount(() => {
      for (let i = 1; i < numberOfClients + 1; i++) {
        setClients((prev) => [
          ...prev,
          {
            id: i,
            title: `Client ${i}`,
            is_active: i % 4 != 0,
          },
        ]);
      }
    });
    return (
      <ComboboxMultiInput<ClientRead>
        name='combobox-client'
        value={comboboxClient()}
        options={clients()}
        onChange={setComboboxClient}
        label={label}
        description='Select a client from the combobox list.'
        required={required}
        optionValue='id'
        optionTextValue='title'
        optionLabel='title'
        optionDisabled={(option: ClientRead) => option.is_active === false}
        triggerLabel='Clients'
        placeholder='Select a Client'
        error={
          required && comboboxClient() !== undefined
            ? 'This field is required.'
            : comboboxClient().length <= 1
              ? 'Select at least two clients.'
              : undefined
        }
      />
    );
  },
  argTypes: {
    label: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Combobox Client',
    required: false,
    numberOfClients: 5,
  },
} as Meta<ComponentProps<typeof ComboboxMultiInput>>;
