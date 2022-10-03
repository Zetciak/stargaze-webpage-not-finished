// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	oneArtCard: {
		position: 'relative',
		width: '292px',
		height: '330px',
		padding: '16px',
		background: 'rgba(255, 255, 255, 0.07)',
		borderRadius: '28px',
		marginLeft: '60px',
		transform: 'rotate(-90deg)',
	},

	imageDiv: {
		width: '100%',
		height: '258px',
		position: 'relative',
		borderRadius: '28px 28px 0px 0px',
		overflow: 'hidden',
	},

	bottomTexts: {
		marginTop: '10px',
		position: 'relative',
	},

	leftName: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#FFFFFF',
		float: 'left',
	},

	rightName: {
		fontFamily: 'Clash Grotesk',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#FFFFFF',
		float: 'right',
	},

	verifiedIcon: {
		width: '16px',
		height: '16px',
		float: 'left',
		marginLeft: '6px',
	},
});

export default useStyles;
