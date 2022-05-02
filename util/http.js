import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";
const predictionAPIURL = "api/predictions/";

export const predictAPI = async (FormData) => {
	const res = await axios.post(baseURL + predictionAPIURL, FormData);
	return await JSON.parse(res.data);
};
