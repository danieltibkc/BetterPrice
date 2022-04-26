import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import NavigateButton from "../components/UI/NavigateButton";
import Background from "../components/UI/Background";

const ResultsScreen = ({ navigation }) => {
	const handleGoToForm2 = () => {
		navigation.goBack();
	};

	return (
		<Background>
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
		</Background>
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
