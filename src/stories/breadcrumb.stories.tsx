import type { BreadcrumbsProps } from '@getcommunity/gcui/breadcrumb';
import { Breadcrumbs, CrumbItem } from '@getcommunity/gcui/breadcrumb';
import { KeyboardArrowRightIcon } from '@getcommunity/gcui/icon';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createMemo, For, Show } from 'solid-js';

type Story = StoryObj<BreadcrumbsProps>;

export const Default: Story = { args: {} };
// @ts-ignore-next-line
export const CustomIcon: Story = { args: { customIcon: true } };

export default {
  title: 'GCui/Breadcrumbs',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ numberOfItems, customIcon }) => {
    const items = createMemo(() => {
      let listNum = [...Array((numberOfItems as number) ?? (1 as number)).keys()];
      return listNum.map((i) => ({ label: `Item ${i + 1}`, href: `#item-${i + 1}` }));
    });
    return (
      <Show
        when={customIcon}
        fallback={
          <Breadcrumbs>
            <For each={items()}>{(item) => <CrumbItem label={item.label} />}</For>
          </Breadcrumbs>
        }
      >
        <Breadcrumbs separator={<KeyboardArrowRightIcon />}>
          <For each={items()}>{(item) => <CrumbItem label={item.label} />}</For>
        </Breadcrumbs>
      </Show>
    );
  },
  argTypes: {
    numberOfItems: {
      control: 'number',
    },
    customIcon: {
      control: 'boolean',
    },
  },
  args: {
    numberOfItems: 3,
    customIcon: false,
  },
} as Meta<ComponentProps<typeof Breadcrumbs>>;
