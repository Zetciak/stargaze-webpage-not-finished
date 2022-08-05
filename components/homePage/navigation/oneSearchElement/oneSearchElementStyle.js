// >> Modulesnb
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	oneElement: {
		width: '100%',
		height: '48px',
		clear: 'both',
		position: 'relative',
		marginBottom: '32px',

		'&::before': {
			content: '""',
			width: '100%',
			height: '1px',
			position: 'absolute',
			background: '#FFFFFF33',
			top: '-17px',
		},

		'&:first-child': {
			marginTop: '50px',
		},

		'&:last-child': {
			marginBottom: '0px',
		},
	},

	logoDiv: {
		width: '48px',
		height: '48px',
		borderRadius: '12px',
		overflow: 'hidden',
		float: 'left',
	},

	nameDiv: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '26px',
		letterSpacing: '0.2px',
		color: '#FFFFFF',
		marginLeft: '20px',
		marginTop: '11px',
		float: 'left',
		overflow: 'hidden',

		opacity: '1',
		transition: 'opacity .5s',

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},
	},

	collectionAuthorName: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '12px',
		lineHeight: '16px',
		letterSpacing: '0.2px',
		color: 'rgba(255, 255, 255, 0.6)',
		marginLeft: '20px',
		marginTop: '2px',
		overflow: 'hidden',
		float: 'left',
		clear: 'both',
	},

	collectionAuthorNameHover: {
		opacity: '1',
		transition: 'opacity .5s',

		'&:hover': {
			opacity: '.7',
			cursor: 'pointer',
		},
	},

	nameDivCollection: {
		marginTop: '2px',
	},

	nameSectionCollection: {
		float: 'left',
	},

	typeDiv: {
		fontFamily: 'Readex Pro',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '20px',
		letterSpacing: '0.2px',
		color: 'rgba(255, 255, 255, 0.6)',
		marginTop: '12px',
		float: 'right',
		padding: '2px 8px',
		background: 'rgba(255, 255, 255, 0.1)',
		borderRadius: '4px',
	},

	verifiedNameLogo: {
		width: '22px',
		height: '22px',
		float: 'left',
		marginLeft: '8px',
		marginTop: '13px',
	},

	verifiedNameLogoCollection: {
		marginTop: '4px',
	},

	verifiedAuthorNameLogo: {
		width: '14px',
		height: '14px',
		float: 'left',
		marginLeft: '8px',
		marginTop: '3px',
	},
});

export default useStyles;
