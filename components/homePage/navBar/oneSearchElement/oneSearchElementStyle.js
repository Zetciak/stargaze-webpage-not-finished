// >> Modules
import getVariable from '../../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	oneElement: {
		width: '100%',
		height: '76px',
		borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
		position: 'relative',
		overflow: 'hidden',

		'&:last-child': {
			borderBottom: 'none',
		},
	},

	imageDiv: {
		width: '48px',
		height: '48px',
		marginTop: '14px',
		position: 'relative',
		overflow: 'hidden',
		borderRadius: '12px',
		float: 'left',
	},

	leftTexts: {
		position: 'relative',
		float: 'left',
		marginLeft: '20px',
	},

	bigTextDiv: {
		position: 'relative',
		marginTop: '16px',
	},

	smallTextDiv: {
		position: 'relative',
		marginTop: '2px',
		clear: 'both',
	},

	bigStar: {
		position: 'relative',
		width: '22px',
		height: '22px',
		float: 'left',
		marginLeft: '8px',
		marginTop: '2px',
	},

	bigStarNormal: {
		marginTop: '11px',
	},

	smallStar: {
		position: 'relative',
		width: '14px',
		height: '14px',
		float: 'left',
		marginLeft: '4px',
		marginTop: '1px',
	},

	collectionTopText: {
		position: 'relative',
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '143%',
		letterSpacing: '0.2px',
		color: '#ffffff',
		float: 'left',

		opacity: '1',
		transition: 'opacity .5s',

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},
	},

	normalTopText: {
		marginTop: '10px',
	},

	collectionAuthorText: {
		clear: 'both',
		position: 'relative',
		float: 'left',

		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '12px',
		lineHeight: '133%',
		letterSpacing: '0.2px',
		color: 'rgba(255, 255, 255, 0.6)',
	},

	collectionAuthorTextHover: {
		opacity: '1',
		transition: 'opacity .5s',

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},
	},

	rightTypeDiv: {
		position: 'relative',
		float: 'right',
		padding: '2px 8px',
		marginTop: '28px',
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '4px',

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '143%',
			letterSpacing: '0.2px',
			color: 'rgba(255, 255, 255, 0.6)',
		},
	},
});

export default useStyles;
