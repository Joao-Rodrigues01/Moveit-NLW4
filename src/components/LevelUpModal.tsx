import { useContext } from 'react'
import { FaTwitter } from 'react-icons/fa';
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
	const { level, closeLevelUpModal, challengesCompleted } = useContext(ChallengesContext);


	return (
		<div className={styles.overlay}>
			<div className={styles.container}>
				<header>{level}</header>

				<strong>Parabéns</strong>
				<p>Você alcançou um novo level.</p>

				<button type="button" onClick={closeLevelUpModal}>
					<img src="/icons/close.svg" alt="Fechar modal"/>
				</button>

				<a
					target="_blank"
					href={`https://twitter.com/intent/tweet?hashtags=nlw4%2Crocketseat%2Cmoveit
					&related=twitterapi%2Ctwitter
					&text=Subi%20para%20o%20Level%20${level}
					%20no%20MoveIt!%20Com%20um%20total%20de%20${challengesCompleted}
					%20desafio(s)%20completados!
					&tw_p=tweetbutton
					&url=https://moveit-jaovictir-pgpxn4jwx-joao-rodrigues01.vercel.app`}
				>
					Compartilhar no Twitter
					<FaTwitter size={20} color="#2AA9E0"/>
				</a>
			</div>
		</div>
	)
}
