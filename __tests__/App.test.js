import renderer from "react-test-renderer";
import App from "../App.js";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("<App />", () => {
  it("has one child", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree.children.length).toBe(1);
  });
});
