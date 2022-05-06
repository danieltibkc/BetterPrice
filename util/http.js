import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";
const predictionAPIURL = "api/predictions/";
const GEOCODE_API_KEY = "275d91f9b401123f43c95abbc960630e";
const geocodeBaseURL = "http://api.positionstack.com/v1/";
const geocodeReverse = `${geocodeBaseURL}reverse?access_key=${GEOCODE_API_KEY}&query=`;
const geocodeForward = `${geocodeBaseURL}forward?access_key=${GEOCODE_API_KEY}&query=`;

export const predictAPI = async (dispatch, getState) => {
	const placeFeatures = getState().features;

	const res = await axios.post(baseURL + predictionAPIURL, placeFeatures);
	const parsedResponse = await JSON.parse(res.data);

	dispatch({ type: "LOAD", payload: { ...parsedResponse } });
};

export const geocodeReverseAPI = async (lat, long) => {
	const queryURL = `${geocodeReverse}${lat},${long}`;
	let response;
	response = await axios.get(queryURL);
	if (response.data.error) {
		throw "No information found for this place!";
	}
	return response;
};

export const geocodeForwardAPI = async (address) => {
	const search = encodeURIComponent(address);
	const queryURL = `${geocodeForward}${search}`;
	let response;
	response = await axios.get(queryURL);
	if (response.data.error) {
		throw "No information found for this place!";
	}
	return response;
};
