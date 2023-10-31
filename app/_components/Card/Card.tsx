import { FC } from 'react';
import styles from './Card.module.scss';
import {Button} from "@/app/_components/Button";
import {ThemeTypes} from "@/types/theme";

interface Props {
  className?: string;
  theme?: ThemeTypes;
}

export const Card: FC<Props> = ({ className, theme = ThemeTypes.DEFAULT }) => {
  return <div className={styles.card}>
    <h2>Card title</h2>
    <p>Card subtitle</p>
    <Button theme={theme}>Hello</Button>
  </div>;
};
