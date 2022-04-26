import { ImageBackground, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import NavigateButton from "../components/UI/NavigateButton";

const ResultsScreen = ({ navigation }) => {
	const handleGoToForm2 = () => {
		navigation.goBack();
	};

	return (
		<ImageBackground
			source={require("../assets/Background.png")}
			style={{ width: "100%", height: "100%" }}
			resizeMode="cover"
		>
			<View style={styles.rootContainer}>
				<NavigateButton
					onPress={handleGoToForm2}
					accessibilityHint="goToForm2Button"
					direction="back"
				/>
				<View style={styles.linkContainer}>
					<Text>ResultsScreen</Text>
				</View>
			</View>
		</ImageBackground>
	);
};

ResultsScreen.propTypes = {
	navigation: PropTypes.shape({
		goBack: PropTypes.func.isRequired,
	}).isRequired,
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
	linkContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#007bff",
		margin: 8,
	},
});

export default ResultsScreen;
