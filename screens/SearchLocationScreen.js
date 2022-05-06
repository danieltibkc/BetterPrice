import PropTypes from "prop-types";
import {
	Dimensions,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import NavigateButton from "../components/UI/NavigateButton";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { geocodeForwardAPI, geocodeReverseAPI } from "../util/http";
import { Globals } from "../constants/styles";
import { MapStyle } from "../util/mapStyle";
import Card from "../components/UI/Card";
import { useDispatch } from "react-redux";

const SearchLocationScreen = ({ navigation }) => {
	const handleGoToForm = () => {
		navigation.goBack();
	};

	const dispatch = useDispatch();
	const [errorMsg, setErrorMsg] = useState("");
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [locationInfo, setLocationInfo] = useState("");
	const [location, setLocation] = useState({
		latitude: 37.78,
		longitude: -122.43,
	});
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let currLocation = await Location.getCurrentPositionAsync({});
			setLocation({
				latitude: currLocation.latitdude,
				longitude: currLocation.longitude,
			});
			location;
		})();
	}, []);

	const initialRegion = {
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	};

	const selectLocationHandler = async (event) => {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;
		setSelectedLocation({ lat: lat, lng: lng });
		await getPlaceInfo(lat, lng);
	};

	const getPlaceInfo = async (lat, lng) => {
		try {
			const places = await geocodeReverseAPI(lat, lng);
			const placeName = places.data.data[0];
			// setTimeout(() => setLocationInfo(placeName), 2000);
			setLocationInfo(placeName);
		} catch (e) {
			setErrorMsg(e);
		}
	};

	const saveLocation = () => {
		const latAtt = "lat";
		const longAtt = "long";
		const lat = selectedLocation.lat;
		const long = selectedLocation.lng;
		dispatch({ type: "UPDATE", payload: { attribute: latAtt, value: lat } });
		dispatch({ type: "UPDATE", payload: { attribute: longAtt, value: long } });
	};

	const onSearchBar = (text) => {
		setSearchText(text);
	};

	const onSearchBarSubmit = async () => {
		try {
			const places = await geocodeForwardAPI(searchText);
			const placeInfo = places.data.data[0];
			setSelectedLocation({
				lat: placeInfo.latitude,
				lng: placeInfo.longitude,
			});
			// setTimeout(() => setLocationInfo(placeName), 2000);
			setLocationInfo(placeInfo);
		} catch (e) {
			setErrorMsg(e);
		}
	};
	const PlaceInfoCallout = () => {
		return (
			<>
				<Text
					style={{
						fontSize: 24,
						color: Globals.colors.text,
						fontWeight: "bold",
						textAlign: "center",
					}}
				>
          Address:
				</Text>
				<Text
					style={{
						fontWeight: "300",
						fontSize: 18,
						textAlign: "center",
					}}
				>
					{locationInfo.name}
				</Text>
			</>
		);
	};

	const PlaceInfoCalloutPlaceholder = () => {
		return (
			<View style={{ alignSelf: "center" }}>
				<View
					style={[styles.locationInfoPlaceholder, { width: 50, margin: 8 }]}
				/>
				<View style={styles.locationInfoPlaceholder} />
			</View>
		);
	};

	return (
		<View style={styles.rootContainer} accessibilityHint="SearchLocationScreen">
			<View style={{ flexDirection: "row", position: "absolute", zIndex: 100 }}>
				<NavigateButton
					onPress={handleGoToForm}
					accessibilityHint="goBackButton"
					direction="back"
					style={styles.navigateButton}
				/>
				<Card style={styles.inputContainer}>
					<TextInput
						value={searchText}
						onChangeText={onSearchBar}
						onSubmitEditing={onSearchBarSubmit}
						style={styles.questionText}
						placeholder="Where is your place located..."
					/>
				</Card>
			</View>
			<MapView
				provider={PROVIDER_GOOGLE}
				showsUserLocation
				showsMyLocationButton
				zoomEnabled
				customMapStyle={MapStyle}
				style={styles.mapContainer}
				initialRegion={initialRegion}
				onPress={selectLocationHandler}
			>
				{selectedLocation && (
					<Marker
						image={require("../assets/marker.png")}
						coordinate={{
							latitude: selectedLocation.lat,
							longitude: selectedLocation.lng,
						}}
					>
						<Callout tooltip>
							<Card style={{ minWidth: 150, maxWidth: 250, padding: 8 }}>
								{locationInfo !== "" ? (
									<PlaceInfoCallout />
								) : (
									<PlaceInfoCalloutPlaceholder />
								)}
							</Card>
						</Callout>
					</Marker>
				)}
				{selectedLocation && (
					<Pressable
						onPress={saveLocation}
						style={({ pressed }) => pressed && styles.pressed}
					>
						<Text
							style={[
								styles.errorText,
								{ backgroundColor: Globals.colors.teal500 },
							]}
						>
              Select Location
						</Text>
					</Pressable>
				)}
				{errorMsg !== "" && <Text style={styles.errorText}>{errorMsg}</Text>}
			</MapView>
		</View>
	);
};

const windowHeight = Dimensions.get("window").height;

SearchLocationScreen.propTypes = {
	navigation: PropTypes.shape({
		goBack: PropTypes.func.isRequired,
	}).isRequired,
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
	locationInfoPlaceholder: {
		backgroundColor: "#e0e0e0",
		flex: 1,
		padding: 8,
	},
	mapContainer: {
		flex: 1,
	},
	navigateButton: {
		position: "absolute",
		zIndex: 100,
	},
	notFoundContainer: {
		position: "absolute",
		zIndex: 100,
		top: windowHeight - 200,
		alignSelf: "center",
		justifyContent: "center",
		height: 60,
		backgroundColor: "#e3627e",
		margin: 30,
		padding: 20,
	},
	errorText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
		textAlignVertical: "center",
		top: windowHeight - 250,
		backgroundColor: "#e3627e",
		padding: 20,
		marginHorizontal: 40,
		zIndex: 100,
		shadowColor: "#000",
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 4,
	},
	selectLocationButton: {
		position: "absolute",
		zIndex: 100,
		justifyContent: "center",
		alignSelf: "center",
		top: windowHeight - 250,
	},
	searchBarContainer: {
		position: "absolute",
		zIndex: 100,
	},
	pressed: {
		opacity: 0.75,
	},
	questionText: {
		color: Globals.colors.text,
		padding: 8,
		fontSize: 16,
	},
	inputContainer: {
		minWidth: 300,
		zIndex: 100,
		position: "absolute",
		left: 100,
		top: 45,
	},
});

export default SearchLocationScreen;
