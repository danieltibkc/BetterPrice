import { Pressable, StyleSheet, Text, View } from "react-native";
import { Globals } from "../../constants/styles";
import PropTypes from "prop-types";

const Button = ({ label, onPress, style }) => {
	return (
		<View style={[styles.pressableContainer, style]}>
			<Pressable
				style={({ pressed }) => pressed && styles.pressed}
				onPress={onPress}
			>
				<Text style={styles.titleStyle}>{label}</Text>
			</Pressable>
		</View>
	);
};

Button.propTypes = {
	label: PropTypes.string,
	onPress: PropTypes.func,
	style: PropTypes.object,
};

const styles = StyleSheet.create({
	pressableContainer: {
		backgroundColor: Globals.colors.teal500,
		paddingVertical: 24,
		paddingHorizontal: 80,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 4,
	},
	pressed: {
		opacity: 0.75,
	},
	titleStyle: {
		fontWeight: "bold",
		fontSize: 24,
		color: "white",
	},
});

export default Button;
