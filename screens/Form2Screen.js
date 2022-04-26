import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";
import Background from "../components/UI/Background";

const Form2Screen = ({ navigation }) => {
	const handleGoToForm1 = () => {
		navigation.goBack();
	};

	const handleGoToResults = () => {
		navigation.navigate("Results");
	};

	return (
		<Background>
			<View style={styles.rootContainer}>
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
				<View style={styles.screenNameStyle}>
					<Text>Form2Screen</Text>
				</View>
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
	},
	navigationControlStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	screenNameStyle: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#007bff",
		margin: 8,
	},
});

export default Form2Screen;
