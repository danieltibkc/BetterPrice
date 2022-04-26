import { fireEvent, render } from "@testing-library/react-native";
import Form1Screen from "../screens/Form1Screen";
import Form2Screen from "../screens/Form2Screen";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing React Navigation", () => {
	test("Home Screen navigates to Search Location Screen", () => {
		const navigate = jest.fn();

		const { getByText } = render(<Form1Screen navigation={{ navigate }} />);

		fireEvent.press(getByText("Go to Search Location Screen"));
		expect(navigate).toHaveBeenCalledWith("SearchLocation");
	});

	test("Home Screen navigates to Form 2 Screen", () => {
		const navigate = jest.fn();

		const { getByA11yHint } = render(<Form1Screen navigation={{ navigate }} />);

		fireEvent.press(getByA11yHint("goToForm2Button"));
		expect(navigate).toHaveBeenCalledWith("Form2");
	});

	test("Form 2 Screen navigates to Results Screen", () => {
		const navigate = jest.fn();
		const goBack = jest.fn();

		const { getByA11yHint } = render(
			<Form2Screen navigation={{ navigate, goBack }} />
		);

		fireEvent.press(getByA11yHint("goToResultsButton"));
		expect(navigate).toHaveBeenCalledWith("Results");
	});
});
