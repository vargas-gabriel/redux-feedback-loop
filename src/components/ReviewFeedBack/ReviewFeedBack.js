import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ReviewFeedBack extends Component {
	state = {
		everything: [],
	};
	componentDidMount() {
		console.log("component mounted Review");
	}
	handleSubmit = (event) => {
		event.preventDefault();
		console.log("submitted!");
	};
	handleChangeFor = (event) => {
		console.log("inHandleChangeFor", event.target.value);
	};
	render() {
		return (
			<div>
				Review Your Feedback
				<form onSubmit={this.handleSubmit}>
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default ReviewFeedBack;
