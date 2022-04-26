import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";

const SearchLocationScreen = ({ navigation }) => {
	const handleGoToForm = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.rootContainer}>
			<NavigateButton
				onPress={handleGoToForm}
				accessibilityHint="goBackButton"
				direction="back"
			/>
			<View style={styles.linkContainer}>
				<Text>SearchLocationScreen</Text>
			</View>
		</View>
	);
};

SearchLocationScreen.propTypes = {
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

export default SearchLocationScreen;
