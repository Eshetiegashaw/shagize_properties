const formatNumber = (num, symbol) => {
	if (num === null || num === undefined || num === "" || num === "NaN") {
		num = 0;
	}

	let magnitude = 0;
	while (Math.abs(num) >= 1000) {
		magnitude += 1;
		num /= 1000.0;
	}
	return symbol + " " + num.toFixed(2) + ["", " K", " M", " G", " T", " P"][magnitude];
};

export { formatNumber };
