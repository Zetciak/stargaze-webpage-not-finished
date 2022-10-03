// >> Modules
import { Typography } from '@mui/material';
import getVariable from '../../../../globalVariables';
import Image from 'next/image';

// >> Styles
import useStyles from './oneArtCardStyle';

// >> Images
import verifiedIcon from '../../../../../public/images/verified.svg';

// >> Script
function OneArtCard(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.oneArtCard}>
			<div className={styles.imageDiv}>
				<Image
					src={`${getVariable['info'].imageURL}${props.art.image}`}
					placeholder="blur"
					blurDataURL={`${getVariable['info'].imageURLSmall}${props.art.image}`}
					alt=""
					layout="fill"
					objectFit="cover"
					quality={100}
					//priority={true}
				/>
			</div>
			<div className={styles.bottomTexts}>
				<Typography className={styles.leftName}>
					{props.collectionName}
				</Typography>
				<div className={styles.verifiedIcon} hidden={!props.verified}>
					<Image
						src={verifiedIcon}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						//priority={true}
					/>
				</div>
				<Typography className={styles.rightName}>
					#{props.art.nft_id}
				</Typography>
			</div>
		</div>
	);
}

export default OneArtCard;
