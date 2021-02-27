import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { CicleButton } from './CicleButton';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import styles from '../styles/components/CountDown.module.css';
import { FiX } from 'react-icons/fi';


export function CountDown() {

	const {
		hasFinished,
		minutes,
		seconds,
		resetCountdown,
		startCountdown,
		isActive,
	} = useContext(CountdownContext);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

	return (
		<>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
					<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{ hasFinished ? (
				<CicleButton
					disabled
					iconSize={24}
					title="Ciclo encerrado"
					className={styles.countdownButton}
					icon={FaCheckCircle}
					iconColor="#4CD62B"
				/>
				) : (
					<>
						{ isActive ?(
								<CicleButton
								type="button"
								iconSize={26}
								title="	Abandonar ciclo"
								className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
								onClick={resetCountdown}
								icon={FiX}
								iconColor="#666666"
							/>
									) : (
								<CicleButton
								type="button"
								iconSize={16}
								title="	Iniciar um ciclo"
								className={styles.countdownButton}
								onClick={startCountdown}
								icon={FaPlay}
								iconColor="#FFF"
							/>
								)}
					</>
				)
			}
		</>
	)
}
