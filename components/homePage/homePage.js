// >> Modules
import Image from 'next/image';
import Head from 'next/head';
import getVariable from '../globalVariables';

// >> Styles
import useStyles from './homePageStyle';
import useGlobalStyles from '../globalStyle';

// >> Images
import topLeftColor from '../../public/background/topLeftColor.png';
import sideColor from '../../public/background/sideColor.png';
import firstBgDraw from '../../public/background/firstBgDraw.png';
import restBgDraw from '../../public/background/restBgDraw.png';

// >> Components
import Landing from './landing/landing';
import NavBar from './navBar/navBar';
import LiveMinting from './liveMinting/liveMinting';

// >> Script
function HomePage(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<>
			<Head>
				<title>{getVariable['texts']['pageTitle']}</title>
				<meta charSet="utf-8" />
				<meta
					name="theme-color"
					content={getVariable['colors']['pageMainColor']}
				/>
				<meta
					name="keywords"
					content={getVariable['texts']['pageTags']}
				/>
				<meta
					name="description"
					content={getVariable['texts']['pageDesc']}
				/>

				<meta
					property="og:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					property="og:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					property="og:image"
					content={getVariable['texts']['pageImage']}
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content={getVariable['texts']['pageLink']}
				/>
				<meta
					property="twitter:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta
					name="twitter:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					name="twitter:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					name="twitter:image"
					content={getVariable['texts']['pageImage']}
				/>
			</Head>
			<div className={styles.mainDiv}>
				<div className={styles.backgroundDiv}>
					<div className={styles.topLeftColor}>
						<Image
							src={topLeftColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgCircle1}>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgCircle2}>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgCircle3}>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgCircle4}>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgCircle5}>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgCircle6}>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgCircle7}>
						<Image
							src={sideColor}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgDraw1}>
						<Image
							src={firstBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgDraw2}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgDraw3}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgDraw4}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgDraw5}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgDraw6}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
					<div className={styles.bgDraw7}>
						<Image
							src={restBgDraw}
							alt=""
							layout="responsive"
							objectFit="contain"
							quality={100}
							//priority={true}
						/>
					</div>
				</div>
				<div className={styles.componentsDiv}>
					<NavBar {...props} />
					<Landing items={props.items} />
					<LiveMinting />
				</div>
			</div>
		</>
	);
}

export default HomePage;
