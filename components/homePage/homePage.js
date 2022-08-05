// >> Modules
import Image from 'next/image';
import Head from 'next/head';

// >> Styles
import useStyles from './homePageStyle';

// >> Components
import Navigation from './navigation/navigation.js';
import Landing from './landing/landing.js';

//Script
function HomePage() {
	// >> Style
	const styles = useStyles();

	// >> Render
	return (
		<>
			<Head>
				<title>Stargaze - Landing Page</title>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#d26583" />
				<meta
					name="keywords"
					content="NFT,CRYPTO,BITCOIN,ETH,ETHEREUM,ETH,NFTPROJECT,LAUNCHPAD,NFTLAUNCHPAD"
				/>
				<meta
					name="description"
					content="The First Interoperable Layer 1 for NFTs."
				/>

				<meta
					property="og:url"
					content="https://stargaze.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Stargaze - Landing Page" />
				<meta
					property="og:description"
					content="The First Interoperable Layer 1 for NFTs."
				/>
				<meta
					property="og:image"
					content="https://i.imgur.com/lhMKmBl.png"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="stargaze.vercel.app" />
				<meta
					property="twitter:url"
					content="https://stargaze.vercel.app/"
				/>
				<meta name="twitter:title" content="Stargaze - Landing Page" />
				<meta
					name="twitter:description"
					content="The First Interoperable Layer 1 for NFTs."
				/>
				<meta
					name="twitter:image"
					content="https://i.imgur.com/lhMKmBl.png"
				/>
			</Head>
			<div className={styles.mainDiv}>
				<Navigation />
				{/*<Landing />*/}
			</div>
		</>
	);
}

export default HomePage;
