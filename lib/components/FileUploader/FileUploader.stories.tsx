import { Meta, StoryObj } from '@storybook/react';

import { FileUploader } from './FileUploader';

const meta: Meta<typeof FileUploader> = {
  title: 'FileUploader',
  component: FileUploader,
};

export default meta;

type Story = StoryObj<typeof FileUploader>;

export const Primary: Story = {};
