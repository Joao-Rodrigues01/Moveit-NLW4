import Head from 'next/head';
import { CompletedChallegens } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
			<Head>
				<title>Início | move it</title>
			</Head>
      <ExperienceBar />

			<CountdownProvider>
				<section>
					<div className="">
						<Profile />
						<CompletedChallegens />
						<CountDown />
					</div>
					<div className="">
						<ChallengeBox />
					</div>
				</section>
			</CountdownProvider>
    </div>
  )
}
