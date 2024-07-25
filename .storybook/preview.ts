/* @refresh reload */
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { render } from 'solid-js/web';
import '../src/tailwind.css';

const preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-mode'
    }),
    (Story) => {
      const solidRoot = document.createElement('div');
      render(Story, solidRoot);
      return solidRoot;
    }
  ],
  actions: { argTypesRegex: '^on[A-Z].*' },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
