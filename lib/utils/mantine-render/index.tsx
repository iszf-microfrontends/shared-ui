import { ReactElement } from 'react';

import { MantineProvider } from '@mantine/core';

import { render, RenderResult } from '@testing-library/react';

export function mantineRender(Component: ReactElement): RenderResult {
  return render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {Component}
    </MantineProvider>,
  );
}
