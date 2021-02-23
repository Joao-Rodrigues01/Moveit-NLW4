import styles from '../styles/components/Profile.module.css';

export function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img
				src="https://avatars.githubusercontent.com/u/61169118?s=460&u=8433bc8b05b820853155e079fdcdaae69000a878&v=4"
				alt="João"
			/>
			<div>
				<strong>João Victor</strong>
				<p>
					<img src="icons/level.svg" alt="Level"/>
					Level 1
				</p>
			</div>
		</div>
	);
}
