import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return <View style={styles.rootContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  rootContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.69,
    shadowRadius: 8.3,

    borderRadius: 15,
    elevation: 13,
  },
});

Card.propTypes = {
  children: PropTypes.elementType,
};

export default Card;
