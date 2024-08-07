import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '~/styles/GlobalStyles';
import theme from '~/styles/theme';

export const withComponentWrapper = (Story: StoryFn, context: StoryContext) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story {...context} />
  </ThemeProvider>
);
