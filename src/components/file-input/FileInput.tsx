import { Box, FileInput as MantineFileInput, LoadingOverlay, Text, type FileInputProps as MantineFileInputProps } from '@mantine/core';

export interface FileInputProps extends Omit<MantineFileInputProps, 'classNames' | 'className' | 'sx' | 'styles' | 'style'> {
  loading?: boolean;
  classNames?: {
    root?: string;
    label?: string;
    error?: string;
    input?: string;
  };
}

export const FileInput = ({ loading, label, error, required, classNames, ...other }: FileInputProps): JSX.Element => (
  <Box className={classNames?.root}>
    {label && (
      <Text className={classNames?.label} fw={500} size="sm">
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </Text>
    )}
    <Box sx={{ position: 'relative' }}>
      <LoadingOverlay visible={!!loading} loaderProps={{ size: 'xs' }} />
      <MantineFileInput
        {...other}
        className={classNames?.input}
        fileInputProps={{
          onClick: (event) => {
            (event.target as HTMLInputElement).value = '';
          },
        }}
      />
    </Box>
    {error && (
      <Text className={classNames?.error} size="xs" c="red">
        {error}
      </Text>
    )}
  </Box>
);
