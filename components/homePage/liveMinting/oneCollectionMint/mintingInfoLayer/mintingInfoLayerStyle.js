// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	mintingInfoLayer: {
		position: 'relative',
		width: '100%',
		height: '28px',
		marginTop: '8px',
	},

	mintingInfoLeftText: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '14px',
		lineHeight: '100%',
		color: 'rgba(255, 255, 255, 0.6)',
		float: 'left',
	},

	mintingInfoRightText: {
		float: 'right',
		width: 'auto',
		height: '100%',
		border: '1px solid',
		borderRadius: '3px',
		padding: '9px',

		'& p': {
			fontFamily: 'Readex Pro',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '12px',
			lineHeight: '100%',
			color: '#FFFFFF',
			float: 'left',
			marginLeft: '6px',
			marginTop: '-2px',
		},
	},

	mintingInfoRightText2: {
		float: 'right',
		width: 'auto',
		height: '100%',
		marginTop: '3px',

		'& p': {
			fontFamily: 'Clash Grotesk',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '14px',
			lineHeight: '100%',
			color: '#FFFFFF',
		},
	},

	mintingInfoCircle: {
		width: '7px',
		height: '7px',
		borderRadius: '100%',
		float: 'left',
	},
});

export default useStyles;
