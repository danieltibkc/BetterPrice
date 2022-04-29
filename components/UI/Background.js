import { ImageBackground } from "react-native";
import PropTypes from "prop-types";

const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/Background.png")}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

Background.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Background;
