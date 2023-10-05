import { Button as MantineButton, Tooltip, type ButtonProps as MantineButtonProps } from '@mantine/core';
import { type HTMLAttributes } from 'react';

export interface ButtonProps extends MantineButtonProps, Omit<HTMLAttributes<HTMLButtonElement>, 'color'> {
  tooltip?: string;
}

export const Button = ({ disabled, tooltip, ...other }: ButtonProps): JSX.Element => {
  if (disabled && tooltip) {
    return (
      <Tooltip label={tooltip}>
        <span>
          <MantineButton disabled={disabled} {...other} />
        </span>
      </Tooltip>
    );
  }
  return <MantineButton disabled={disabled} {...other} />;
};
