import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

export const metadata = {
  title: 'Mindsers Live',
  description: "Mindsers streams on Twitch. Join the hype!"
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi!
        </h1>

        <p className={styles.description}>
        <a href="https://community.mindsers.live/">
          Join the discord to talk with the <code className={styles.code}>community</code>
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://nathanaelcherrier.dev/">
        Built with love by Nathanaël Cherrier
        </a>
      </footer>
    </div>
  )
}

export default Home
