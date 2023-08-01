import { Meta, StoryObj } from '@storybook/react';

import { FileInputWithLoading } from './FileInputWithLoading';

const meta: Meta<typeof FileInputWithLoading> = {
  title: 'FileUploader',
  component: FileInputWithLoading,
};

export default meta;

type Story = StoryObj<typeof FileInputWithLoading>;

export const Primary: Story = {};
