// >> Modules
import Image from 'next/image';
import { Button, Input, InputAdornment, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Foco from 'react-foco';
import { useRouter } from 'next/router';
import getVariable from '../../globalVariables';
import { Cookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';

// >> Components
import OneCounter from './oneCounter/oneCounter';
import OneSearchElement from './oneSearchElement/oneSearchElement';

// >> Styles
import useStyles from './navBarStyle';
import useGlobalStyles from '../../globalStyle';
import 'react-toastify/dist/ReactToastify.css';

// >> Images
import logo from '../../../public/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonRemoveAlt1OutlinedIcon from '@mui/icons-material/PersonRemoveAlt1Outlined';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

// >> Variables
const cookies = new Cookies();
let renderCount = 0;

// >> Script
function NavBar(props) {
	const router = useRouter();

	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [searchValue, setSearchValue] = useState('');
	const [isEditing, setEditing] = useState(false);
	const [fullTable, setFullTable] = useState(props);
	const [searchTable, setSearchTable] = useState(fullTable);
	const [searchTableMerged, setSearchTableMerged] = useState([]);
	const [selectedTab, setTab] = useState('All');
	const [connectedAccount, setConnectedAccount] = useState('disconnected');
	const [connectedAccountAddress, setConnectedAccountAddress] = useState('');

	// >> Functions
	const handleChange = (event) => {
		setSearchValue(event.target.value);
		changeSearch(event.target.value);
	};

	const changeWalletConnect = (state) => {
		if (state === 'connect') {
			cookies.set('connectedAccount', 'connected');
			setConnectedAccount('connected');
			cookies.set(
				'connectedAccountAddress',
				'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmr'
			);
			setConnectedAccountAddress(
				'stars106z6pl7r0mhxck5qa2rr2sz7e0p5g532jaxqmr'
			);
			toast.success(
				'Wallet connected successfully!\n(Testnet Account)',
				{}
			);
		} else {
			cookies.set('connectedAccount', 'disconnected');
			setConnectedAccount('disconnected');
			cookies.set('connectedAccountAddress', '');
			setConnectedAccountAddress('');
			toast.info('Wallet disconnected successfully!', {});
		}
	};

	const openNewTab = (tab) => {
		if (tab === 'marketplace') {
			router.push(`./marketplace`);
		} else if (tab === 'launchpad') {
			router.push(`./launchpad`);
		} else {
			if (cookies.get('connectedAccount') === 'connected') {
				if (tab === 'settings') {
					router.push(`./settings`);
				} else if (tab === 'profile') {
					router.push(`./profile/${connectedAccountAddress}`);
				}
			} else {
				toast.error('To do this you need to connect your wallet!', {});
			}
		}
	};

	const mergeSearchTables = (shuffle, localTable) => {
		let localMergeTable = [];
		localTable.collections.data.map((element) => {
			element.type = 'Collection';
			localMergeTable.push(element);
		});
		localTable.members.data.map((element) => {
			element.type = 'User';
			localMergeTable.push(element);
		});
		localTable.items.data.map((element) => {
			element.type = 'Item';
			localMergeTable.push(element);
		});

		if (shuffle === true) {
			localMergeTable = localMergeTable.sort(
				(a, b) => 0.5 - Math.random()
			);
		}

		setSearchTableMerged(localMergeTable);
	};

	const showGui = (state) => {
		if (isEditing === state) {
			return;
		}
		setEditing(state);
	};

	const changeSearch = (searchValueLocal) => {
		let localSearchTable = {};
		localSearchTable.collections = {};
		localSearchTable.collections.data = [];
		localSearchTable.items = {};
		localSearchTable.items.data = [];
		localSearchTable.members = {};
		localSearchTable.members.data = [];

		// Collections
		fullTable.collections.data.map((element) => {
			if (
				!(
					element.attributes.name
						.toLowerCase()
						.search(searchValueLocal.toLowerCase()) === -1
				)
			) {
				localSearchTable.collections.data.push(element);
			}
		});

		// Items
		fullTable.items.data.map((element) => {
			if (
				!(
					element.attributes.name
						.toLowerCase()
						.search(searchValueLocal.toLowerCase()) === -1
				)
			) {
				localSearchTable.items.data.push(element);
			}
		});

		// Members
		fullTable.members.data.map((element) => {
			let name = '';
			if (element.attributes.name) {
				name = element.attributes.name;
			}
			if (
				!(
					name
						.toLowerCase()
						.search(searchValueLocal.toLowerCase()) === -1
				) ||
				!(
					element.attributes.address
						.toLowerCase()
						.search(searchValueLocal.toLowerCase()) === -1
				)
			) {
				localSearchTable.members.data.push(element);
			}
		});

		setSearchTable(localSearchTable);
		mergeSearchTables(false, localSearchTable);
	};

	// >> useEffect
	useEffect(() => {
		mergeSearchTables(true, searchTable);
		setConnectedAccount(cookies.get('connectedAccount') || 'disconnected');
		setConnectedAccountAddress(
			cookies.get('connectedAccountAddress') || ''
		);
	}, []);

	// >> Render
	return (
		<nav className={styles.outsideDiv}>
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				theme={'dark'}
				bodyClassName={styles.toastStyle}
				toastClassName={styles.toastStyle}
			/>
			<div className={styles.insideDiv}>
				<div
					className={styles.logoDiv}
					onClick={() => {
						router.push(`./`);
					}}
				>
					<Image
						src={logo}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						//priority={true}
					/>
				</div>
				<div className={styles.searchDiv}>
					<Foco onClickOutside={() => showGui(false)}>
						<Input
							disableUnderline={true}
							fullWidth={true}
							placeholder="Search Item, Collection and accounts"
							onChange={handleChange}
							onClick={() => showGui(true)}
							value={searchValue}
							startAdornment={
								<InputAdornment position="start">
									<SearchIcon className={styles.searchIcon} />
								</InputAdornment>
							}
						></Input>
						<div
							className={styles.searchBar}
							style={
								isEditing === false
									? { opacity: '0', pointerEvents: 'none' }
									: { opacity: '1' }
							}
						>
							<div className={styles.searchBarCounters}>
								<OneCounter
									customClickEvent={() => {
										setTab('All');
									}}
									tabName="All"
									tabCounter={searchTableMerged.length}
									selectedTab={selectedTab}
								/>
								<OneCounter
									customClickEvent={() => {
										setTab('Collection');
									}}
									tabName="Collection"
									tabCounter={
										searchTable.collections.data.length
									}
									selectedTab={selectedTab}
								/>
								<OneCounter
									customClickEvent={() => {
										setTab('Item');
									}}
									tabName="Item"
									tabCounter={searchTable.items.data.length}
									selectedTab={selectedTab}
								/>
								<OneCounter
									customClickEvent={() => {
										setTab('User');
									}}
									tabName="User"
									tabCounter={searchTable.members.data.length}
									selectedTab={selectedTab}
								/>
							</div>
							<div className={styles.searchBarItems}>
								{searchTableMerged.map((element, index) => {
									let canRender = false;
									if (
										selectedTab === 'All' ||
										selectedTab === element.type
									) {
										renderCount = renderCount + 1;
										if (renderCount <= 6) {
											canRender = true;
										}
									}

									if (index + 1 >= searchTableMerged.length) {
										renderCount = 0;
									}

									if (canRender === true) {
										return (
											<OneSearchElement
												{...element}
												key={`${index}_${element.id}_${element.type}_${element.attributes.name}`}
											/>
										);
									}
								})}
							</div>
							<Button
								className={styles.searchAllBtn}
								onClick={() => {
									router.push(`./search/${searchValue}`);
								}}
							>
								<SearchIcon
									className={`${styles.searchIcon} ${styles.searchIcon2}`}
								/>
								<Typography>See all</Typography>
							</Button>
						</div>
					</Foco>
				</div>
				<div className={styles.rightElements}>
					<div className={styles.pageSelector}>
						<Button className={styles.pageSelectorMainBtn}>
							<Typography>Homepage</Typography>
							<ArrowBackIosNewRoundedIcon className="pageSelectorArrow" />
						</Button>
						<div
							className={`${styles.pageSelectorBottom} pageSelectorBottom2`}
						>
							<div className={styles.pageSelectorBottomInside}>
								<Button
									className={styles.pageSelectorSecondBtn}
									onClick={() => {
										openNewTab('launchpad');
									}}
								>
									<Typography>Launchpad</Typography>
								</Button>
								<Button
									className={styles.pageSelectorSecondBtn}
									onClick={() => {
										openNewTab('marketplace');
									}}
								>
									<Typography>Marketplace</Typography>
								</Button>
							</div>
						</div>
					</div>

					<Button
						className={styles.settings}
						onClick={() => {
							openNewTab('settings');
						}}
					>
						<SettingsOutlinedIcon className={styles.settingsIcon} />
					</Button>
					<Button
						className={styles.profile}
						onClick={() => {
							openNewTab('profile');
						}}
					>
						<AccountCircleOutlinedIcon
							className={styles.profileIcon}
						/>
					</Button>

					{/* WALLET BUTTON */}
					{connectedAccount === 'connected' ? (
						<Button
							className={styles.connectWalletBtn}
							onClick={() => {
								changeWalletConnect('disconnect');
							}}
						>
							<PersonRemoveAlt1OutlinedIcon
								className={styles.connectWalletIcon}
							/>
							<Typography>
								{`${connectedAccountAddress.slice(
									0,
									8
								)}...${connectedAccountAddress.slice(-3)}`}
							</Typography>
						</Button>
					) : (
						<Button
							className={styles.connectWalletBtn}
							onClick={() => {
								changeWalletConnect('connect');
							}}
						>
							<AccountBalanceWalletOutlinedIcon
								className={styles.connectWalletIcon}
							/>
							<Typography>Connect wallet</Typography>
						</Button>
					)}
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
