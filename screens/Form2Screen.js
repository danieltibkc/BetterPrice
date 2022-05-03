import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import NavigateButton from "../components/UI/NavigateButton";
import Background from "../components/UI/Background";
import FormQuestion from "../components/UI/FormQuestion";
import { useState } from "react";
import Button from "../components/UI/Button";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { predictAPI } from "../util/http";
import store from "../store";
import { useDispatch, useSelector } from "react-redux";

const Form2Screen = ({ navigation }) => {
	const dispatch = useDispatch();
	const predictions = useSelector((state) => state.predictions);
	const { hasKitchen, parking, breakfast, petfriendly, gymNearby } =
    useSelector((state) => state.features);

	const [fetching, setFetching] = useState(false);

	const onChangeCheckValue = (attribute, value = !value) => {
		dispatch({
			type: "UPDATE",
			payload: { attribute, value },
		});
	};

	const handleGoToForm1 = () => {
		navigation.goBack();
	};

	const handleGoToResults = ({ items, base }) => {
		navigation.navigate("Results", {
			items,
			base,
		});
	};

	const predictPrice = async () => {
		setFetching(true);
		await store.dispatch(predictAPI);
		setFetching(false);

		handleGoToResults({
			items: predictions["items"],
			base: predictions["base"],
		});
	};

	if (fetching) {
		return <LoadingOverlay />;
	}

	return (
		<Background>
			<View
				style={styles.navigationControlStyle}
				accessibilityHint="Form2Screen"
			>
				<NavigateButton
					onPress={handleGoToForm1}
					accessibilityHint="goBackButton"
					direction="back"
				/>
				<NavigateButton
					onPress={predictPrice}
					accessibilityHint="goToResultsButton"
					direction="forward"
				/>
			</View>

			<View style={styles.rootContainer}>
				<FormQuestion
					label="Does your place have kitchen?"
					type="check"
					value={hasKitchen}
					onChange={onChangeCheckValue.bind(this, "hasKitchen")}
				/>

				<FormQuestion
					label="Do you offer parking?"
					type="check"
					value={parking}
					onChange={onChangeCheckValue.bind(this, "parking")}
				/>

				<FormQuestion
					label="Do you offer breakfast?"
					type="check"
					value={breakfast}
					onChange={onChangeCheckValue.bind(this, "breakfast")}
				/>

				<FormQuestion
					label="Is your place pet friendly?"
					type="check"
					value={petfriendly}
					onChange={onChangeCheckValue.bind(this, "petfriendly")}
				/>

				<FormQuestion
					label="Is there at GYM at your place?"
					type="check"
					value={gymNearby}
					onChange={onChangeCheckValue.bind(this, "gymNearby")}
				/>

				<Button
					onPress={predictPrice}
					label="Calculate"
					style={{ margin: 16 }}
				/>
			</View>
		</Background>
	);
};

Form2Screen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		goBack: PropTypes.func.isRequired,
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
	navigationControlStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

export default Form2Screen;
