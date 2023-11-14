export const getDollarPrice = (price: number | string) => {
	return ('$').concat(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
};

export const getDollarPriceForItem = (price: number | string) => {
	return getDollarPrice(price).concat('/pc');
}
