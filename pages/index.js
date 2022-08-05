// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';

// >> Styles
import useStyles from '../components/globalStyle';

// >> Pages
import HomePage from '../components/homePage/homePage.js';

// >> Images
import topLeftColor from '../public/background/topLeftColor.png';
import sideColor from '../public/background/sideColor.png';
import firstBgDraw from '../public/background/firstBgDraw.png';
import restBgDraw from '../public/background/restBgDraw.png';

export default function Home() {
	// >> Style
	const styles = useStyles();

	// >> Aos
	useEffect(() => {
		Aos.init({ duration: 700 });
	}, []);

	// >> Render
	return (
		<div className={styles.container}>
			<div className={styles.bgEffects}>
				<div className={styles.bgColors}>
					<div className={`${styles.bgColor} ${styles.topLeftColor}`}>
						<Image
							src={topLeftColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div
						className={`${styles.bgColor} ${styles.firstSideColor}`}
					>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div
						className={`${styles.bgColor} ${styles.secondSideColor} ${styles.rotateSideColor}`}
					>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div
						className={`${styles.bgColor} ${styles.thirdSideColor}`}
					>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div
						className={`${styles.bgColor} ${styles.fourthSideColor} ${styles.rotateSideColor}`}
					>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div
						className={`${styles.bgColor} ${styles.fifthSideColor}`}
					>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>
				<div className={styles.bgShapes}>
					<div className={`${styles.bgShape} ${styles.firstBgDraw}`}>
						<Image
							src={firstBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
					<div className={`${styles.bgShape} ${styles.secondBgDraw}`}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>

					<div className={`${styles.bgShape} ${styles.thirdBgDraw}`}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>

					<div className={`${styles.bgShape} ${styles.fourthBgDraw}`}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>

					<div className={`${styles.bgShape} ${styles.fifthBgDraw}`}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							priority={true}
						/>
					</div>
				</div>
			</div>
			<HomePage />
		</div>
	);
}
