export const getDollarPrice = (price: number | string) => {
	return ('$').concat(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
};
