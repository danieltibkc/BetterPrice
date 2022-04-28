import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";
import Background from "../components/UI/Background";
import FormQuestion from "../components/UI/FormQuestion";
import { useState } from "react";
import Button from "../components/UI/Button";

const Form2Screen = ({ navigation }) => {
	const [hasAc, setHasAc] = useState(false);

	const onChangeHasAcValue = () => {
		setHasAc(!hasAc);
	};

	const handleGoToForm1 = () => {
		navigation.goBack();
	};

	const handleGoToResults = () => {
		navigation.navigate("Results");
	};

	return (
		<Background>
			<View style={styles.navigationControlStyle}>
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
				<Text>Form2Screen</Text>

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

				<Button label="Calculate" style={{ margin: 16 }} />
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
