import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Form2Screen = ({ navigation }) => {
  const handleGoToForm1 = () => {
    navigation.goBack();
  };

  const handleGoToResults = () => {
    navigation.navigate("Results");
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.navigationControlStyle}>
        <Pressable onPress={handleGoToForm1} accessibilityHint="goBackButton">
          <Ionicons name="arrow-back" size={36} color={"#007bff"} />
        </Pressable>
        <Pressable
          onPress={handleGoToResults}
          accessibilityHint="goToResultsButton"
        >
          <Ionicons name="arrow-forward" size={36} color={"#007bff"} />
        </Pressable>
      </View>
      <View style={styles.screenNameStyle}>
        <Text>Form1Screen</Text>
      </View>
    </View>
  );
};

Form2Screen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  navigationControlStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 36,
  },
  screenNameStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#007bff",
    margin: 8,
  },
});

export default Form2Screen;
