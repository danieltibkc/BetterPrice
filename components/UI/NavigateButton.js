import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Globals } from "../../constants/styles";
import PropTypes from "prop-types";

const NavigateButton = ({ onPress, direction, accessibilityHint }) => {
  return (
    <Pressable onPress={onPress} accessibilityHint={accessibilityHint}>
      <Ionicons
        name={direction === "forward" ? "arrow-forward" : "arrow-back"}
        style={[
          styles.navigationControlStyle,
          { alignSelf: direction === "forward" ? "flex-end" : "flex-start" },
        ]}
        size={36}
        color={Globals.colors.icons}
      />
    </Pressable>
  );
};

NavigateButton.propTypes = {
  onPress: PropTypes.func,
  direction: PropTypes.string,
  accessibilityHint: PropTypes.string,
};

const styles = StyleSheet.create({
  navigationControlStyle: {
    marginVertical: 48,
    marginHorizontal: 18,
    padding: 4,
    borderRadius: 4,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default NavigateButton;
