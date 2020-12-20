import { UPDATE_LOCATION } from "../actions/types.js";

const DEFAULT_STATE = {
	latitude: 40.2115,
	longitude: -8.4292,
	latitudeDelta: 0.1,
	longitudeDelta: 0.06,
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case UPDATE_LOCATION:
			return {
				...state,
				latitude: action.payload.lat,
				longitude: action.payload.lng,
			};

		default:
			return state;
	}
};
