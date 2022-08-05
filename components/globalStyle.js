// >> Modules
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	container: {
		width: '100%',
		minHeight: '5056px',
		position: 'relative',
		overflow: 'hidden',
		background: '#151517',
	},

	bgEffects: {
		position: 'absolute',
		width: '100%',
		minHeight: '5056px',
		pointerEvents: 'none',
		'z-index': '0',
	},

	bgColors: {
		'z-index': '2',
		position: 'relative',
	},

	bgShapes: {
		'z-index': '1',
		position: 'relative',
	},

	bgColor: {
		position: 'absolute',
		width: '100%',
		height: 'auto',
	},

	rotateSideColor: {
		transform: 'rotate(180deg)',
	},

	topLeftColor: {
		top: '0px',
		left: '0',
	},

	firstSideColor: {
		top: '531px',
		right: '0',
	},

	secondSideColor: {
		top: '1458px',
		left: '0',
	},

	thirdSideColor: {
		top: '2385px',
		right: '0',
	},

	fourthSideColor: {
		top: '3312px',
		left: '0',
	},

	fifthSideColor: {
		top: '4239px',
		right: '0',
	},

	bgShape: {
		position: 'absolute',
		opacity: '.1',
	},

	firstBgDraw: {
		width: '1881px',
		height: '1680px',
		right: '-1230px',
		top: '-320px',
		transform: 'rotate(150deg)',
	},

	secondBgDraw: {
		width: '2163px',
		height: '1326px',
		left: '-1179.65px',
		top: '722px',
		transform: 'rotate(75deg)',
	},

	thirdBgDraw: {
		width: '2163px',
		height: '1326px',
		right: '-1850px',
		top: '2150px',
		transform: 'rotate(165deg)',
	},

	fourthBgDraw: {
		width: '2163px',
		height: '1326px',
		left: '-1680px',
		top: '3300px',
		transform: 'rotate(-60deg)',
	},

	fifthBgDraw: {
		width: '2163px',
		height: '1326px',
		right: '-1550px',
		top: '4400px',
		transform: 'rotate(-150deg)',
	},

	// <<<<<<<<<<<<<<<<<<<< Responsive scale
	// 2400px
	['@media (min-width: 2400px)']: {
		bgColor: {
			width: '2400px',
		},
	},
});

export default useStyles;
