// >> Modules
import { Typography } from '@mui/material';
import getVariable from '../../../globalVariables';

// >> Styles
import useStyles from './oneCounterStyle';
import useGlobalStyles from '../../../globalStyle';

// >> Script
function OneCounter(props) {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.oneCounter} onClick={props.customClickEvent}>
			<Typography className={styles.counterName}>
				{props.tabName}
			</Typography>
			<Typography
				className={styles.counterNumbers}
				style={
					props.selectedTab === props.tabName
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
