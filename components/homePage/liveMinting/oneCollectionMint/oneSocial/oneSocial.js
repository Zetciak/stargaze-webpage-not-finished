// >> Modules
import Image from 'next/image';

// >> Styles
import useStyles from './oneSocialStyle';

// >> Script
function OneSocial(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<a
			href={props.social !== false ? props.social : false}
			target="_blank"
			rel="noreferrer"
			className={
				props.social !== false
					? `${styles.collectionSocial}`
					: `${styles.collectionSocial} ${styles.collectionSocialDisabled}`
			}
		>
			<Image
				src={props.image}
				alt=""
				layout="responsive"
				objectFit="contain"
				quality={100}
				//priority={true}
			/>
		</a>
	);
}

export default OneSocial;
