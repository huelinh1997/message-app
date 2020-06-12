import * as Types from "../constants/Constant";
const stateDefault = {
	listMessage: [],
};

function Reducers(state = stateDefault, action) {
	switch (action.type) {
		case Types.GET_MESSAGE_REPONSE: {
			return {
				...state,
				listMessage: action.data,
			};
		}
		case Types.CREATE_MESSAGE_RESPONSE: {
			const newData = action.data;
			console.log("newData:", newData);

			return {
				...state,
				listMessage: [...state.listMessage, newData],
			};
		}
		case Types.UPDATE_MESSAGE_RESPONSE: {
			const newList = state.listMessage.map((item) => {
				if (item.id === action.data.id) {
					return action.data;
				}
				return item;
			});
			return {
				...state,
				listMessage: newList,
			};
		}
		case Types.DELETE_MESSAGE_RESPONSE: {
			console.log("action.data:", action.data);

			const newList = state.listMessage.filter(
				(item) => item.id !== action.data
			);
			console.log("newList:", newList);

			return {
				...state,
				listMessage: newList,
			};
		}
		case Types.SEARCH_MESSAGE_RESPONSE: {
			console.log("res:", action.data);
			return {
				...state,
				listMessage: action.data,
			};
		}
		default: {
			return state;
		}
	}
}

export default Reducers;
