// >> Modules
import Image from 'next/image';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import getVariable from '../../../globalVariables';
import { useRouter } from 'next/router';

// >> Styles
import useStyles from './oneSearchElementStyle';
import useGlobalStyles from '../../../globalStyle';

// >> Images
import verifiedIcon from '../../../../public/images/verified.svg';
import defaultAvatar from '../../../../public/images/defaultAvatar.png';

// >> Script
function OneSearchElement(props) {
	const router = useRouter();
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [image, setImage] = useState(defaultAvatar.src);
	const [verified, setVerified] = useState(false);
	const [verifiedUser, setVerifiedUser] = useState(false);
	const [authorName, setAuthorName] = useState('');
	const [mainName, setMainName] = useState('');
	const [type, setType] = useState('');
	const [collectionName, setCollectionName] = useState('');

	// >> Functions
	// Checking variables
	const checkVariables = () => {
		if (props.type === 'Item') {
			setImage(
				`${getVariable['info'].imageURL}${props.attributes.image}`
			);
			setVerified(props.attributes.collection.data.attributes.verified);
			setType('Item');
			setCollectionName(props.attributes.collection.data.attributes.name);
			setMainName(props.attributes.name);
		} else if (props.type === 'Collection') {
			setImage(`${getVariable['info'].imageURL}${props.attributes.logo}`);
			setVerified(props.attributes.verified);
			setVerifiedUser(props.attributes.author.data.attributes.verified);
			setMainName(props.attributes.name);
			setType('Collection');
			if (props.attributes.author.data.attributes.name) {
				setAuthorName(props.attributes.author.data.attributes.name);
			} else {
				setAuthorName(
					`${props.attributes.author.data.attributes.address.slice(
						0,
						8
					)}...${props.attributes.author.data.attributes.address.slice(
						-3
					)}`
				);
			}
		} else if (props.type === 'User') {
			if (props.attributes.avatar.data) {
				setImage(
					`${getVariable['info'].imageURL}${props.attributes.avatar.data.attributes.image}`
				);
			}
			setVerified(props.attributes.verified);
			setType('User');

			if (props.attributes.name) {
				setMainName(props.attributes.name);
			} else {
				setMainName(
					`${props.attributes.address.slice(
						0,
						8
					)}...${props.attributes.address.slice(-13)}`
				);
			}
		}
	};

	// >> useEffect
	useEffect(() => {
		checkVariables();
	}, []);

	// >> Render
	return (
		<div className={styles.oneElement}>
			<div className={styles.imageDiv}>
				<Image
					src={image}
					placeholder="blur"
					blurDataURL={image}
					alt=""
					layout="fill"
					objectFit="cover"
					quality={100}
					//priority={true}
				/>
			</div>
			{props.type === 'Collection' ? (
				<div className={styles.leftTexts}>
					<div className={styles.bigTextDiv}>
						<Typography className={styles.collectionTopText}>
							<a
								onClick={() => {
									router.push(`./collection/${mainName}`);
								}}
							>
								{mainName}
							</a>
						</Typography>
						<div className={styles.bigStar} hidden={!verified}>
							<Image
								src={verifiedIcon}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
					</div>
					<div className={styles.smallTextDiv}>
						<Typography className={styles.collectionAuthorText}>
							by{' '}
							<a
								onClick={() => {
									router.push(
										`./profile/${props.attributes.author.data.attributes.address}`
									);
								}}
								className={styles.collectionAuthorTextHover}
							>
								{authorName}
							</a>
						</Typography>
						<div
							className={styles.smallStar}
							hidden={!verifiedUser}
						>
							<Image
								src={verifiedIcon}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.leftTexts}>
					<div className={styles.bigTextDiv}>
						<Typography
							className={`${styles.collectionTopText} ${styles.normalTopText}`}
						>
							<a
								onClick={() => {
									router.push(
										type === 'User'
											? `./profile/${props.attributes.address}`
											: `./collection/${collectionName}/${props.attributes.nft_id}`
									);
								}}
							>
								{mainName}
							</a>
						</Typography>
						<div
							className={`${styles.bigStar} ${styles.bigStarNormal}`}
							hidden={!verified}
						>
							<Image
								src={verifiedIcon}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								//priority={true}
							/>
						</div>
					</div>
				</div>
			)}
			<div className={styles.rightTypeDiv}>
				<Typography>{type}</Typography>
			</div>
		</div>
	);
}

export default OneSearchElement;
