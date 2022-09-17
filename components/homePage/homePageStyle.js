// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from '../globalVariables';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
	},

	backgroundDiv: {
		width: '100%',
		position: 'absolute',
		top: '0',
		left: '0',
		'z-index': '2',
		pointerEvents: 'none',
	},

	componentsDiv: {
		position: 'relative',
		'z-index': '3',
	},

	topLeftColor: {
		position: 'absolute',
		width: '1920px',
		height: '980px',
		top: '0px',
		left: '0px',
	},

	bgCircle1: {
		position: 'absolute',
		width: '1920px',
		height: '1215px',
		top: '531px',
		right: '0px',
	},

	bgCircle2: {
		position: 'absolute',
		width: '1920px',
		height: '1215px',
		top: '1458px',
		left: '0px',
		transform: 'rotate(180deg)',
	},

	bgCircle3: {
		position: 'absolute',
		width: '1920px',
		height: '1215px',
		top: '2385px',
		right: '0px',
	},

	bgCircle4: {
		position: 'absolute',
		width: '1920px',
		height: '1215px',
		top: '3312px',
		left: '0px',
		transform: 'rotate(180deg)',
	},

	bgCircle5: {
		position: 'absolute',
		width: '1920px',
		height: '1215px',
		top: '4239px',
		right: '0px',
	},

	bgCircle6: {
		position: 'absolute',
		width: '1920px',
		height: '1215px',
		top: '5166px',
		left: '0px',
		transform: 'rotate(180deg)',
	},

	bgCircle7: {
		position: 'absolute',
		width: '1920px',
		height: '1215px',
		top: '6093px',
		right: '0px',
	},

	bgDraw1: {
		position: 'absolute',
		width: '1881px',
		height: '1680px',
		top: '-320px',
		right: '-1230px',
		transform: 'rotate(150deg)',
		opacity: '.1',
	},

	bgDraw2: {
		position: 'absolute',
		width: '2163px',
		height: '1326px',
		top: '722px',
		left: '-1179.65px',
		transform: 'rotate(75deg)',
		opacity: '.1',
	},

	bgDraw3: {
		position: 'absolute',
		width: '2163px',
		height: '1326px',
		right: '-1850px',
		top: '2150px',
		transform: 'rotate(165deg)',
		opacity: '.1',
	},

	bgDraw4: {
		position: 'absolute',
		width: '2163px',
		height: '1326px',
		left: '-1680px',
		top: '3300px',
		transform: 'rotate(-60deg)',
		opacity: '.1',
	},

	bgDraw5: {
		position: 'absolute',
		width: '2163px',
		height: '1326px',
		right: '-1550px',
		top: '4400px',
		transform: 'rotate(-150deg)',
		opacity: '.1',
	},

	bgDraw6: {
		position: 'absolute',
		width: '2163px',
		height: '1326px',
		left: '-1680px',
		top: '5500px',
		transform: 'rotate(-60deg)',
		opacity: '.1',
	},

	bgDraw7: {
		position: 'absolute',
		width: '2163px',
		height: '1326px',
		right: '-1850px',
		top: '6000px',
		transform: 'rotate(165deg)',
		opacity: '.1',
	},

	// >> Responsive scale
	// 1920px
	['@media (max-width: 1920px)']: {
		bgDivInside: {
			width: '100%',
		},
	},
});

export default useStyles;
