import { type Story } from '@ladle/react';
import { createStyles } from '@mantine/core';

import { FileInput, type FileInputProps } from './FileInput';

const useStyles = createStyles({
  root: {
    width: 420,
  },
});

export const Default: Story<FileInputProps> = () => {
  const { classes } = useStyles();
  return <FileInput classNames={{ root: classes.root }} label="Input label" placeholder="Input placeholder" />;
};

Default.args = {};
