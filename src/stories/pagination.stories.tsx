import type { PaginationProps } from '@getcommunity/gcui/pagination';
import { Pagination } from '@getcommunity/gcui/pagination';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createSignal, onMount } from 'solid-js';
import {
  defaultColors,
  defaultCurves,
  defaultSizes,
  defaultStyleTypes,
} from '../constants';

type Story = StoryObj<PaginationProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of Pagination

export default {
  title: 'GCui/Pagination',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ count, page, setPage, defaultPage, ...props }) => {
    const total = () => {
      if (typeof count === 'function') {
        return count() <= 0 ? 1 : count();
      } else if (count <= 0) {
        return 1;
      } else {
        return count;
      }
    };
    const [currPage, setCurrPage] = createSignal<number>(1);
    onMount(() => {
      // round to the nearest integer
      let haltTotal = Math.ceil(total() / 2);
      setCurrPage(haltTotal);
    });
    return (
      <Pagination count={total()} page={currPage} setPage={setCurrPage} {...props} />
    );
  },
  argTypes: {
    showPrevious: {
      control: 'boolean',
    },
    showNext: {
      control: 'boolean',
    },
    showFirst: {
      control: 'boolean',
    },
    showLast: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
      // TODO: fix pagination disabled
      description: 'Disable the pagination (BROKEN)',
    },
    styleType: {
      control: 'radio',
      options: ['none', ...defaultStyleTypes],
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
    siblingCount: {
      control: 'number',
      if: { arg: 'siblingCount', gt: 1 },
    },
    count: {
      control: 'number',
      description: 'Total number of pages',
      if: { arg: 'count', gt: 1 },
    },
  },
  args: {
    showPrevious: true,
    showNext: true,
    showFirst: true,
    showLast: true,
    disabled: false,
    styleType: 'none',
    color: 'default',
    size: 'default',
    curve: 'default',
    siblingCount: 2,
    count: 15,
  },
} as Meta<ComponentProps<typeof Pagination>>;
