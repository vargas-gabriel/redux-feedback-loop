import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";

import registerServiceWorker from "./registerServiceWorker";

const initialEmotions = {
	feeling: "",
	understanding: "",
	support: "",
	comments: "",
};

const theFeedBack = (state = initialEmotions, action) => {
	if (action.type === "SET_FEELING") {
		//can return just action.payload- don't have to assign a var
		//action.payload = result.rows/ response.data
		return { ...state, feeling: action.payload }; //return action.payload
	}
	if (action.type === "SET_UNDERSTANDING") {
		//can return just action.payload- don't have to assign a var
		//action.payload = result.rows/ response.data
		return { ...state, understanding: action.payload }; //return action.payload
	}
	if (action.type === "SET_SUPPORT") {
		//can return just action.payload- don't have to assign a var
		//action.payload = result.rows/ response.data
		return { ...state, support: action.payload }; //return action.payload
	}
	if (action.type === "SET_COMMENTS") {
		//can return just action.payload- don't have to assign a var
		//action.payload = result.rows/ response.data
		return { ...state, comments: action.payload }; //return action.payload
	}
	return state;
};

const reduxStore = createStore(
	combineReducers({
		theFeedBack,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
