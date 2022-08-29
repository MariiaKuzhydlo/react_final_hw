import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./redux/reducers/user-reducer";

const reducer = combineReducers({
	userReducer,
})

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store;