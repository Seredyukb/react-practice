import { combineReducers, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import friendsReducer from "./FriendReducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        friendsPage: friendsReducer,
    })

let store = createStore(reducers);

window.store = store;

export default store;