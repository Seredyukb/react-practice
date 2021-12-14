import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import friendsReducer from "./FriendReducer";
import UsersReducer from "./UsersReducer";
import NewsReducer from "./NewsReducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        friendsPage: friendsReducer,
        usersPage: UsersReducer,
        newsPage: NewsReducer,
        auth: authReducer,
        form: formReducer,
    })
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;