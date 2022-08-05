// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
	},

	topElements: {
		position: 'relative',
		width: '1484px',
		margin: '0 auto',
		marginTop: '22px',
		'z-index': '3',
	},

	logoDiv: {
		float: 'left',
		width: '200px',
		height: '51px',
		position: 'relative',
	},

	searchDiv: {
		background: 'rgba(255, 255, 255, 0.07)',
		borderRadius: '8px',
		width: '597px',
		position: 'relative',
		height: '46px',
		float: 'left',
		marginLeft: '57px',
		paddingTop: '9px',
		marginTop: '2px',

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
		backdropFilter: 'blur(20px)',
		padding: '24px 16px',
		overflow: 'hidden',
		transition: 'opacity .3s',
	},

	searchBarCounters: {
		//marginLeft: '16px',
		//marginTop: '24px',
		position: 'relative',
	},

	searchBarItems: {
		position: 'relative',
		width: '100%',
		maxHeight: '498px',
		overflow: 'hidden',
	},

	rightElements: {
		float: 'right',
	},

	bottomLine: {
		background: '#ffffff',
		opacity: '.25',
		width: '100%',
		height: '1px',
		marginTop: '22px',
		float: 'left',
		'z-index': '2',
	},

	searchBarButtonDiv: {
		width: '100%',
		height: '48px',
		position: 'relative',
		marginTop: '28px',
	},

	searchBarButton: {
		width: '100%',
		height: '100%',
		background: 'linear-gradient(90deg, #7150AB -11.39%, #FD9D65 114.72%)',
		boxShadow: '0px 0px 0px #00000000',
		borderRadius: '8px',
		overflow: 'hidden',

		'& .searchBarButtonbGDiv': {
			width: '100%',
			height: '100%',
			position: 'absolute',
			background:
				'linear-gradient(90deg, #FD9D65 -11.39%, #7150AB 114.72%)',
			transition: 'opacity .7s',
			opacity: '1',
			'z-index': '1',
		},

		'&:hover': {
			background:
				'linear-gradient(90deg, #7150AB -11.39%, #FD9D65 114.72%)',
			boxShadow: '0px 0px 0px #00000000',

			'& .searchBarButtonbGDiv': {
				opacity: '0',
			},
		},

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '24px',
			letterSpacing: '0.2px',
			textTransform: 'none',
			color: '#FFFFFF',
			'z-index': '2',
		},

		'& span': {
			color: '#FFFFFF',
		},
	},

	searchBarButtonIcon: {
		width: '22px',
		height: 'auto',
		color: '#FFFFFF',
		marginRight: '6px',
		float: 'left',
	},
});

export default useStyles;
