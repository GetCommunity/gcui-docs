import type { Meta, StoryObj } from '@storybook/html';
import { For, Show } from 'solid-js';
import { clientColorsKey } from './constants';
import type { ColorKey } from './constants';

type ColorProps = {};

type Story = StoryObj<ColorProps>;

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
  title: 'Theme/ColorPalette',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: ({ client }) => {
    const colors = clientColorsKey[client as keyof ColorKey];
    const baseColors = colors.filter(
      (color) =>
        !color.bg.includes('primary') &&
        !color.bg.includes('secondary') &&
        !color.bg.includes('accent')
    );
    const primaryColors = colors.filter((color) => color.bg.includes('primary'));
    const secondaryColors = colors.filter((color) => color.bg.includes('secondary'));
    const accentColors = colors.filter((color) => color.bg.includes('accent'));
    return (
      <>
        <Show when={baseColors.length > 0}>
          <h3 class="mb-2 mt-3 text-2xl">Base Colors</h3>
          <div class="flex flex-wrap items-center justify-start">
            <For each={baseColors}>
              {(color) => {
                let colorName = color.bg
                  .replace(`bg-${client}`, '')
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                return (
                  <div
                    class={`${color.bg} ${color.text} flex h-32 w-32 items-center justify-center p-4 text-center text-xs font-bold`}
                  >
                    {colorName}
                    <br />
                    {color.label}
                  </div>
                );
              }}
            </For>
          </div>
        </Show>
        <Show when={primaryColors.length > 0}>
          <h3 class="mb-2 mt-3 text-2xl">Primary Colors</h3>
          <div class="flex flex-wrap items-center justify-start">
            <For each={primaryColors}>
              {(color) => {
                let colorName = color.bg
                  .replace(`bg-${client}`, '')
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                return (
                  <div
                    class={`${color.bg} ${color.text} flex h-32 w-32 items-center justify-center p-4 text-center text-xs font-bold`}
                  >
                    {colorName}
                    <br />
                    {color.label}
                  </div>
                );
              }}
            </For>
          </div>
        </Show>
        <Show when={secondaryColors.length > 0}>
          <h3 class="mb-2 mt-3 text-2xl">Secondary Colors</h3>
          <div class="flex flex-wrap items-center justify-start">
            <For each={secondaryColors}>
              {(color) => {
                let colorName = color.bg
                  .replace(`bg-${client}`, '')
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                return (
                  <div
                    class={`${color.bg} ${color.text} flex h-32 w-32 items-center justify-center p-4 text-center text-xs font-bold`}
                  >
                    {colorName}
                    <br />
                    {color.label}
                  </div>
                );
              }}
            </For>
          </div>
        </Show>
        <Show when={accentColors.length > 0}>
          <h3 class="mb-2 mt-3 text-2xl">Accent Colors</h3>
          <div class="flex flex-wrap items-center justify-start">
            <For each={accentColors}>
              {(color) => {
                let colorName = color.bg
                  .replace(`bg-${client}`, '')
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                return (
                  <div
                    class={`${color.bg} ${color.text} flex h-32 w-32 items-center justify-center p-4 text-center text-xs font-bold`}
                  >
                    {colorName}
                    <br />
                    {color.label}
                  </div>
                );
              }}
            </For>
          </div>
        </Show>
      </>
    );
  },
  argTypes: {
    client: {
      control: 'select',
      options: Object.keys(clientColorsKey)
    }
  },
  args: {
    client: 'getcommunity'
  }
} as Meta;
