// >> Modules
import getVariable from '../../globalVariables';
import { useState, useEffect } from 'react';
import { getMintings } from '../../../lib/dataFunctions';

// >> Styles
import useStyles from './liveMintingStyle';
import useGlobalStyles from '../../globalStyle';

// >> Components
import OneCollectionMint from './oneCollectionMint/oneCollectionMint';

// >> Script
function LiveMinting(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [mintings, setMintings] = useState([]);

	// >> useEffect
	useEffect(() => {
		async function getMintingsData() {
			setMintings(await getMintings(props.mintings));
		}
		getMintingsData();
	}, []);

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			{mintings.length > 0 ? (
				<div className={styles.insideDiv}>
					<h2 className={styles.mainTitle}>🚨 Live Minting</h2>
					<div className={styles.mintingList}>
						{mintings.map((element, index) => {
							return (
								<OneCollectionMint
									{...element}
									key={`${index}_${element.id}_${element.attributes.collection.data.attributes.name}`}
								/>
							);
						})}
					</div>
				</div>
			) : (
				false
			)}
		</div>
	);
}

export default LiveMinting;
