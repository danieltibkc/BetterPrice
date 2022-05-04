import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { geocodeAPI } from "../util/http";

const SearchLocationScreen = ({ navigation }) => {
	const handleGoToForm = () => {
		navigation.goBack();
	};

	const [selectedLocation, setSelectedLocation] = useState(null);
	const [locationInfo, setLocationInfo] = useState("");
	const [location, setLocation] = useState({
		latitude: 37.78,
		longitude: -122.43,
	});

	// const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				// setErrorMsg("Permission to access location was denied");
				return;
			}

			let currLocation = await Location.getCurrentPositionAsync({});
			setLocation({
				latitude: currLocation.latitdude,
				longitude: currLocation.longitude,
			});
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
		location;
		setSelectedLocation({ lat: lat, lng: lng });
		await getPlaceInfo(lat, lng);
	};

	const getPlaceInfo = async (lat, lng) => {
		const places = await geocodeAPI(lat, lng);
		const placeName = places.data.data[0].label;
		setLocationInfo(placeName);
	};

	return (
		<View style={styles.rootContainer} accessibilityHint="SearchLocationScreen">
			<NavigateButton
				onPress={handleGoToForm}
				accessibilityHint="goBackButton"
				direction="back"
			/>
			<MapView
				provider={PROVIDER_GOOGLE}
				showsUserLocation
				showsMyLocationButton
				zoomEnabled
				style={{ flex: 1 }}
				initialRegion={initialRegion}
				onPress={selectLocationHandler}
			>
				{selectedLocation && (
					<Marker
						title={locationInfo}
						image={require("../assets/marker.png")}
						coordinate={{
							latitude: selectedLocation.lat,
							longitude: selectedLocation.lng,
						}}
					/>
				)}
			</MapView>
		</View>
	);
};

SearchLocationScreen.propTypes = {
	navigation: PropTypes.shape({
		goBack: PropTypes.func.isRequired,
	}).isRequired,
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
	linkContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#007bff",
		margin: 8,
	},
});

export default SearchLocationScreen;
