import { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

import { DefaultButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isCancel?: boolean;
  isTerminate?: boolean;
};

export const Button = ({
  isOutlined = false,
  isTerminate = false,
  isCancel = false,
  ...rest
}: ButtonProps) => {
  return (
    <DefaultButton
      className={cx(
        'button',
        { outlined: isOutlined },
        { cancel: isCancel },
        { terminate: isTerminate },
      )}
      {...rest}
    />
  );
};
