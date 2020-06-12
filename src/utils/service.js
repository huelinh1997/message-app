// import AxiosService from "./request";

// export const getMessage = (url) => {
// 	return AxiosService.get(`${url}`);
// };

import request from "./request";

const getMessage = () => {
	return request({
		url: `/message`,
		method: "GET",
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			return error;
		});
};

const addMessage = (data) => {
	return request({
		url: `/message`,
		method: "POST",
		data: data,
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			return error;
		});
};

const updateMessage = (data, id) => {
	return request({
		url: `/message/${id}`,
		method: "PUT",
		data: data,
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			return error;
		});
};

const deleteMessage = (id) => {
	return request({
		url: `/message/${id}`,
		method: "DELETE",
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			return error;
		});
};

const searchMessage = (data) => {
	return request({
		url: `/search`,
		method: "GET",
		params: data,
	})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			return error;
		});
};

export { getMessage, addMessage, updateMessage, deleteMessage, searchMessage };
