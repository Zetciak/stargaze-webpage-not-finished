// >> Modules
import getVariable from '../../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	oneCollectionMint: {
		width: '100%',
		height: '757px',
		position: 'relative',
		//background: 'rgba(0, 0, 0, 0.25)',
		borderRadius: '30px',
		overflow: 'hidden',
	},

	mintingDetails: {
		width: '546px',
		height: '100%',
		position: 'relative',
		borderTop: '1.5px solid rgba(255, 255, 255, 0.18)',
		borderLeft: '1.5px solid rgba(255, 255, 255, 0.18)',
		borderBottom: '1.5px solid rgba(255, 255, 255, 0.18)',
		borderRadius: '30px 0px 0px 30px',
		float: 'left',
		overflow: 'hidden',
	},

	collectionInfo: {
		width: '100%',
		height: '274px',
		position: 'relative',
	},

	collectionInfoInside: {
		position: 'relative',
		width: '90.5%',
		margin: '0 auto',
	},

	collectionBanner: {
		width: '100%',
		height: '144px',
		position: 'relative',
	},

	collectionLogo: {
		width: '132px',
		height: '132px',
		position: 'relative',
		background:
			'linear-gradient(180deg, rgba(96, 96, 96, 0.49) -30.3%, rgba(96, 96, 96, 0) 110.23%)',
		border: '1px solid rgba(255, 255, 255, 0.1)',
		backdropFilter: 'blur(5px)',
		borderRadius: '15px',
		float: 'left',
		marginTop: '-46px',
	},

	collectionStar: {
		width: '36px',
		height: '36px',
		position: 'absolute',
		right: '-10px',
		top: '-8px',
	},

	collectionLogoInside: {
		width: '109px',
		height: '109px',
		position: 'absolute',
		left: '50%',
		top: '50%',
		translate: '-50% -50%',
		borderRadius: '10px',
		overflow: 'hidden',
	},

	collectionTexts: {
		float: 'left',
		width: 'calc(100% - 132px - 24px)',
		position: 'relative',
		marginLeft: '24px',
		marginTop: '5px',
	},

	collectionName: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '20px',
		lineHeight: '32px',
		color: '#FFFFFF',
		float: 'left',
	},

	verifiedIcon: {
		width: '18px',
		height: '18px',
		float: 'left',
		marginLeft: '7px',
		marginTop: '7px',
	},

	collectionAuthor: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '12px',
		lineHeight: '16px',
		color: '#A7A7A7',
		letterSpacing: '0.2px',
		float: 'right',
		marginTop: '10px',
	},

	authorName: {
		color: '#ffffff',
		transition: 'opacity .5s',

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},
	},

	collectionDesc: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '12px',
		lineHeight: '130%',
		color: '#ffffff',
		letterSpacing: '0.2px',

		float: 'left',
		width: '100%',
		position: 'relative',
		marginTop: '-1px',
	},

	collectionSocials: {
		width: '100%',
		position: 'relative',
		float: 'left',
		marginTop: '12px',
	},

	collectionSocialsStripe: {
		width: '75%',
		height: '1px',
		background: 'rgba(255, 255, 255, 0.2)',
		position: 'relative',
		float: 'left',
		marginTop: '12px',
	},

	collectionSocialsInside: {
		float: 'left',
		width: '25%',
		position: 'relative',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
	},

	collectionSocial: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		opacity: '1',
		transition: 'opacity .5s',

		'&:first-child': {
			marginLeft: '18px',
		},

		'&:hover': {
			opacity: '.8',
		},
	},

	collectionSocialDisabled: {
		opacity: '.6',

		'&:hover': {
			opacity: '.6',
			cursor: 'not-allowed',
		},
	},

	mintingInfo: {
		width: '100%',
		position: 'relative',
		marginTop: '8px',
	},

	mintingInfoInside: {
		position: 'relative',
		width: '90.5%',
		margin: '0 auto',
	},

	mintingInfoInsideStripe: {
		width: '100%',
		height: '1px',
		background: 'rgba(255, 255, 255, 0.2)',
		marginTop: '20px',
	},

	visitMinterBtn: {
		width: '100%',
		height: '48px',
		position: 'relative',
		background: getVariable['colors'].mainGradient,
		boxShadow: 'none',
		borderRadius: '5px',
		marginTop: '47px',

		'& p': {
			fontFamily: 'General Sans',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '14px',
			lineHeight: '100%',
			letterSpacing: '0.2px',
			textTransform: 'none',
			color: '#FFFFFF',
			'z-index': '2',
		},

		'& span': {
			color: '#FFFFFF',
			'z-index': '2',
		},

		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			borderRadius: '5px',
			background: getVariable['colors'].mainGradientHover,
			'z-index': '1',
			opacity: '0',
			transition: `opacity .5s`,
		},

		'&:hover': {
			background: getVariable['colors'].mainGradient,
			boxShadow: 'none',

			'&:before': {
				opacity: '1',
			},
		},
	},

	collectionArts: {
		width: '942px',
		height: '100%',
		position: 'relative',
		background: 'rgba(0, 0, 0, 0.25)',
		borderRadius: '0px 30px 30px 0px',
		float: 'right',
		paddingLeft: '11px',

		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
	},

	oneMarqueeDiv: {
		position: 'relative',
		width: '33%',
		height: '100%',
		display: 'inline-block',
	},

	oneMarquee: {
		position: 'relative',
		width: '757px',
		height: '100%',
		transform: 'rotate(90deg)',
		marginLeft: '-230px',
	},
});

export default useStyles;
