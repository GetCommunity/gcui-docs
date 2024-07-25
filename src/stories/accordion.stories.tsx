import type { AccordionProps } from '@getcommunity/gcui/accordion';
import { Accordion, AccordionItem } from '@getcommunity/gcui/accordion';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps } from 'solid-js';
import {
  defaultColors,
  defaultCurves,
  defaultSizes,
  defaultStyleTypes,
} from '../constants';

type Story = StoryObj<AccordionProps>;

export const Default: Story = { args: {} };

export const Fill: Story = { args: { styleType: 'fill' } };
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

export const SmallCurve: Story = { args: { curve: 'small' } };
export const MediumCurve: Story = { args: { curve: 'medium' } };
export const LargeCurve: Story = { args: { curve: 'large' } };

export const Info: Story = { args: { color: 'info' } };
export const Error: Story = { args: { color: 'error' } };
export const Warning: Story = { args: { color: 'warning' } };
export const Success: Story = { args: { color: 'success' } };
export const Light: Story = { args: { color: 'light' } };
export const Dark: Story = { args: { color: 'dark' } };

export default {
  title: 'GCui/Accordion',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ numberOfItems, ...props }) => {
    return (
      <Accordion {...props}>
        {[...Array((numberOfItems as number) ?? (0 as number)).keys()].map((i) => (
          <AccordionItem label={`Accordion Item ${i + 1}`} value={`item-${i + 1}`}>
            <p class='my-2 text-sm italic text-gray-900'>
              Accordion Item {i + 1} Content
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa laboriosam,
              doloribus dolores aspernatur, quo odio culpa illo eveniet totam voluptatum
              ut! Repellendus nemo beatae delectus fuga cupiditate? Nostrum, quis
              placeat?
            </p>
          </AccordionItem>
        ))}
      </Accordion>
    );
  },
  argTypes: {
    collapsible: {
      control: 'boolean',
      description:
        'Allow all items to be collapsed at the same time. Default is true. If false, one item will always be expanded.',
    },
    multiple: {
      control: 'boolean',
      description:
        'Allow multiple items to be expanded at the same time. Default is false.',
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
    numberOfItems: {
      control: 'number',
    },
  },
  args: {
    collapsible: true,
    multiple: false,
    styleType: 'outline',
    color: 'default',
    size: 'default',
    curve: 'default',
    numberOfItems: 4,
  },
} as Meta<ComponentProps<typeof Accordion>>;
