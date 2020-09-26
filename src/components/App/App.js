import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FeedbackFormOne from "../FeedbackFormOne/FeedbackFormOne";
import FeedbackFormTwo from "../FeedBackFormTwo/FeedbackFormTwo";
import FeedbackFormThree from "../FeedBackFormThree/FeedBackFormThree";
import FeedBackFormFour from "../FeedBackFormFour/FeedBackFormFour";
import ReviewFeedBack from "../ReviewFeedBack/ReviewFeedBack";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Feedback!</h1>
					<h4>
						<i>Don't forget it!</i>
					</h4>
				</header>
				<br />
				<FeedbackFormOne />
				<FeedbackFormTwo />
				<FeedbackFormThree />
				<FeedBackFormFour />
				<ReviewFeedBack />
			</div>
		);
	}
}

export default App;
