import { StyleSheet, Text, TextInput, View } from "react-native";
import Card from "./Card";
import { Globals } from "../../constants/styles";
import PropTypes from "prop-types";

const FormQuestion = ({ label, type, config }) => {
  let interactionType;

  if (type === "input") {
    interactionType = (
      <Card style={styles.inputContainer}>
        <TextInput style={styles.questionText} {...config} />
      </Card>
    );
  } else if (type === "radio") {
    // TODO: Implement radio button interaction
  }

  return (
    <View style={styles.questionContainer}>
      <Card style={{ marginRight: 12 }}>
        <Text style={styles.questionText}>{label}</Text>
      </Card>
      {interactionType}
    </View>
  );
};

FormQuestion.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  config: PropTypes.object,
};

const styles = StyleSheet.create({
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  questionText: {
    color: Globals.colors.text,
    padding: 8,
    fontSize: 16,
  },
  inputContainer: {
    minWidth: 75,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormQuestion;
