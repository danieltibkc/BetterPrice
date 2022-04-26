import { Pressable, StyleSheet } from "react-native";
import Card from "./Card";
import { Ionicons } from "@expo/vector-icons";
import { Globals } from "../../constants/styles";
import PropTypes from "prop-types";

const NavigateButton = ({ onPress, direction, accessibilityHint }) => {
  return (
    <Card>
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
    </Card>
  );
};

NavigateButton.propTypes = {
  onPress: PropTypes.func,
  direction: PropTypes.string,
  accessibilityHint: PropTypes.string,
};

const styles = StyleSheet.create({
  navigationControlStyle: {
    paddingVertical: 48,
    paddingHorizontal: 18,
  },
});

export default NavigateButton;
