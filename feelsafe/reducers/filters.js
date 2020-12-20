const initialState = {
	categories: [],
	rating: 0,
	openNow: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_CATEGORY":
			return { ...state, ...action.payload };
		case "UPDATE_RATING":
			return { ...state, ...action.payload };
		case "UPDATE_OPENNOW":
			return { ...state, ...action.payload };
	}
	return state;
};
