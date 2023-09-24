import { GlobalProvider } from '@ladle/react';
import { MantineProvider } from '@mantine/core';

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <MantineProvider withCSSVariables withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};
