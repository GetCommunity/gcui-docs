import type { TabsProps } from '@getcommunity/gcui/tabs';
import { Tab, Tabs } from '@getcommunity/gcui/tabs';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createMemo, Index } from 'solid-js';
import {
  defaultColors,
  defaultCurves,
  defaultOrientations,
  defaultSizes,
  defaultStyleTypes,
} from '../constants';

type Story = StoryObj<TabsProps>;

export const Default: Story = { args: {} };
export const Horizontal: Story = { args: { orientation: 'horizontal' } };
export const Vertical: Story = { args: { orientation: 'vertical' } };

// TODO: add more stories for different variations of tabs
// TODO: fix vertical tab indicators min-width to prevent text wrapping

export default {
  title: 'GCui/Tabs',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ numberOfItems, ...props }) => {
    const items = createMemo(() => {
      let listNum = [...Array((numberOfItems as number) ?? (1 as number)).keys()];
      return listNum.map((i) => ({ label: `Tab ${i + 1}`, value: `tab-${i + 1}` }));
    });
    return (
      <Tabs {...props}>
        <Index each={items()}>
          {(item) => {
            const randomLorem = [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
              'Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
              'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.',
              'Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.',
              'Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.',
              'Praesent egestas tristique nibh. Sed a libero. Cras varius.',
              'Nunc auctor. Mauris pretium vel, cursus sit amet, turpis. Nunc egestas, augue at pellentesque laoreet.',
              'Nunc varius. Maecenas sollicitudin. Praesent vel.',
            ];
            const randomIndex = Math.floor(Math.random() * randomLorem.length);
            return (
              <Tab label={item().label} value={item().value}>
                {randomLorem[randomIndex]}
              </Tab>
            );
          }}
        </Index>
      </Tabs>
    );
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: defaultOrientations,
    },
    disabled: {
      control: 'boolean',
    },
    styleType: {
      control: 'radio',
      options: [undefined, ...defaultStyleTypes],
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
      min: 1,
      max: 10,
    },
  },
  args: {
    orientation: 'horizontal',
    disabled: false,
    styleType: undefined,
    color: 'default',
    size: undefined,
    curve: undefined,
    numberOfItems: 4,
  },
} as Meta<ComponentProps<typeof Tabs>>;
