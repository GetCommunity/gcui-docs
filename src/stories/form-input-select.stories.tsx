import type { SelectInputProps } from '@getcommunity/gcui/form-input';
import { SelectInput } from '@getcommunity/gcui/form-input';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createSignal, onMount } from 'solid-js';

type ClientRead = {
  id: number;
  title: string;
  is_active: boolean;
};

type Story = StoryObj<SelectInputProps<ClientRead>>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of select inputs

export default {
  title: 'GCui/FormInput/SelectInput',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ label, required, numberOfClients }) => {
    const [clients, setClients] = createSignal<ClientRead[]>([]);
    const [selectedItem, setSelectedItem] = createSignal<ClientRead>();
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
      <SelectInput<ClientRead>
        name='client'
        options={clients()}
        value={selectedItem()}
        onChange={setSelectedItem}
        label={label}
        description='Select a client from the list.'
        required={required}
        optionValue='id'
        optionTextValue='title'
        optionDisabled={(option: ClientRead) => option.is_active === false}
        triggerLabel='Clients'
        placeholder='Select a Client'
        error={
          required && selectedItem() === null ? 'This field is required.' : undefined
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
    label: 'Client',
    required: false,
    numberOfClients: 5,
  },
} as Meta<ComponentProps<typeof SelectInput>>;
