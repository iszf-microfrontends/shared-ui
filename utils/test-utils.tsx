import { MantineProvider } from '@mantine/core';
import { render, type RenderOptions } from '@testing-library/react';
import { type ReactElement, type ReactNode } from 'react';

export * from '@testing-library/react';

const AllProviders = ({ children }: { children: ReactNode }): JSX.Element => (
  <MantineProvider withCSSVariables withNormalizeCSS>
    {children}
  </MantineProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): any => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
