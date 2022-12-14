// >> Modules
import { useEffect } from 'react';
import getVariable from '../components/globalVariables';
import { fetcher } from '../lib/api';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import useGlobalStyles from '../components/globalStyle';

// >> Pages
import HomePage from '../components/homePage/homePage';

// >> Script
export default function Home(props) {
	// >> Style
	const styles = useGlobalStyles();

	// >> Functions
	useEffect(() => {
		Aos.init({ duration: 700, once: true });
	}, []);

	// >> Render
	return (
		<div className={styles.container}>
			<HomePage {...props} />
		</div>
	);
}

// >> Script
export async function getStaticProps() {
	return {
		props: {
			members: await fetcher(
				`${getVariable['info'].strapiURL}/members?populate=*&pagination[start]=0&pagination[limit]=100`
			),
			items: await fetcher(
				`${getVariable['info'].strapiURL}/items?populate=*&pagination[start]=0&pagination[limit]=100`
			),
			collections: await fetcher(
				`${getVariable['info'].strapiURL}/collections?populate=*&pagination[start]=0&pagination[limit]=100`
			),
			mintings: await fetcher(
				`${getVariable['info'].strapiURL}/mintings?populate=*&pagination[start]=0&pagination[limit]=100`
			),
		},
	};
}
