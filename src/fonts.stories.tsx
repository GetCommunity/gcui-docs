import type { Meta, StoryObj } from '@storybook/html';
import { fontFamilies, FontFamilyKey } from './constants';
import { For } from 'solid-js';

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
  args: { client: 'wpg' }
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
          fontStyle.src.then(() => null);
          return (
            <div class={`prose my-14 first:mt-0 last:mb-0 ${fontStyle.className}`}>
              <h1 class="mb-0 text-6xl leading-snug">{fontStyle.name}</h1>
              <hr class="m-0 mt-5 pt-5" />
              <h1>H1 Heading</h1>
              <h2>H2 Heading</h2>
              <h3>H3 Heading</h3>
              <h4>H4 Heading</h4>
              <h5>H5 Heading</h5>
              <h6>H6 Heading</h6>
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
      options: Object.keys(fontFamilies)
    }
  },
  args: {
    client: Object.keys(fontFamilies)[0]
  }
} as Meta;
