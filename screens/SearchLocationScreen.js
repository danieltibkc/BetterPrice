import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { geocodeAPI } from "../util/http";
import Card from "../components/UI/Card";
import { Globals } from "../constants/styles";

const SearchLocationScreen = ({ navigation }) => {
	const handleGoToForm = () => {
		navigation.goBack();
	};

	const [errorMsg, setErrorMsg] = useState(null);
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [locationInfo, setLocationInfo] = useState({});
	const [location, setLocation] = useState({
		latitude: 37.78,
		longitude: -122.43,
	});

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
			const places = await geocodeAPI(lat, lng);
			const placeName = places.data.data[0];
			setLocationInfo(placeName);
		} catch (e) {
			setErrorMsg(e);
		}
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
						image={require("../assets/marker.png")}
						coordinate={{
							latitude: selectedLocation.lat,
							longitude: selectedLocation.lng,
						}}
					>
						<Callout tooltip>
							<Card style={{ width: 150, alignItems: "center" }}>
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
							</Card>
						</Callout>
					</Marker>
				)}
				{errorMsg && (
					<View
						style={{
							alignSelf: "flex-end",
							height: 60,
							backgroundColor: "red",
							margin: 30,
							padding: 20,
						}}
					>
						<Text style={{ color: "white" }}>{errorMsg}</Text>
					</View>
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
