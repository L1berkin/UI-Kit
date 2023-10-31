import Image from 'next/image'
import styles from './page.module.css'
import { Card } from "@/app/_components/Card";
import {ThemeTypes} from "@/types/theme";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <Card theme={ThemeTypes.DEFAULT} />
        <Card theme={ThemeTypes.PRIMARY} />
        <Card theme={ThemeTypes.DARK} />
      </section>
    </main>
  )
}
