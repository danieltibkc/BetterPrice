import { Pressable, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import NavigateButton from "../components/UI/NavigateButton";
import Background from "../components/UI/Background";
import Card from "../components/UI/Card";
import { Ionicons } from "@expo/vector-icons";
import { Globals } from "../constants/styles";
import FormQuestion from "../components/UI/FormQuestion";
import { useDispatch, useSelector } from "react-redux";

const Form1Screen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { numberBedrooms, numberBathrooms, hasAC, hasTV } = useSelector(
		(state) => state.features
	);

	const onChangeValue = (attribute, value = !value) => {
		dispatch({ type: "UPDATE", payload: { attribute, value } });
	};

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
			<View style={styles.rootContainer} accessibilityHint="Form1Screen">
				<Card style={{ marginBottom: 16 }}>
					<Pressable
						onPress={handleGoToLocation}
						style={[
							styles.locationContainer,
							({ pressed }) => pressed && styles.pressed,
						]}
					>
						<Ionicons name="compass" size={32} color={Globals.colors.icons} />
						<Text style={styles.locationText}>
              Go to Search Location Screen
						</Text>
					</Pressable>
				</Card>

				<FormQuestion
					label="How many bedrooms does your place have?"
					type="input"
					value={numberBedrooms}
					onChange={(text) => onChangeValue("numberBedrooms", text)}
					config={{
						maxLength: 2,
						keyboardType: "number-pad",
					}}
				/>
				<FormQuestion
					label="How many bathrooms does your place have?"
					type="input"
					value={numberBathrooms}
					onChange={(text) => onChangeValue("numberBathrooms", text)}
					config={{
						maxLength: 2,
						keyboardType: "number-pad",
					}}
				/>
				<FormQuestion
					label="Does your place have AC?"
					type="check"
					value={hasAC}
					onChange={onChangeValue.bind(this, "hasAC")}
				/>

				<FormQuestion
					label="Does your place have TV?"
					type="check"
					value={hasTV}
					onChange={onChangeValue.bind(this, "hasTV")}
				/>
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
		justifyContent: "center",
		alignItems: "center",
		padding: 12,
	},
	locationText: {
		color: Globals.colors.text,
		margin: 8,
		fontSize: 16,
	},
	locationContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});

export default Form1Screen;
