// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		float: 'left',
		'z-index': '4',
	},

	insideDiv: {
		width: '1488px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '60px',
	},

	leftSection: {
		float: 'left',
		position: 'relative',
		width: '748px',
	},

	rightSection: {
		float: 'right',
		marginRight: '90px',
		position: 'relative',
	},

	rightSectionImage: {
		width: '480px',
		height: '480px',
		position: 'absolute',
		top: '10px',
		right: '0px',
		'clip-path': 'url(#svgPath)',
	},

	mainTitle: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '72px',
		lineHeight: '110%',
		letterSpacing: '-1px',
		color: 'rgba(255, 255, 255, 0.88)',
	},

	mainDesc: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '144%',
		letterSpacing: '0.2px',
		color: '#ffffff',
		width: '628px',
		marginTop: '-24px',
		paddingLeft: '24px',
		position: 'relative',

		'&:before': {
			content: "''",
			position: 'absolute',
			width: '1px',
			height: '100%',
			background: getVariable['colors'].mainGradientRotate,
			left: '0px',
		},
	},

	buttonsDiv: {
		marginTop: '48px',
		position: 'relative',
	},

	leftButton: {
		width: '167px',
		height: '48px',
		position: 'relative',
		background: getVariable['colors'].mainGradient,
		boxShadow: 'none',
		borderRadius: '8px',

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
			borderRadius: '8px',
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

	rightButton: {
		width: '170px',
		height: '48px',
		position: 'relative',
		background: 'rgba(255, 255, 255, 0.1)',
		boxShadow: 'none',
		borderRadius: '8px',
		marginLeft: '32px',

		'& p': {
			fontFamily: 'General Sans',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '14px',
			lineHeight: '100%',
			letterSpacing: '0.2px',
			textTransform: 'none',
			color: '#FFFFFF',
		},

		'& span': {
			color: '#FFFFFF',
		},

		'&:hover': {
			background: '#333333',
			boxShadow: 'none',
		},
	},
});

export default useStyles;
