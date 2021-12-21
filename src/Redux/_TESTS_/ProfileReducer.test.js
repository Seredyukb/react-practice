import profileReducer, { actionCreatorAddPosta, actionCreatorDeletePost } from "../ProfileReducer";

let state = {
  postData: [
    {
      id: 1,
      message: "Hello, how r u?",
      count: 15,
    },
    {
      id: 2,
      message: "Do you love me?",
      count: 20,
    },
  ],
};

test("new post should be added - postDatat should be incremented", () => {
  //start Data
  let action = actionCreatorAddPosta("IT-Kamasutra.com");

  //action
  let newState = profileReducer(state, action);
  debugger;
  //expectations
  expect(newState.postData.length).toBe(3);
});
test("new message should be IT-Kamasutra.com", () => {
  //start Data
  let action = actionCreatorAddPosta("IT-Kamasutra.com");

  //action
  let newState = profileReducer(state, action);
  debugger;
  //expectations
  expect(newState.postData[2].message).toBe("IT-Kamasutra.com");
});
test("after deleting post the length of postData should be decremented", () => {
  //start data
  let action = actionCreatorDeletePost(2);
  //action
  let newState = profileReducer(state, action);
  debugger;
  //expectations
  expect(newState.postData.length).toBe(2);
});
