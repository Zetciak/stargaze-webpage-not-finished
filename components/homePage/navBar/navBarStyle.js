// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		height: '96px',
		borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
		position: 'relative',
		float: 'left',
		'z-index': '5',
	},

	insideDiv: {
		width: '1488px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '0px',
	},

	logoDiv: {
		width: '200px',
		height: '51px',
		marginTop: '22px',
		position: 'relative',
		float: 'left',

		'&:hover': {
			cursor: 'pointer',
		},
	},

	searchDiv: {
		width: '597px',
		height: '46px',
		marginTop: '24px',
		marginLeft: '57px',
		position: 'relative',
		float: 'left',
		background: 'rgba(255, 255, 255, 0.07)',
		borderRadius: '8px',
		paddingTop: '9px',

		'& input': {
			color: '#ffffff',
			transition: 'opacity .5s',

			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '143%',
			letterSpacing: '0.2px',
		},
	},

	searchIcon: {
		width: '24px',
		height: 'auto',
		color: '#ffffff',
		marginLeft: '18px',
		marginTop: '-1px',
	},

	searchBar: {
		width: '100%',
		maxHeight: '650px',
		position: 'absolute',
		background: 'rgba(255, 255, 255, 0.07)',
		borderRadius: '8px',
		top: '50px',
		backdropFilter: 'blur(8px)',
		padding: '24px 16px',
		overflow: 'hidden',
		transition: 'opacity .3s',
	},

	searchBarCounters: {
		position: 'relative',
		width: '100%',
		height: '34px',
		borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
		overflow: 'hidden',
	},

	searchBarItems: {
		position: 'relative',
		width: '100%',
		maxHeight: '498px',
		overflow: 'hidden',
	},

	searchAllBtn: {
		width: '100%',
		height: '48px',
		position: 'relative',
		background: getVariable['colors'].mainGradient,
		boxShadow: 'none',
		marginTop: '8px',
		borderRadius: '8px',

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
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

	searchIcon2: {
		marginLeft: '0px',
		marginRight: '4px',
		marginTop: '0px',
		'z-index': '2',
	},

	rightElements: {
		marginTop: '22px',
		position: 'relative',
		float: 'right',
	},

	pageSelector: {
		position: 'relative',
		float: 'left',
		width: '153px',
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '8px',
		transition: 'background .5s, height .5s',

		'&:hover': {
			background: '#333333',

			'& .pageSelectorBottom2': {
				opacity: '1',
				pointerEvents: 'auto',
			},

			'& .pageSelectorArrow': {
				transform: 'rotate(90deg)',
			},
		},

		'& .pageSelectorBottom2': {
			opacity: '0',
			pointerEvents: 'none',
			transition: 'opacity .5s',
		},

		'& .pageSelectorArrow': {
			width: '13px',
			height: 'auto',
			color: '#ffffff',
			position: 'relative',
			marginLeft: '8px',
			marginTop: '3px',
			transform: 'rotate(-90deg)',
			transition: 'transform .5s',
		},
	},

	pageSelectorBottom: {
		position: 'absolute',
		width: '100%',
		height: '100px',
		top: '50px',
		backdropFilter: 'blur(8px)',
	},

	pageSelectorBottomInside: {
		width: '100%',
		height: '100%',
		position: 'relative',
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '8px',
		marginTop: '4px',
		transition: 'opacity .3s',
	},

	pageSelectorMainBtn: {
		width: '100%',
		height: '50px',
		position: 'relative',
		background: 'none',
		boxShadow: 'none',
		borderRadius: '8px',
		transition: 'background .5s',

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '100%',
			letterSpacing: '0.2px',
			textTransform: 'none',
			color: '#FFFFFF',
			'z-index': '2',
		},

		'&:hover': {
			background: 'none',
			boxShadow: 'none',
		},

		'& span': {
			color: '#FFFFFF00',
		},
	},

	pageSelectorSecondBtn: {
		width: '100%',
		height: '50px',
		position: 'relative',
		background: 'rgba(255, 255, 255, 0)',
		boxShadow: 'none',
		//borderRadius: '8px',
		transition: 'background .5s',

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '100%',
			letterSpacing: '0.2px',
			textTransform: 'none',
			color: '#FFFFFF',
			'z-index': '2',
		},

		'&:hover': {
			background: 'rgba(255, 255, 255, 0.05)',
			boxShadow: 'none',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	settings: {
		width: '50px',
		height: '50px',
		minWidth: '10px',
		position: 'relative',
		background: 'rgba(255, 255, 255, 0.1)',
		boxShadow: 'none',
		borderRadius: '8px',
		marginLeft: '32px',
		float: 'left',
		transition: 'background .5s',

		'&:hover': {
			background: '#333333',
			boxShadow: 'none',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	profile: {
		width: '50px',
		height: '50px',
		minWidth: '10px',
		position: 'relative',
		background: 'rgba(255, 255, 255, 0.1)',
		boxShadow: 'none',
		borderRadius: '8px',
		marginLeft: '32px',
		float: 'left',
		transition: 'background .5s',

		'&:hover': {
			background: '#333333',
			boxShadow: 'none',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	connectWalletBtn: {
		width: '178px',
		height: '50px',
		position: 'relative',
		background: getVariable['colors'].mainGradient,
		boxShadow: 'none',
		borderRadius: '8px',
		marginLeft: '32px',
		float: 'left',

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
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

	connectWalletIcon: {
		width: '20px',
		height: 'auto',
		color: '#ffffff',
		position: 'relative',
		marginRight: '6px',
		'z-index': '2',
	},

	settingsIcon: {
		width: '24px',
		height: 'auto',
		color: '#ffffff',
		position: 'relative',
	},

	profileIcon: {
		width: '24px',
		height: 'auto',
		color: '#ffffff',
		position: 'relative',
	},

	toastStyle: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
	},
});

export default useStyles;
