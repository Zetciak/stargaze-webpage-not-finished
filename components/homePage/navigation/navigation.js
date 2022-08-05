// >> Modules
import Image from 'next/image';
import { Button, Input, InputAdornment, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import OneCounter from './oneCounter/oneCounter.js';
import OneSearchElement from './oneSearchElement/oneSearchElement.js';
import Foco from 'react-foco';
import SearchIcon from '@mui/icons-material/Search';

// >> Styles
import useStyles from './navigationStyle.js';

// >> Images
import logo from '../../../public/logo.png';

// >> Variables
import allList from '../../../data/allDatas.js';

// >> Script
function Navigation() {
	// >> Style
	const styles = useStyles();

	// >> Variables
	const [searchList, setSearchList] = useState({});
	const [randomSearchList, setRandomSearchList] = useState({});
	const [searchValue, setSearchValue] = useState('');
	const [isEditing, setEditing] = useState(false);
	const [getTab, setTab] = useState('All');
	const [getCounter, setCounter] = useState({
		All: 0,
		Collection: 0,
		Item: 0,
		User: 0,
	});

	// >> Functions
	function shuffleObject(obj) {
		let newObj = {};
		var keys = Object.keys(obj);

		keys.sort(function (a, b) {
			return Math.random() - 0.5;
		});

		keys.forEach(function (k) {
			newObj[k] = obj[k];
		});
		return newObj;
	}

	useEffect(() => {
		let localList = shuffleObject(allList);
		setSearchList(localList);
		setRandomSearchList(localList);
	}, []);

	const handleChange = (event) => {
		setSearchValue(event.target.value);
		changeSearch(event.target.value);
	};

	const showGui = (state) => {
		if (isEditing === state) {
			return;
		}
		setEditing(state);
		if (state === true) {
			changeSearch('');
		}
	};

	const changeSearch = (searchValue) => {
		let counters = {
			All: 0,
			Collection: 0,
			Item: 0,
			User: 0,
		};
		let localList = {};

		for (const [i, v] of Object.entries(allList)) {
			if (v.type === 'User') {
				if (
					!(
						v.name
							.toLowerCase()
							.search(searchValue.toLowerCase()) === -1
					)
				) {
					localList[i] = allList[i];
				}
			} else {
				if (
					!(i.toLowerCase().search(searchValue.toLowerCase()) === -1)
				) {
					localList[i] = allList[i];
				}
			}
		}

		for (const [i, v] of Object.entries(localList)) {
			counters.All = counters.All + 1;
			if (v.type === 'Collection') {
				counters.Collection = counters.Collection + 1;
			} else if (v.type === 'Item') {
				counters.Item = counters.Item + 1;
			} else if (v.type === 'User') {
				counters.User = counters.User + 1;
			}
		}
		setCounter(counters);
		if (searchValue !== '') {
			setSearchList(localList);
		} else {
			setSearchList(randomSearchList);
		}
	};

	// >> Render
	return (
		<div className={styles.mainDiv}>
			<div className={styles.topElements}>
				<div className={styles.logoDiv}>
					<Image
						src={logo}
						alt=""
						layout="responsive"
						objectFit="contain"
						quality={100}
						priority={true}
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
									tabCounter={getCounter.All}
									tabGet={getTab}
								/>

								<OneCounter
									customClickEvent={() => {
										setTab('Collection');
									}}
									tabName="Collection"
									tabCounter={getCounter.Collection}
									tabGet={getTab}
								/>

								<OneCounter
									customClickEvent={() => {
										setTab('Item');
									}}
									tabName="Item"
									tabCounter={getCounter.Item}
									tabGet={getTab}
								/>

								<OneCounter
									customClickEvent={() => {
										setTab('User');
									}}
									tabName="User"
									tabCounter={getCounter.User}
									tabGet={getTab}
								/>
							</div>
							<div className={styles.searchBarItems}>
								{Object.keys(searchList).map(function (
									element,
									index
								) {
									let canDraw = false;
									if (
										getTab === 'All' ||
										getTab === searchList[element].type
									) {
										canDraw = true;
									}

									if (canDraw === true) {
										//if (index + 1 <= 6) {
										return (
											<OneSearchElement
												key={index}
												table={searchList[element]}
												name={element}
											/>
										);
										//}
									}
								})}
							</div>
							<div className={styles.searchBarButtonDiv}>
								<Button
									variant="contained"
									className={styles.searchBarButton}
								>
									<div className="searchBarButtonbGDiv"></div>
									<p>
										<SearchIcon
											className={
												styles.searchBarButtonIcon
											}
										/>
										See all
									</p>
								</Button>
							</div>
						</div>
					</Foco>
				</div>
				<div className={styles.rightElements}>
					<div className={styles.webSelect}></div>
					<div className={styles.settings}></div>
					<div className={styles.profile}></div>
					<div className={styles.wallet}></div>
				</div>
			</div>
			<div className={styles.bottomLine}></div>
		</div>
	);
}

export default Navigation;
