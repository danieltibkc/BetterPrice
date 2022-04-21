import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const Form2Screen = ({navigation}) => {

	const handleGoToResults = () => {
	  navigation.navigate("Results");
	};

	return (
		<View style={styles.rootContainer}>
			<Text>Form1Screen</Text>
			<Pressable onPress={handleGoToResults}>
				<Text style={styles.buttonText}>Go to Results Screen</Text>
			</Pressable>
		</View>
	);
};

Form2Screen.propTypes = {
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

export default Form2Screen;