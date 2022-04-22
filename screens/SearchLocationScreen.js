import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const SearchLocationScreen = ({navigation}) => {

	const handleGoToForm = () => {
		navigation.goBack();
	};

	return (
		<View style={styles.rootContainer}>
			<Ionicons
				name="arrow-back"
				style={styles.navigationControlStyle}
				size={36}
				color={"#007bff"}
				onPress={handleGoToForm}
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

export default SearchLocationScreen;