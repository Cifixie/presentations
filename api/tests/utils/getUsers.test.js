import getUsers from "../../src/utils/getUsers";
import randomness from "../../src/utils/randomness";
import mockRandom from "../_mock/Math.random";

const getUser = () => getUsers(1)[0];

test("getUsers returns given amount of users", () => {
  expect(getUsers(1)).toHaveLength(1);
  expect(getUsers(3)).toHaveLength(3);
  expect(getUsers(5)).toHaveLength(5);
});

test("User do have all properties", () => {
  const users = getUsers(10).forEach(user => {
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("age");
    expect(user).toHaveProperty("arbitrary");
  });
});

test("Returned User do have all properties if probability is more than low", () => {
  mockRandom(1);
  const user = getUser();
  debugger;
  expect(user).toHaveProperty("name");
  expect(user).toHaveProperty("age", undefined);
  expect(user).toHaveProperty("arbitrary", "");
});

test("User should always have a name", () => {
  mockRandom(1);
  getUsers(10).forEach(user => {
    expect(user).not.toHaveProperty("name", undefined);
  });
});
