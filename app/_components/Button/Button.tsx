'use client'
import {FC} from 'react';
import styles from './Button.module.scss';
import {ThemeTypes} from "@/types/theme";
import {ButtonProps} from "@/app/_components/Button/Button.types";

export const Button: FC<ButtonProps> = ({ className, children, theme = ThemeTypes.DEFAULT }) => {
  return <button className={`${styles.button} ${styles[theme]}`}>
    {children}
  </button>;
};
