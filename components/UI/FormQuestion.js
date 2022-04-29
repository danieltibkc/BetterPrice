import { StyleSheet, Text, TextInput, View } from "react-native";
import Card from "./Card";
import { Globals } from "../../constants/styles";
import PropTypes from "prop-types";
import Checkbox from "expo-checkbox";

const FormQuestion = ({ label, type, config, value, onChange }) => {
  let interactionType;

  if (type === "input") {
    interactionType = (
      <Card style={styles.inputContainer}>
        <TextInput style={styles.questionText} {...config} />
      </Card>
    );
  } else if (type === "check") {
    interactionType = (
      <View
        style={{
          minWidth: 75,
          minHeight: 75,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Checkbox
          style={{ width: 32, height: 32 }}
          value={value}
          onValueChange={onChange}
          color={Globals.colors.teal500}
        />
      </View>
    );
  }

  return (
    <View style={styles.questionContainer}>
      <Card style={{ minWidth: 220, maxWidth: 220, marginRight: 24 }}>
        <Text style={styles.questionText}>{label}</Text>
      </Card>
      {interactionType}
    </View>
  );
};

FormQuestion.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["input", "check"]),
  config: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
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
