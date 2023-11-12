import { FC } from 'react';
import styles from './Wrapper.module.scss';
import {Card} from "@/app/_components/Card";
import {ThemeTypes} from "@/types/theme";
import {WrapperProps} from "@/app/_components/Wrapper/Wrapper.types";

export const Wrapper: FC<WrapperProps> = ({ className, items = [] }) => {
  return (
    <section className={styles.wrapper}>
      {items.length ? items.map(el => (
        <Card {...el} key={el.title} />
      )) : <h1>Items list is empty...</h1>}
    </section>
  );
};
