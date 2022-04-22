import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const ResultsScreen = ({navigation}) => {

	const handleGoToForm2 = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.rootContainer}>
			<Ionicons
				name="arrow-back"
				style={styles.navigationControlStyle}
				size={36}
				color={"#007bff"}
				onPress={handleGoToForm2}
			/>
			<View style={styles.linkContainer}>
				<Text>ResultsScreen</Text>
			</View>
		</View>
	);
};

ResultsScreen.propTypes = {
	navigation: PropTypes.shape({
		goBack: PropTypes.func.isRequired,
	}).isRequired,
};


const styles = StyleSheet.create({
	rootContainer:{
		flex: 1,
	},
	linkContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	navigationControlStyle: {
		paddingVertical: 36,
		paddingHorizontal: 18,
		alignSelf: "flex-start"
	},
	buttonText: {
		color: "#007bff",
		margin: 8
	}
});

export default ResultsScreen;