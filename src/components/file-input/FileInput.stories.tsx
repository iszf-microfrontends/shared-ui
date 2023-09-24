import { createStyles } from '@mantine/core';

import { Story } from '@ladle/react';

import { FileInput, FileInputProps } from './FileInput';

const useStyles = createStyles({
  root: {
    width: 300,
  },
});

export const Default: Story<FileInputProps> = () => {
  const { classes } = useStyles();
  return <FileInput classNames={{ root: classes.root }} label="Input label" placeholder="Input placeholder" />;
};

Default.args = {};
