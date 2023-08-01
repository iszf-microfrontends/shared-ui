import { useState } from 'react';

import { Box, FileInput, FileInputProps, LoadingOverlay, Text } from '@mantine/core';

export type FileInputWithLoadingProps = FileInputProps & {
  /**
   * Show loading overlay
   */
  loading?: boolean;
};

export function FileInputWithLoading({
  loading,
  label,
  className,
  error,
  required,
  onChange,
  ...other
}: FileInputWithLoadingProps): JSX.Element | null {
  const [fileInputKey, setFileInputKey] = useState(0);

  return (
    <Box className={className}>
      {label && (
        <Text fw={500} size="sm">
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </Text>
      )}
      <Box sx={{ position: 'relative' }}>
        <LoadingOverlay visible={!!loading} loaderProps={{ size: 'xs' }} />
        <FileInput
          {...other}
          key={fileInputKey}
          onChange={(file) => {
            setFileInputKey((prevKey) => prevKey + 1);
            onChange?.(file);
          }}
        />
      </Box>
      {error && (
        <Text size="xs" c="red">
          {error}
        </Text>
      )}
    </Box>
  );
}
