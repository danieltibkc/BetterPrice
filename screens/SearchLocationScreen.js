import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const SearchLocationScreen = ({ navigation }) => {
  const handleGoToForm = () => {
    navigation.goBack();
  };

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [location, setLocation] = useState(null);
  // const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const initialRegion = {
    latitude: location ? location.latitude : 37.78,
    longitude: location ? location.longitude : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  return (
    <View style={styles.rootContainer} accessibilityHint="SearchLocationScreen">
      <NavigateButton
        onPress={handleGoToForm}
        accessibilityHint="goBackButton"
        direction="back"
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialRegion}
        onPress={selectLocationHandler}
      >
        {selectedLocation && (
          <Marker
            title="Picked Location"
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
