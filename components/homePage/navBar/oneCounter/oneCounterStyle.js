// >> Modules
import getVariable from '../../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	oneCounter: {
		marginLeft: '32px',
		float: 'left',
		opacity: '1',
		transition: 'opacity .5s',
		position: 'relative',

		'&:first-child': {
			marginLeft: '0px',
		},

		'&:hover': {
			opacity: '.8',
			cursor: 'pointer',
		},
	},

	counterName: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '143%',
		letterSpacing: '0.2px',
		color: '#FFFFFF',
		marginTop: '1px',
		float: 'left',
	},

	counterNumbers: {
		fontFamily: 'GeneralSans-Variable',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '157%',
		letterSpacing: '0.03em',
		color: '#FFFFFF',
		float: 'left',
		marginLeft: '8px',
		//background: '#D88977',
		borderRadius: '4px',
		padding: '0 6px',
		transition: 'background .3s',
	},
});

export default useStyles;
