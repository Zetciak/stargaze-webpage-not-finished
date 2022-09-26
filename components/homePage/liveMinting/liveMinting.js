// >> Modules
import getVariable from '../../globalVariables';
import { useState, useEffect } from 'react';

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
		let mintingsLocal = [];
		props.mintings.data.map((element, index) => {
			if (mintingsLocal.length === 0) {
				const dateNow = new Date();
				const wlStart = new Date(element.attributes.wlStart);
				const publicStart = new Date(element.attributes.publicStart);
				const publicEnd = new Date(element.attributes.publicEnd);
				if (element.attributes.whitelist === true) {
					if (dateNow < publicEnd) {
						if (dateNow >= wlStart) {
							mintingsLocal.push(element);
						}
					}
				} else {
					if (dateNow < publicEnd) {
						if (dateNow >= publicStart) {
							mintingsLocal.push(element);
						}
					}
				}
			}
		});
		setMintings(mintingsLocal);
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
