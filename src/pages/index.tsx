import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/pages/Dashboard.module.css';
import { FiArrowRight } from 'react-icons/fi';

export default function Home() {

	const { push } = useRouter();

	const [username, setUsername] = useState('');

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		push(`/${username}`)
	}

	return (
		<div >
				<div className={styles.container}>
						<img className={styles.moveImg} src="/moveit-background.svg" alt="moveit" />

						<form onSubmit={handleSubmit}>
								<img src="/logo-full-white.svg" alt="moveit logo white"/>

								<h1>Bem-vindo</h1>
									<span>
										<img src="github-logo.svg" alt="github"/>
										<p>Faça login com seu Github para começar</p>
									</span>

									<div className={styles.loginGithub}>
										<input
											type="text"
											placeholder="Digite seu username"
											onChange={e => setUsername(e.target.value)}
											required
										/>
										<button type="submit" >
											<FiArrowRight size={24} color="#FFF"/>
										</button>
									</div>
						</form>
				</div>
		</div>
	)
}
