// >> Modules
import { Button, Typography } from '@mui/material';
import getVariable from '../../../globalVariables';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetcher } from '../../../../lib/api';

// >> Styles
import useStyles from './oneCollectionMintStyle';
import useGlobalStyles from '../../../globalStyle';

// >> Script
function OneCollectionMint(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [mintData, setMintData] = useState(props.attributes);
	const [collectionItems, setCollectionItems] = useState([]);

	// >> useEffect
	useEffect(() => {
		async function fetchData() {
			const fetchedData = await fetcher(
				`${getVariable['info'].strapiURL}/collections/${mintData.collection.data.id}?populate=*&pagination[start]=0&pagination[limit]=100`
			).then((fetchedData) => {
				setCollectionItems(fetchedData.data.attributes.items.data);
			});
		}
		fetchData();
	}, []);

	// >> Render
	return (
		<div className={styles.oneCollectionMint}>
			<div className={styles.mintingDetails}></div>
			<div className={styles.collectionArts}></div>
		</div>
	);
}

export default OneCollectionMint;
