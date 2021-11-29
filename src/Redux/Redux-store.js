import { combineReducers, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import friendsReducer from "./FriendReducer";
import UsersReducer from "./UsersReducer";
import NewsReducer from "./NewsReducer";
import authReducer from "./Auth-reducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        friendsPage: friendsReducer,
        usersPage: UsersReducer,
        newsPage: NewsReducer,
        auth: authReducer,
    })

let store = createStore(reducers);

window.store = store;

export default store;