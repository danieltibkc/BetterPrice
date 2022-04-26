import PropTypes from "prop-types";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";

const Form2Screen = ({ navigation }) => {
	const handleGoToForm1 = () => {
		navigation.goBack();
	};

	const handleGoToResults = () => {
		navigation.navigate("Results");
	};

	return (
		<ImageBackground
			source={require("../assets/Background.png")}
			style={{ width: "100%", height: "100%" }}
			resizeMode="cover"
		>
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
		</ImageBackground>
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
