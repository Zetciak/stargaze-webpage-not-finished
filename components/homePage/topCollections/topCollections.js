// >> Modules
import getVariable from '../../globalVariables';
import { useState, useEffect } from 'react';

// >> Styles
import useStyles from './topCollectionsStyle';
import useGlobalStyles from '../../globalStyle';
import { getTop5Collections } from '../../../lib/dataFunctions';

// >> Components
import OneTopCollection from './oneTopCollection/oneTopCollection';

// >> Script
function TopCollections(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [collections, setCollections] = useState([]);

	// >> useEffect
	useEffect(() => {
		async function getTopCollections() {
			setCollections(await getTop5Collections(props.collections));
		}
		getTopCollections();
	}, []);

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			{collections.length > 0 ? (
				<div className={styles.insideDiv}>
					<h2 className={styles.mainTitle}>🔥 Top Collections</h2>
					<div className={styles.collectionsList}>
						{collections.map((element, index) => {
							console.log(element);
							return <OneTopCollection key={index} />;
						})}
					</div>
				</div>
			) : (
				false
			)}
		</div>
	);
}

export default TopCollections;
