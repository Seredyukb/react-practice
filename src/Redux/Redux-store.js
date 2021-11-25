import { combineReducers, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import friendsReducer from "./FriendReducer";
import UsersReducer from "./UsersReducer";
import NewsReducer from "./NewsReducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        friendsPage: friendsReducer,
        usersPage: UsersReducer,
        newsPage: NewsReducer,
    })

let store = createStore(reducers);

window.store = store;

export default store;