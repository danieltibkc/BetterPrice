import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";
import Background from "../components/UI/Background";
import FormQuestion from "../components/UI/FormQuestion";
import { useState } from "react";
import Button from "../components/UI/Button";
import { predictAPI } from "../util/http";

const Form2Screen = ({ navigation }) => {
  const [hasAc, setHasAc] = useState(false);

  const [predictionResults, setPredictionResults] = useState({});

  const onChangeHasAcValue = () => {
    setHasAc(!hasAc);
  };

  const handleGoToForm1 = () => {
    navigation.goBack();
  };

  const handleGoToResults = () => {
    if (predictionResults && Object.keys(predictionResults).length !== 0) {
      navigation.navigate("Results", {
        items: predictionResults["items"],
        base: predictionResults["base"],
      });
    }
  };

  const predictPrice = async () => {
    const dummy_data = {
      lat: 1.1233123,
      long: 24.123103,
      tv: 1,
      ac: 0,
      num_bedr: 6,
      num_bathr: 4,
      gym: 1,
    };
    const predictionRes = await predictAPI(dummy_data);
    setPredictionResults(predictionRes);
    handleGoToResults();
  };

  return (
    <Background>
      <View
        style={styles.navigationControlStyle}
        accessibilityHint="Form2Screen"
      >
        <NavigateButton
          onPress={handleGoToForm1}
          accessibilityHint="goBackButton"
          direction="back"
        />
        <NavigateButton
          onPress={handleGoToResults}
          accessibilityHint="goToResultsButton"
          direction="forward"
        />
      </View>

      <View style={styles.rootContainer}>
        <FormQuestion
          label="Do you offer parking?"
          type="check"
          value={hasAc}
          onChange={onChangeHasAcValue}
        />

        <FormQuestion
          label="Do you have a TV?"
          type="check"
          value={hasAc}
          onChange={onChangeHasAcValue}
        />

        <FormQuestion
          label="Do you offer breakfast?"
          type="check"
          value={hasAc}
          onChange={onChangeHasAcValue}
        />

        <FormQuestion
          label="Is your place pet friendly?"
          type="check"
          value={hasAc}
          onChange={onChangeHasAcValue}
        />

        <FormQuestion
          label="Is there at GYM at your place?"
          type="check"
          value={hasAc}
          onChange={onChangeHasAcValue}
        />

        <Button
          onPress={predictPrice}
          label="Calculate"
          style={{ margin: 16 }}
        />
      </View>
    </Background>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  navigationControlStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Form2Screen;
