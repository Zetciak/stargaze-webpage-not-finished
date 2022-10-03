// >> Modules
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// >> Styles
import useStyles from './mintingInfoStripeStyle';

// >> Script
function MintingInfoStripe(props) {
	// >> Style
	const styles = useStyles();

	// >> Variables
	const [color1, setColor1] = useState('');
	const [color2, setColor2] = useState('');
	const [rightBoxText, setRightBoxText] = useState('');
	const [mintedPercent, setMintedPercent] = useState(0);

	// >> useEffect
	useEffect(() => {
		if (props.styleType === 'wl' || props.styleType === 'noWl') {
			setColor1('#143317');
			setColor2('#2F9C3A');
			setRightBoxText('Whitelist');
		} else if (props.styleType === 'global') {
			setColor1('#5C512A');
			setColor2('#E6BD2F');
			setRightBoxText('Globally');
		}
		if (props.maxMint === 0) {
			setMintedPercent(0);
		} else {
			setMintedPercent(((props.minted / props.maxMint) * 100).toFixed(2));
		}
	}, [props]);

	// >> Render
	return (
		<div
			className={styles.oneStripe}
			style={props.styleType === 'noWl' ? { opacity: '.5' } : {}}
		>
			<div
				className={styles.rightBox}
				style={{
					background: color1,
					borderColor: color2,
				}}
			>
				<div
					className={styles.rightBoxCircle}
					style={{ background: color2 }}
				></div>
				<Typography>{rightBoxText}</Typography>
			</div>
			<div className={styles.longStripe}>
				<div
					className={styles.longStripeInside}
					style={{ width: `${mintedPercent}%` }}
				></div>
			</div>
			<div className={styles.longStripeInfo}>
				<Typography className={styles.leftStripeInfo}>
					Total minted:
				</Typography>
				<Typography className={styles.rightStripeInfo}>
					<span className={styles.rightStripeInfoGray}>
						({mintedPercent}%)
					</span>{' '}
					{props.minted}/{props.maxMint}
				</Typography>
			</div>
		</div>
	);
}

export default MintingInfoStripe;
