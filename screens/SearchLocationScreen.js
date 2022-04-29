import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";

const SearchLocationScreen = ({ navigation }) => {
  const handleGoToForm = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.rootContainer} accessibilityHint="SearchLocationScreen">
      <NavigateButton
        onPress={handleGoToForm}
        accessibilityHint="goBackButton"
        direction="back"
      />
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
