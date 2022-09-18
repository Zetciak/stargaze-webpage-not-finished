// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from './globalVariables';

// >> Styling
const useGlobalStyles = makeStyles({
	container: {
		width: '100%',
		minHeight: '6604px',
		position: 'relative',
		overflow: 'hidden',
		background: getVariable['colors']['backgroundColor'],
	},

	gradientText: {
		// Color
		color: '#282828',
		background:
			'linear-gradient(90deg, #6486FF 12.5%, #8256AC 25%, #D76A7D 37.5%, #FFA86F 50%, #FFA86F 62.5%, #D76A7D 75%, #8256AC 87.5%, #6486FF 100%)',
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		backgroundSize: '200%',
		animation: '8s linear 0s infinite normal none running $gradient',
	},

	'@keyframes gradient': {
		'100%': {
			backgroundPosition: '200% center',
		},
	},
});

export default useGlobalStyles;
