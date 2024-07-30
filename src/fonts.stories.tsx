import type { Meta, StoryObj } from '@storybook/html';
import { For } from 'solid-js';
import { fontFamilies, FontFamilyKey } from './constants';

type FontFamilyProps = {};

type Story = StoryObj<FontFamilyProps>;

export const GetCommunity: Story = { args: { client: 'getcommunity' } };
export const BIASC: Story = { args: { client: 'biasc' } };
export const Brandywine: Story = { args: { client: 'brandywine' } };
export const OlsonHomes: Story = { args: { client: 'olsonhomes' } };
export const PacificCommunities: Story = { args: { client: 'pacificcommunities' } };
export const SheaHomes: Story = { args: { client: 'sheahomes' } };
export const TollBrothers: Story = { args: { client: 'tollbrothers' } };
export const Trumark: Story = { args: { client: 'trumark' } };
export const VanDaele: Story = { args: { client: 'vandaele' } };
export const WoodbridgePacificGroup: Story = {
  args: { client: 'wpg' },
};

export default {
  title: 'Theme/FontFamilies',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ client }) => {
    let fontStyles = fontFamilies[client as keyof FontFamilyKey];
    return (
      <For each={fontStyles}>
        {(fontStyle) => {
          return (
            <div class={`prose my-14 first:mt-0 last:mb-0 ${fontStyle.className}`}>
              <link rel='stylesheet' href={fontStyle.src}></link>
              <h1 class='mb-0 text-6xl leading-snug'>{fontStyle.name}</h1>
              <hr class='my-0 mt-5 pt-5' />
              <h1 class='my-2 text-5xl'>H1 Heading</h1>
              <h2 class='my-2 text-4xl'>H2 Heading</h2>
              <h3 class='my-2 text-2xl'>H3 Heading</h3>
              <h4 class='my-2 text-lg'>H4 Heading</h4>
              <h5 class='my-2 text-base'>H5 Heading</h5>
              <h6 class='my-2 text-xs'>H6 Heading</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi iusto
                ipsa dolor sequi magnam sunt provident ipsum quibusdam sint mollitia
                optio est impedit neque corrupti, consectetur delectus illum harum
                ullam.
              </p>
            </div>
          );
        }}
      </For>
    );
  },
  argTypes: {
    client: {
      control: 'select',
      options: Object.keys(fontFamilies),
    },
  },
  args: {
    client: Object.keys(fontFamilies)[0],
  },
} as Meta;
