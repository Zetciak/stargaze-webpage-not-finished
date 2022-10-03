// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	oneStripe: {
		position: 'relative',
		width: '100%',
		height: '66px',
		marginTop: '26px',
	},

	rightBox: {
		position: 'relative',
		float: 'right',
		width: 'auto',
		height: '27px',
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

	rightBoxCircle: {
		width: '7px',
		height: '7px',
		borderRadius: '100%',
		float: 'left',
	},

	longStripe: {
		position: 'relative',
		float: 'left',
		marginTop: '10px',
		width: '100%',
		height: '8px',
		background: '#323232',
		borderRadius: '25px',
	},

	longStripeInside: {
		height: '100%',
		maxWidth: '100%',
		position: 'relative',
		background: 'linear-gradient(90deg, #7150AB -11.39%, #FD9D65 114.72%)',
		borderRadius: '25px',
	},

	longStripeInfo: {
		position: 'relative',
		float: 'left',
		marginTop: '7px',
		width: '100%',
	},

	leftStripeInfo: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '13px',
		lineHeight: '100%',
		color: '#A6A6A7',
		float: 'left',
	},

	rightStripeInfo: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '13px',
		lineHeight: '100%',
		color: '#ffffff',
		float: 'right',
	},

	rightStripeInfoGray: {
		color: '#A6A6A7',
	},
});

export default useStyles;
