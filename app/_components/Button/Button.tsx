import {FC, ReactNode} from 'react';
import styles from './Button.module.scss';
import {ThemeTypes} from "@/types/theme";

interface Props {
  className?: string;
  children?: ReactNode;
  theme?: ThemeTypes;
}

export const Button: FC<Props> = ({ className, children, theme = ThemeTypes.DEFAULT }) => {
  return <button className={`${styles.button} ${styles[theme]}`}>
    {children}
  </button>;
};
