// >> Live minting data
// usage: ./homePage/liveMinting/liveMinting.js
export async function getMintings(mintingsData) {
	let mintingsLocal = [];
	mintingsData.data.map((element, index) => {
		if (mintingsLocal.length === 0) {
			const dateNow = new Date();
			const wlStart = new Date(element.attributes.wlStart);
			const publicStart = new Date(element.attributes.publicStart);
			const publicEnd = new Date(element.attributes.publicEnd);
			if (element.attributes.whitelist === true) {
				if (dateNow < publicEnd) {
					if (dateNow >= wlStart) {
						mintingsLocal.push(element);
					}
				}
			} else {
				if (dateNow < publicEnd) {
					if (dateNow >= publicStart) {
						mintingsLocal.push(element);
					}
				}
			}
		}
	});
	return mintingsLocal;
}

// >> Top 5 volume collections
// usage: ./homePage/topCollections/topCollections.js
export async function getTop5Collections(collectionsData) {
	// Sort collections by volume
	let localCollections = collectionsData.data.sort(function (a, b) {
		let numA = Number(a.attributes.volume);
		let numB = Number(b.attributes.volume);
		return numA > numB ? -1 : numA < numB ? 1 : 0;
	});

	// >> Mapping collections
	let collectionsLocal = [];
	localCollections.map((element, index) => {
		if (index < 4) {
			collectionsLocal.push(element);
		}
	});

	return collectionsLocal;
}
