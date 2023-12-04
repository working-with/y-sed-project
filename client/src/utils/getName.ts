const getName = (userName: string) => {
	const name = userName.slice(1, 3);

	return { name };
};

export default getName;
