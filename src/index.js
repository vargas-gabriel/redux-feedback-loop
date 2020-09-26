import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
//import { createStore, combineReducers } from "redux";
//import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";

// const formOneReducer = (state = [], action) => {
// 	if (action.type === "SET_FEELING") {
// 		//can return just action.payload- don't have to assign a var
// 		//action.payload = result.rows/ response.data
// 		return action.payload;
// 		//return action.payload
// 	}
// 	return state;
// };
// const formTwoReducer = (state = [], action) => {
// 	if (action.type === "SET_UNDERSTANDING") {
// 		//can return just action.payload- don't have to assign a var
// 		//action.payload = result.rows/ response.data
// 		return action.payload;
// 		//return action.payload
// 	}
// 	return state;
// };
// const formThreeReducer = (state = [], action) => {
// 	if (action.type === "SET_SUPPORT") {
// 		//can return just action.payload- don't have to assign a var
// 		//action.payload = result.rows/ response.data
// 		return action.payload;
// 		//return action.payload
// 	}
// 	return state;
// };
// const formFourReducer = (state = [], action) => {
// 	if (action.type === "SET_COMMENTS") {
// 		//can return just action.payload- don't have to assign a var
// 		//action.payload = result.rows/ response.data
// 		return action.payload;
// 		//return action.payload
// 	}
// 	return state;
// };
// const reviewReducer = (state = [], action) => {
// 	if (action.type === "SET_EVERYTHING") {
// 		//can return just action.payload- don't have to assign a var
// 		//action.payload = result.rows/ response.data
// 		return action.payload;
// 		//return action.payload
// 	}
// 	return state;
// };

// const store = createStore(
// 	combineReducers({
// 		formOne: formOneReducer,
// 		formTwo: formTwoReducer,
// 		formThree: formThreeReducer,
// 		formFour: formFourReducer,
// 		review: reviewReducer,
// 	})
// );

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
