// >> Modules
import { Button, Typography } from '@mui/material';
import getVariable from '../../../globalVariables';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetcher } from '../../../../lib/api';

// >> Components
import OneSocial from './oneSocial/oneSocial';
import MintingInfoLayer from './mintingInfoLayer/mintingInfoLayer';

// >> Styles
import useStyles from './oneCollectionMintStyle';
import useGlobalStyles from '../../../globalStyle';

// >> Images
import collectionStar from '../../../../public/images/collectionStar.png';
import verifiedIcon from '../../../../public/images/verified.svg';
import discord from '../../../../public/icons/discord.svg';
import twitter from '../../../../public/icons/twitter.svg';
import website from '../../../../public/icons/website.svg';

// >> Variable
const dateOptions = {
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	minute: 'numeric',
	hour: 'numeric',
};

// >> Script
function OneCollectionMint(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [mintData, setMintData] = useState(props.attributes);
	const [collectionInfo, setCollectionInfo] = useState([]);
	const [collectionItems, setCollectionItems] = useState([]);
	const [authorName, setAuthorName] = useState('');
	const [collectionName, setCollectionName] = useState('');
	const [collectionDesc, setCollectionDesc] = useState('');
	const [mintStatus, setMintStatus] = useState('');
	const [mintPrice, setMintPrice] = useState(0);
	const [mintStart, setMintStart] = useState('');
	const [mintEnd, setMintEnd] = useState('');
	const [collectionSocials, setCollectionSocials] = useState({});
	const [canRender, setCanRender] = useState(false);

	// >> useEffect
	useEffect(() => {
		async function fetchData() {
			const fetchedData = await fetcher(
				`${getVariable['info'].strapiURL}/collections/${mintData.collection.data.id}?populate=*&pagination[start]=0&pagination[limit]=100`
			).then((fetchedData) => {
				// >> Setting data
				setCollectionItems(fetchedData.data.attributes.items.data);
				setCollectionInfo(fetchedData.data.attributes);

				// >> Author name
				if (fetchedData.data.attributes.author.data.attributes.name) {
					setAuthorName(
						fetchedData.data.attributes.author.data.attributes.name
					);
				} else {
					setAuthorName(
						`${fetchedData.data.attributes.author.data.attributes.address.slice(
							0,
							8
						)}...${fetchedData.data.attributes.author.data.attributes.address.slice(
							-3
						)}`
					);
				}

				// >> Collection desc
				if (fetchedData.data.attributes.description.length < 150) {
					setCollectionDesc(fetchedData.data.attributes.description);
				} else {
					setCollectionDesc(
						`${fetchedData.data.attributes.description.slice(
							0,
							150
						)}...`
					);
				}

				// >> Collection name
				if (fetchedData.data.attributes.name.length < 15) {
					setCollectionName(fetchedData.data.attributes.name);
				} else {
					setCollectionName(
						`${fetchedData.data.attributes.name.slice(0, 13)}...`
					);
				}

				// >> Collection socials
				let localSocials = {};
				if (fetchedData.data.attributes.twitter) {
					localSocials.twitter = fetchedData.data.attributes.twitter;
				} else {
					localSocials.twitter = false;
				}
				if (fetchedData.data.attributes.discord) {
					localSocials.discord = fetchedData.data.attributes.discord;
				} else {
					localSocials.discord = false;
				}
				if (fetchedData.data.attributes.website) {
					localSocials.website = fetchedData.data.attributes.website;
				} else {
					localSocials.website = false;
				}
				setCollectionSocials(localSocials);

				// >> Mint info
				const nowDate = new Date();
				if (mintData.whitelist === true) {
					const wlEnd = new Date(mintData.wlEnd);
					if (nowDate < wlEnd) {
						setMintStatus('Whitelist');
						setMintPrice(mintData.wlPrice + ' $STARS');
						setMintStart(new Date(mintData.wlStart));
						setMintEnd(wlEnd);
					} else {
						setMintStatus('Public');
						setMintPrice(mintData.publicPrice + ' $STARS');
						setMintStart(new Date(mintData.publicStart));
						setMintEnd(new Date(mintData.publicEnd));
					}
				} else {
					setMintStatus('Public');
					setMintPrice(mintData.publicPrice + ' $STARS');
					setMintStart(new Date(mintData.publicStart));
					setMintEnd(new Date(mintData.publicEnd));
				}

				// Set can render
				setCanRender(true);

				// >> Delete it
				console.log(localSocials);
				console.log(mintData);
				console.log(fetchedData.data.attributes.items.data);
				console.log(fetchedData.data.attributes);
			});
		}
		fetchData();
	}, []);

	// >> Render
	if (canRender === true) {
		return (
			<div className={styles.oneCollectionMint}>
				<div className={styles.mintingDetails}>
					<div className={styles.collectionInfo}>
						<div className={styles.collectionBanner}>
							<Image
								src={`${getVariable['info'].imageURL}${mintData.collection.data.attributes.banner}`}
								placeholder="blur"
								blurDataURL={`${getVariable['info'].imageURL}${mintData.collection.data.attributes.banner}`}
								alt=""
								layout="fill"
								objectFit="cover"
								quality={100}
								//priority={true}
							/>
						</div>
						<div className={styles.collectionInfoInside}>
							<div className={styles.collectionLogo}>
								<div className={styles.collectionLogoInside}>
									<Image
										src={`${getVariable['info'].imageURL}${mintData.collection.data.attributes.logo}`}
										placeholder="blur"
										blurDataURL={`${getVariable['info'].imageURL}${mintData.collection.data.attributes.logo}`}
										alt=""
										layout="fill"
										objectFit="cover"
										quality={100}
										//priority={true}
									/>
								</div>
								<div className={styles.collectionStar}>
									<Image
										src={collectionStar}
										alt=""
										layout="responsive"
										objectFit="contain"
										quality={100}
										//priority={true}
									/>
								</div>
							</div>
							<div className={styles.collectionTexts}>
								<Typography className={styles.collectionName}>
									{collectionName}
								</Typography>
								<div
									className={styles.verifiedIcon}
									hidden={!collectionInfo.verified}
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
								<Typography className={styles.collectionAuthor}>
									created by:{' '}
									<span className={styles.authorName}>
										{authorName}
									</span>
								</Typography>
								<Typography className={styles.collectionDesc}>
									{collectionDesc}
								</Typography>
							</div>
							<div className={styles.collectionSocials}>
								<div
									className={styles.collectionSocialsStripe}
								></div>
								<div className={styles.collectionSocialsInside}>
									<OneSocial
										social={collectionSocials.discord}
										image={discord}
									/>
									<OneSocial
										social={collectionSocials.website}
										image={website}
									/>
									<OneSocial
										social={collectionSocials.twitter}
										image={twitter}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.mintingInfo}>
						<div className={styles.mintingInfoInside}>
							<MintingInfoLayer
								styleType={1}
								color1="#143317"
								color2="#2F9C3A"
								leftText="Mint Status:"
								rightText={mintStatus}
							/>
							<MintingInfoLayer
								styleType={1}
								color1="#553933"
								color2="#D88977"
								leftText="Price Mint:"
								rightText={mintPrice}
							/>
							<MintingInfoLayer
								styleType={2}
								leftText="Start Date:"
								rightText={mintStart.toLocaleString(
									'en-GB',
									dateOptions
								)}
							/>
							<MintingInfoLayer
								styleType={2}
								leftText="End Date:"
								rightText={mintEnd.toLocaleString(
									'en-GB',
									dateOptions
								)}
							/>
							<div
								className={styles.mintingInfoInsideStripe}
							></div>
						</div>
					</div>
				</div>
				<div className={styles.collectionArts}></div>
			</div>
		);
	}
}

export default OneCollectionMint;
