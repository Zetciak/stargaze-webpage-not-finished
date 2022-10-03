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
		marginTop: '131px',
	},

	mainTitle: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '56px',
		lineHeight: '100%',
		letterSpacing: '-1px',
		color: 'rgba(255, 255, 255, 0.88)',
	},

	collectionsList: {
		marginTop: '48px',
		width: '100%',
		position: 'relative',
	},
});

export default useStyles;
