import axios from "axios";

const request = axios.create({
	baseURL: `http://45.32.127.54:8080`,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

// after send request
request.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default request;
