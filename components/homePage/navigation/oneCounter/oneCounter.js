// >> Modules
import { Typography } from '@mui/material';

// >> Styles
import useStyles from './oneCounterStyle';

//Script
function OneCounter(props) {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<div className={styles.oneCounter} onClick={props.customClickEvent}>
			<Typography className={styles.counterName}>
				{props.tabName}
			</Typography>
			<Typography
				className={styles.counterNumbers}
				style={
					props.tabGet === props.tabName
						? { background: '#D88977' }
						: {
								background: 'rgba(255, 255, 255, 0.1)',
						  }
				}
			>
				{props.tabCounter}
			</Typography>
		</div>
	);
}

export default OneCounter;
