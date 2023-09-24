import { ReactElement, ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

import { render, RenderOptions } from '@testing-library/react';

export * from '@testing-library/react';

const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider withCSSVariables withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
