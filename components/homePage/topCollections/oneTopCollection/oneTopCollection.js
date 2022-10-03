// >> Modules
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// >> Styles
import useStyles from './oneTopCollectionStyle';

// >> Images
import verifiedIcon from '../../../../public/images/verified.svg';

// >> Script
function OneTopCollection(props) {
	// >> Style
	const styles = useStyles();

	// >> Variables
	const [collectionData, setCollectionData] = useState(props.attributes);

	// >> useEffect
	useEffect(() => {
		console.log('sperma');
	}, []);

	// >> Render
	return <div className={styles.oneTopCollectionDiv}>sperma</div>;
}

export default OneTopCollection;
