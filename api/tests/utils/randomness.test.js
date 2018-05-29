import randomness from "../../src/utils/randomness";
import mockRandom from "../_mock/Math.random";

test("randomness returns given amount of users", () => {
  mockRandom(0.5);
  expect(randomness(0.6, true, false)).toBeTruthy();
  expect(randomness(0.4, true, false)).toBeFalsy();
});
