// >> Modules
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-scroll';

// >> Styles
import useStyles from './landingStyle.js';

//Script
function Landing() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return <div className={styles.mainDiv}>landing</div>;
}

export default Landing;
