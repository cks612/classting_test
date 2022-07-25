import SelectorsBox from "../components/SelectorsBox/SelectorsBox";
import submitAnswersHandler from "../pages/Quiz";
import renderer from "react-test-renderer";

describe("SelectorsBox", () => {
  let component = null;
  const selector: string = "true";
  const isCorrect: boolean = true;
  const isSelected: boolean = true;

  it("초기 렌더링이 문제없이 되야함", () => {
    component = renderer.create(
      <SelectorsBox
        selector={selector}
        isCorrect={isCorrect}
        isSelected={isSelected}
        submitAnswersHandler={submitAnswersHandler}
      />
    );
  });

  it("selectorBox", () => {
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
