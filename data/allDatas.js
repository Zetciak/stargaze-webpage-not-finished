// >> Dooplicator
import DooplicatorLogo from '../public/collections/Dooplicator/logo.png';
import DooplicatorBanner from '../public/collections/Dooplicator/banner.png';
import DooplicatorArt from '../public/collections/Dooplicator/arts/1.gif';

// >> CLONE X - X TAKASHI MURAKAMI
import cloneXLogo from '../public/collections/CLONE X - X TAKASHI MURAKAMI/logo.png';
import cloneXBanner from '../public/collections/CLONE X - X TAKASHI MURAKAMI/banner.png';

// >> Cope Bears
import copeBearsLogo from '../public/collections/Cope Bears/logo.png';
import copeBearsBanner from '../public/collections/Cope Bears/banner.png';

// >> Doodles
import DoodlesLogo from '../public/collections/Doodles/logo.png';
import DoodlesBanner from '../public/collections/Doodles/banner.png';
import Doodles_214 from '../public/collections/Doodles/arts/214.png';
import Doodles_7537 from '../public/collections/Doodles/arts/7537.png';
import Doodles_4986 from '../public/collections/Doodles/arts/4986.png';

// >> DopeApeClub
import DopeApeClubLogo from '../public/collections/DopeApeClub/logo.png';
import DopeApeClubBanner from '../public/collections/DopeApeClub/banner.png';

// >> Meka Rhinos
import MekaRhinosLogo from '../public/collections/Meka Rhinos/logo.png';
import MekaRhinosBanner from '../public/collections/Meka Rhinos/banner.png';

// >> Otherdeed for Otherside
import OtherdeedLogo from '../public/collections/Otherdeed for Otherside/logo.png';
import OtherdeedBanner from '../public/collections/Otherdeed for Otherside/banner.png';

// >> WZRDS
import WZRDSLogo from '../public/collections/WZRDS/logo.png';
import WZRDSBanner from '../public/collections/WZRDS/banner.png';
import WZRDS_5903 from '../public/collections/WZRDS/arts/5903.png';
import WZRDS_6419 from '../public/collections/WZRDS/arts/6419.png';
import WZRDS_6527 from '../public/collections/WZRDS/arts/6527.png';
import WZRDS_9112 from '../public/collections/WZRDS/arts/9112.png';

// >> Space Buddies
import SpaceBuddies_85 from '../public/collections/Space Buddies/arts/85.png';
import SpaceBuddies_265 from '../public/collections/Space Buddies/arts/265.png';
import SpaceBuddies_322 from '../public/collections/Space Buddies/arts/322.png';

// >> Variables
const allList = {
	// >> COLLECTIONS << //
	['Dooplicator']: {
		type: 'Collection',
		icon: DooplicatorLogo,
		banner: DooplicatorBanner,
		author: 'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmH',
		verifiedName: true,
		verifiedAuthor: true,
	},
	['CLONE X - X TAKASHI MURAKAMI']: {
		type: 'Collection',
		icon: cloneXLogo,
		banner: cloneXBanner,
		author: 'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmA',
		verifiedName: true,
		verifiedAuthor: true,
	},
	['Cope Bears']: {
		type: 'Collection',
		icon: copeBearsLogo,
		banner: copeBearsBanner,
		author: 'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmM',
		verifiedName: true,
		verifiedAuthor: true,
	},
	['Doodles']: {
		type: 'Collection',
		icon: DoodlesLogo,
		banner: DoodlesBanner,
		author: 'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmM',
		verifiedName: false,
		verifiedAuthor: false,
	},
	['DopeApeClub']: {
		type: 'Collection',
		icon: DopeApeClubLogo,
		banner: DopeApeClubBanner,
		author: 'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmM',
		verifiedName: false,
		verifiedAuthor: false,
	},
	['Meka Rhinos']: {
		type: 'Collection',
		icon: MekaRhinosLogo,
		banner: MekaRhinosBanner,
		author: 'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmM',
		verifiedName: false,
		verifiedAuthor: false,
	},
	['Otherdeed for Otherside']: {
		type: 'Collection',
		icon: OtherdeedLogo,
		banner: OtherdeedBanner,
		author: 'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmM',
		verifiedName: true,
		verifiedAuthor: true,
	},
	['WZRDS']: {
		type: 'Collection',
		icon: WZRDSLogo,
		banner: WZRDSBanner,
		author: 'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmM',
		verifiedName: false,
		verifiedAuthor: false,
	},

	// >> ITEMS << //
	['WZRDS #5903']: {
		type: 'Item',
		icon: WZRDS_5903,
		verifiedName: false,
		collection: 'WZRDS',
	},
	['WZRDS #6419']: {
		type: 'Item',
		icon: WZRDS_6419,
		verifiedName: false,
		collection: 'WZRDS',
	},
	['WZRDS #6527']: {
		type: 'Item',
		icon: WZRDS_6527,
		verifiedName: false,
		collection: 'WZRDS',
	},
	['WZRDS #9112']: {
		type: 'Item',
		icon: WZRDS_9112,
		verifiedName: false,
		collection: 'WZRDS',
	},
	['Dooplicator #5512']: {
		type: 'Item',
		icon: DooplicatorArt,
		verifiedName: true,
		collection: 'Dooplicator',
	},
	['Dooplicator #2163']: {
		type: 'Item',
		icon: DooplicatorArt,
		verified: true,
		collection: 'Dooplicator',
	},
	['Dooplicator #1111']: {
		type: 'Item',
		icon: DooplicatorArt,
		verifiedName: true,
		collection: 'Dooplicator',
	},
	['Doodles #214']: {
		type: 'Item',
		icon: Doodles_214,
		verifiedName: false,
		collection: 'Doodles',
	},
	['Doodles #4986']: {
		type: 'Item',
		icon: Doodles_4986,
		verifiedName: false,
		collection: 'Doodles',
	},
	['Doodles #7537']: {
		type: 'Item',
		icon: Doodles_7537,
		verifiedName: false,
		collection: 'Doodles',
	},

	// >> USERS << //
	['stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmH']: {
		type: 'User',
		icon: SpaceBuddies_322,
		verifiedName: true,
		name: 'Hiroszek',
	},
	['stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmA']: {
		type: 'User',
		icon: SpaceBuddies_265,
		verifiedName: false,
		name: 'Awruko',
	},
	['stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmM']: {
		type: 'User',
		icon: SpaceBuddies_85,
		verifiedName: true,
		name: 'maciek.bot',
	},
};

export default allList;
