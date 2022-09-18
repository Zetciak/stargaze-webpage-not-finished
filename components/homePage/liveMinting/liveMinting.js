// >> Modules
import { Button, Typography } from '@mui/material';
import getVariable from '../../globalVariables';
import Image from 'next/image';

// >> Styles
import useStyles from './liveMintingStyle';
import useGlobalStyles from '../../globalStyle';

// >> Script
function LiveMinting() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<h2 className={styles.mainTitle}>🚨 Live Minting</h2>
			</div>
		</div>
	);
}

export default LiveMinting;
