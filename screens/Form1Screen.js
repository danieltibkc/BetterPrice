import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const Form1Screen = ({ navigation }) => {
  const handleGoToLocation = () => {
    navigation.navigate("SearchLocation");
  };

  const handleGoToForm2 = () => {
    navigation.navigate("Form2");
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable accessibilityHint="goToForm2Button" onPress={handleGoToForm2}>
        <Ionicons
          name="arrow-forward"
          style={styles.navigationControlStyle}
          size={36}
          color={"#007bff"}
        />
      </Pressable>
      <View style={styles.linkContainer}>
        <Text>Form1Screen</Text>
        <Pressable onPress={handleGoToLocation}>
          <Text style={styles.buttonText}>Go to Search Location Screen</Text>
        </Pressable>
      </View>
    </View>
  );
};

Form1Screen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
  },
  linkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationControlStyle: {
    paddingVertical: 36,
    paddingHorizontal: 18,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#007bff",
    margin: 8,
  },
});

export default Form1Screen;
