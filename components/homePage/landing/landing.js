// >> Modules
import { Button, Typography } from '@mui/material';
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// >> Styles
import useStyles from './landingStyle';
import useGlobalStyles from '../../globalStyle';

// >> Script
function Landing(props) {
	const router = useRouter();

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [items, setItems] = useState(props.items.data);
	const [selectedItem, setSelectedItem] = useState(false);

	// >> Functions
	const openNewTab = (tab) => {
		if (tab === 'marketplace') {
			router.push(`./marketplace`);
		} else if (tab === 'launchpad') {
			router.push(`./launchpad`);
		}
	};

	// >> useEffect
	useEffect(() => {
		if (selectedItem === false) {
			setSelectedItem(Math.floor(Math.random() * items.length));
		}
	}, []);

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<svg height="0" width="0">
				<defs>
					<clipPath id="svgPath">
						<path
							d="M139.419 2.08299C142.181 0.881768 145.16 0.260741 148.173 0.258411L468.446 0.0106265C474.52 0.00592729 479.45 4.92599 479.457 10.9999L479.914 403.187C479.924 411.639 475.089 419.348 467.476 423.018L354.35 477.554C351.377 478.988 348.119 479.733 344.818 479.736L11.557 479.994C5.48311 479.998 0.553477 475.078 0.546395 469.004L0.0894829 77.1206C0.0792661 68.3579 5.2713 60.427 13.3058 56.9326L139.419 2.08299Z"
							fill="#180A55"
						/>
					</clipPath>
				</defs>
			</svg>
			<div className={styles.insideDiv}>
				<div className={styles.leftSection}>
					<h1 className={styles.mainTitle}>
						The First Interoperable{' '}
						<span className={globalStyles.gradientText}>
							Layer 1 for NFTs
						</span>
					</h1>
					<Typography className={styles.mainDesc}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry&apos;s standard dummy text
					</Typography>
					<div className={styles.buttonsDiv}>
						<Button
							className={styles.leftButton}
							onClick={() => {
								openNewTab('launchpad');
							}}
						>
							<Typography>Visit Live Minting</Typography>
						</Button>
						<Button
							className={styles.rightButton}
							onClick={() => {
								openNewTab('marketplace');
							}}
						>
							<Typography>Visit Marketplace</Typography>
						</Button>
					</div>
				</div>
				<div className={styles.rightSection}>
					<div className={styles.rightSectionImage}>
						{selectedItem !== false ? (
							<Image
								src={`${getVariable['info'].imageURL}${items[selectedItem].attributes.image}`}
								placeholder="blur"
								blurDataURL={`${getVariable['info'].imageURL}${items[selectedItem].attributes.image}`}
								alt=""
								layout="fill"
								objectFit="cover"
								quality={100}
								//priority={true}
							/>
						) : (
							false
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
