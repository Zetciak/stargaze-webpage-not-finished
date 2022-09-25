// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	collectionSocial: {
		width: '24px',
		height: '24px',
		display: 'inline-block',
		opacity: '1',
		transition: 'opacity .5s',

		'&:first-child': {
			marginLeft: '18px',
		},

		'&:hover': {
			opacity: '.8',
		},
	},

	collectionSocialDisabled: {
		opacity: '.6',

		'&:hover': {
			opacity: '.6',
			cursor: 'not-allowed',
		},
	},
});

export default useStyles;
