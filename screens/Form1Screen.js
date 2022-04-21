import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const Form1Screen = ({ navigation }) => {

	const handleGoToLocation = () => {
		navigation.navigate("SearchLocation");
	};

	const handleGoToForm2 = () => {
		navigation.navigate("Form2");
	};

	return (
		<View style={styles.rootContainer}>
			<Text>Form1Screen</Text>
			<Pressable onPress={handleGoToLocation}>
				<Text style={styles.buttonText}>Go to Search Location Screen</Text>
			</Pressable>
			<Pressable onPress={handleGoToForm2}>
				<Text style={styles.buttonText}>Go to Form 2 Screen</Text>
			</Pressable>
		</View>
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
		justifyContent: "center",
		alignItems: "center"
	},
	buttonText: {
		color: "#007bff",
		margin: 8
	}
});

export default Form1Screen;