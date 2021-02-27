import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { CompletedChallegens } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface IUserGithub {
	name: string;
	avatar_url: string;
}

interface ProfileData {
	user: IUserGithub;
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Dashboard({
	user,
	level,
	challengesCompleted,
	currentExperience
}: ProfileData) {
  return (
		<ChallengesProvider
			level={level}
			currentExperience={currentExperience}
			challengesCompleted={challengesCompleted}
		>
			<div className={styles.container}>
				<Head>
					<title>Início | move it</title>
				</Head>
				<ExperienceBar />

			<CountdownProvider>
				<section>
					<div>
						<Profile user={user}/>
						<CompletedChallegens />
						<CountDown />
					</div>
					<div>
						<ChallengeBox />
					</div>
				</section>
			</CountdownProvider>
			</div>
		</ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req, params}) => {
	const { level, currentExperience, challengesCompleted } = req.cookies;

	const { username } = params;

	const response = await fetch(`https://api.github.com/users/${username}`);

	const user = await response.json();

	return {
		props:{
			user,
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted)
		}
	}
}
