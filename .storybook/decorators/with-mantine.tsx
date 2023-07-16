import React, { ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

export function withMantine(renderStory: () => ReactNode) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {renderStory()}
    </MantineProvider>
  );
}
