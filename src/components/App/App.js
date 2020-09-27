import React, { Component } from "react";
import axios from "axios";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import "./App.css";
import FeedbackFormOne from "../FeedbackFormOne/FeedbackFormOne";
import FeedbackFormTwo from "../FeedBackFormTwo/FeedbackFormTwo";
import FeedbackFormThree from "../FeedBackFormThree/FeedBackFormThree";
import FeedBackFormFour from "../FeedBackFormFour/FeedBackFormFour";
import ReviewFeedBack from "../ReviewFeedBack/ReviewFeedBack";
import SubmissionForm from "../SubmissionForm/SubmissionForm";
import WelcomeForm from "../WelcomeForm/WelcomeForm";
class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<header className='App-header'>
						<h1 className='App-title'>Feedback!</h1>
						<h4>
							<i>Don't forget it!</i>
						</h4>
					</header>
					<br />
					<Route path='/' exact>
						<WelcomeForm />
					</Route>
					<Route path='/1'>
						<FeedbackFormOne />
					</Route>
					<Route path='/2'>
						<FeedbackFormTwo />
					</Route>
					<Route path='/3'>
						<FeedbackFormThree />
					</Route>
					<Route path='/4'>
						<FeedBackFormFour />
					</Route>
					<Route path='/5'>
						<ReviewFeedBack />
					</Route>
					<Route path='/6'>
						<SubmissionForm />
					</Route>
				</div>
			</Router>
		);
	}
}

export default App;
