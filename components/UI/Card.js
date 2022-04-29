import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

const Card = ({ children, style }) => {
  return <View style={[styles.rootContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  rootContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },
});

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.object,
};

export default Card;
