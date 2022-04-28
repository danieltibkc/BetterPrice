import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return <View style={styles.rootContainer}>{children}</View>;
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
    padding: 18,
    borderRadius: 8,
  },
});

Card.propTypes = {
  children: PropTypes.elementType,
};

export default Card;
