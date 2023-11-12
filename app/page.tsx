import styles from './page.module.css'
import {Wrapper} from "@/app/_components/Wrapper";
import {items} from "@/app/_components/Wrapper/Wrapper.mock";

export default function Home() {
  return (
    <main className={styles.main}>
      <Wrapper items={items} />
    </main>
  )
}
