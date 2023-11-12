import { FC } from 'react';
import styles from './Card.module.scss';
import {Button} from "@/app/_components/Button";
import {ThemeTypes} from "@/types/theme";
import {CardProps} from "@/app/_components/Card/Card.types";

export const Card: FC<CardProps> = ({ className, theme = ThemeTypes.DEFAULT, title, subtitle, buttonText }) => {
  return <div className={styles.card}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <Button theme={theme}>{buttonText}</Button>
  </div>;
};
