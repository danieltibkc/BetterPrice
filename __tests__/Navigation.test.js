import { cleanup, fireEvent, render } from "@testing-library/react-native";
import App from "../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
afterEach(cleanup);

describe("Testing React Navigation", () => {
  //	App Navigation Structure:
  //		Stack:
  //			Stack:
  //				Form1Screen
  //				SearchLocationScreen
  //			Form2Screen
  //			ResultsScreen

  test("Home Screen navigates to Search Location Screen", () => {
    const { getByText } = render(<App />);
    // Form1Screen go to SearchLocationScreen
    fireEvent.press(getByText("Go to Search Location Screen"));

    const searchLocationText = getByText("SearchLocationScreen");
    expect(searchLocationText).toBeTruthy();
  });

  test("Home Screen navigates to Form 2 Screen", () => {
    const { getByText, getByA11yHint } = render(<App />);
    // Form1Screen go to Form2Screen
    fireEvent.press(getByA11yHint("goToForm2Button"));

    const searchLocationText = getByText("Form2Screen");
    expect(searchLocationText).toBeTruthy();
  });

  test("Form 2 Screen navigates to Results Screen", () => {
    const { getByText, getByA11yHint } = render(<App />);
    // Form1Screen go to Form2Screen
    fireEvent.press(getByA11yHint("goToForm2Button"));

    // Form2Screen go to ResultsScreen
    fireEvent.press(getByA11yHint("goToResultsButton"));

    const resultsText = getByText("ResultsScreen");
    expect(resultsText).toBeTruthy();
  });

  test("Form 2 Screen navigates Back", () => {
    const { getByText, getByA11yHint } = render(<App />);
    // Form1Screen go to Form2Screen
    fireEvent.press(getByA11yHint("goToForm2Button"));

    // Form2Screen go Back
    fireEvent.press(getByA11yHint("goBackButton"));
    const form1Text = getByText("Form1Screen");
    const searchText = getByText("Go to Search Location Screen");

    expect(form1Text).toBeTruthy();
    expect(searchText).toBeTruthy();
  });

  test("Search Location Screen navigates Back", () => {
    const { getByText, getByA11yHint } = render(<App />);
    // Form1Screen go to SearchLocationScreen
    fireEvent.press(getByText("Go to Search Location Screen"));

    // SearchLocationScreen go Back
    fireEvent.press(getByA11yHint("goBackButton"));
    const form1Text = getByText("Form1Screen");
    const searchText = getByText("Go to Search Location Screen");

    expect(form1Text).toBeTruthy();
    expect(searchText).toBeTruthy();
  });

  test("Results Screen navigates Back", () => {
    const { getByText, getByA11yHint } = render(<App />);
    // Form1Screen go to Form2Screen
    fireEvent.press(getByA11yHint("goToForm2Button"));

    // Form2Screen go to ResultsScreen
    fireEvent.press(getByA11yHint("goToResultsButton"));

    // Form2Screen go to ResultsScreen
    fireEvent.press(getByA11yHint("goBackButton"));

    const form2Text = getByText("Form2Screen");

    expect(form2Text).toBeTruthy();
  });
});
