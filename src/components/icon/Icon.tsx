import { IconUpload, type TablerIconsProps } from '@tabler/icons-react';

export type IconType = 'upload';

interface IconProps extends Omit<TablerIconsProps, 'size'> {
  type: IconType;
}

const icons: { [key in IconType]: (props: TablerIconsProps) => JSX.Element } = {
  upload: IconUpload,
};

export const Icon = ({ type, ...other }: IconProps): JSX.Element => {
  const IconComponent = icons[type];
  return <IconComponent size="1.125rem" stroke={2} {...other} />;
};
