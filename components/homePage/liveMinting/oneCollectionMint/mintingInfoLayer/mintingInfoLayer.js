// >> Modules
import { Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './mintingInfoLayerStyle';

// >> Script
function MintingInfoLayer(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.mintingInfoLayer}>
			<Typography className={styles.mintingInfoLeftText}>
				{props.leftText}
			</Typography>
			{props.styleType === 1 ? (
				<div
					className={styles.mintingInfoRightText}
					style={{
						background: props.color1,
						borderColor: props.color2,
					}}
				>
					<div
						className={styles.mintingInfoCircle}
						style={{ background: props.color2 }}
					></div>
					<Typography>{props.rightText}</Typography>
				</div>
			) : (
				<div className={styles.mintingInfoRightText2}>
					<Typography>{props.rightText}</Typography>
				</div>
			)}
		</div>
	);
}

export default MintingInfoLayer;
