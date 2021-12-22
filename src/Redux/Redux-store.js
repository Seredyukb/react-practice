import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import friendsReducer from "./FriendReducer";
import UsersReducer from "./UsersReducer";
import NewsReducer from "./NewsReducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        friendsPage: friendsReducer,
        usersPage: UsersReducer,
        newsPage: NewsReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
    })


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));




window.__store__ = store;

export default store;