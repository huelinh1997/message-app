import "react-toastify/dist/ReactToastify.css";
import * as Types from "../constants/Constant";
import { Error, Success } from "../helpers/notify";
//import * as ApiCall from "../utils/service";
import {
	addMessage,
	deleteMessage,
	getMessage,
	updateMessage,
	searchMessage,
} from "../utils/service";

export const getMessageRequest = () => {
	return (dispatch) => {
		return getMessage().then((res) => {
			if (res.status === 200) {
				dispatch({ type: Types.GET_MESSAGE_REPONSE, data: res.data });
			} else {
				Error("Không thể kết nối dữ liệu!");
			}
		});
	};
};

export const addMessageRequest = (data) => {
	return (dispatch) => {
		return addMessage(data).then((res) => {
			if (res.status === 200) {
				Success(res.data.message);
				dispatch({ type: Types.CREATE_MESSAGE_RESPONSE, data: res.data.data });
			} else {
				Error("Không thể kết nối dữ liệu!");
			}
		});
	};
};

export const updateMessageRequest = (data, id) => {
	return (dispatch) => {
		return updateMessage(data, id).then((res) => {
			if (res.status === 200) {
				Success(res.data.message);
				dispatch({ type: Types.UPDATE_MESSAGE_RESPONSE, data: res.data.data });
			} else {
				Error("Không thể kết nối dữ liệu!");
			}
		});
	};
};

export const deleteMessageRequest = (id) => {
	return (dispatch) => {
		return deleteMessage(id).then((res) => {
			if (res.status === 200) {
				Success(res.data.message);
				dispatch({ type: Types.DELETE_MESSAGE_RESPONSE, data: id });
			} else {
				Error("Không thể kết nối dữ liệu!");
			}
		});
	};
};

export const searchMessageRequest = (data) => {
	return (dispatch) => {
		return searchMessage(data).then((res) => {
			if (res.status === 200) {
				dispatch({ type: Types.SEARCH_MESSAGE_RESPONSE, data: res.data.data });
			} else {
				Error("Không thể kết nối dữ liệu!");
			}
		});
	};
};
