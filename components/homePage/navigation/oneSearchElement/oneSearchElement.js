// >> Modules
import Image from 'next/image';

// >> Styles
import useStyles from './oneSearchElementStyle.js';

// >> Variables
import allList from '../../../../data/allDatas.js';

// >> Images
import verified from '../../../../public/images/verified.svg';

//Script
function OneSearchElement(props) {
	// >> Style
	const styles = useStyles();

	// >> Variables
	let name = props.table.type === 'User' ? props.table.name : props.name;
	let author =
		props.table.type === 'Collection' ? allList[props.table.author] : '';

	// >> Render
	return (
		<div className={styles.oneElement}>
			<div className={styles.logoDiv}>
				<Image
					src={props.table.icon}
					alt=""
					layout="responsive"
					objectFit="contain"
					quality={100}
					priority={true}
				/>
			</div>
			{props.table.type === 'Collection' ? (
				<div className={styles.nameSectionCollection}>
					<div
						className={`${styles.nameDiv} ${styles.nameDivCollection}`}
					>
						{name.length > 32
							? name.substring(0, 31) + '...'
							: name.substring(0, 32)}
					</div>
					{props.table.verifiedName === true ? (
						<div
							className={`${styles.verifiedNameLogo} ${styles.verifiedNameLogoCollection}`}
						>
							<Image
								src={verified}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					) : (
						false
					)}
					<div className={styles.collectionAuthorName}>
						by{' '}
						<span className={styles.collectionAuthorNameHover}>
							{author.name.length > 49
								? author.name.substring(0, 48) + '...'
								: author.name.substring(0, 49)}
						</span>
					</div>
					{author.verifiedName === true ? (
						<div className={styles.verifiedAuthorNameLogo}>
							<Image
								src={verified}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					) : (
						false
					)}
				</div>
			) : (
				<>
					<div className={styles.nameDiv}>
						{name.length > 32
							? name.substring(0, 31) + '...'
							: name.substring(0, 32)}
					</div>
					{props.table.verifiedName === true ? (
						<div className={styles.verifiedNameLogo}>
							<Image
								src={verified}
								alt=""
								layout="responsive"
								objectFit="contain"
								quality={100}
								priority={true}
							/>
						</div>
					) : (
						false
					)}
				</>
			)}

			<div className={styles.typeDiv}>{props.table.type}</div>
		</div>
	);
}

export default OneSearchElement;
