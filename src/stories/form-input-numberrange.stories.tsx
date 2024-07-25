import type { NumberRangeSliderProps } from '@getcommunity/gcui/form-input';
import { NumberRangeInput } from '@getcommunity/gcui/form-input';
import { SliderGetValueLabelParams } from '@kobalte/core/slider';
import type { Meta, StoryObj } from '@storybook/html';
import { ComponentProps, createMemo, createSignal } from 'solid-js';

type Story = StoryObj<NumberRangeSliderProps>;

export const Default: Story = { args: {} };

// TODO: add more stories for different variations of check radio groups

export default {
  title: 'GCui/FormInput/NumberRangeInput',
  tags: ['autodocs'],
  // @ts-ignore-next-line
  render: () => {
    const [rangeInput, setRangeInput] = createSignal<number[]>([40]);
    const rangeInputError = createMemo(() => {
      return rangeInput()[0] < 50 ? 'Value must be greater than 50.' : undefined;
    });
    const [rangeInputToo, setRangeInputToo] = createSignal<number[]>([24, 76]);
    const rangeInputTooError = createMemo(() => {
      let errorMsg: string | undefined = undefined;
      if (rangeInputToo()[0] < 25) {
        if (errorMsg === undefined) errorMsg = '';
        errorMsg += 'Minimum value must be greater than 25. ';
      }
      if (rangeInputToo()[1] > 75) {
        if (errorMsg === undefined) errorMsg = '';
        errorMsg += 'Maximum value must be less than 75.';
      }
      return errorMsg;
    });
    return (
      <>
        <NumberRangeInput
          name='range-input'
          value={rangeInput()}
          label='Range Input'
          minValue={0}
          maxValue={100}
          step={1}
          minStepsBetweenThumbs={1}
          getValueLabel={(params: SliderGetValueLabelParams) => `# ${params.values[0]}`}
          orientation='horizontal'
          required={true}
          description='Select a value.'
          error={rangeInputError()}
          onChange={setRangeInput}
        />
        <NumberRangeInput
          name='range-input-too'
          value={rangeInputToo()}
          label='Range Input Too'
          minValue={0}
          maxValue={100}
          step={1}
          minStepsBetweenThumbs={1}
          getValueLabel={(params: SliderGetValueLabelParams) =>
            `${params.values[0]} - ${params.values[1]}`
          }
          orientation='horizontal'
          required={true}
          description='Select a range.'
          error={rangeInputTooError()}
          onChange={setRangeInputToo}
          onChangeEnd={setRangeInputToo}
        />
      </>
    );
  },
  argTypes: {},
  args: {},
} as Meta<ComponentProps<typeof NumberRangeInput>>;
