import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import NavigateButton from "../components/UI/NavigateButton";
import Background from "../components/UI/Background";

const Form1Screen = ({ navigation }) => {
	const handleGoToLocation = () => {
		navigation.navigate("SearchLocation");
	};

	const handleGoToForm2 = () => {
		navigation.navigate("Form2");
	};

	return (
		<Background>
			<NavigateButton
				accessibilityHint="goToForm2Button"
				direction="forward"
				onPress={handleGoToForm2}
			/>
			<View style={styles.rootContainer}>
				<View style={styles.linkContainer}>
					<Text>Form1Screen</Text>
					<Pressable onPress={handleGoToLocation}>
						<Text style={styles.buttonText}>Go to Search Location Screen</Text>
					</Pressable>
				</View>
			</View>
		</Background>
	);
};

Form1Screen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		flexDirection: "column",
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

export default Form1Screen;
