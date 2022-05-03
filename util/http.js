import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";
const predictionAPIURL = "api/predictions/";

export const predictAPI = async (dispatch, getState) => {
	const placeFeatures = getState().features;

	const res = await axios.post(baseURL + predictionAPIURL, placeFeatures);
	const parsedResponse = await JSON.parse(res.data);

	dispatch({ type: "LOAD", payload: { ...parsedResponse } });
};
