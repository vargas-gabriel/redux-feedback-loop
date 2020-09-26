import React, { Component } from "react";
import { Route, HashRouter as Router, Link } from "react-router-dom";

class FeedbackFormOne extends Component {
	state = {
		feedBackList: [],
	};
	componentDidMount() {
		console.log("component mounted");
	}
	handleSubmit = (event) => {
		event.preventDefault();
		console.log("submited!");
	};
	// handleChangeFor = (feeling, event) => {
	// 	console.log("inHandleChangeFor");
	// };
	nextPage = () => {
		console.log(this.props.history);
		//this.props.history.push("/2");
	};
	render() {
		return (
			<div>
				How are you feeling today?
				<form onSubmit={this.handleSubmit}>
					Select a number
					<input
						required
						type='Number'
						placeholder='Select a Number'
						// onChange={(event) => this.handleChangeFor(feeling, event)}
					></input>
					<button type='submit' onClick={this.nextPage}>
						Next
					</button>
				</form>
			</div>
		);
	}
}

export default FeedbackFormOne;
