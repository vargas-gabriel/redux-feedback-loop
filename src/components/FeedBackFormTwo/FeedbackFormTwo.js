import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FeedbackFormTwo extends Component {
	state = {
		understanding: [],
	};
	componentDidMount() {
		console.log("component mounted 2");
	}
	handleSubmit = (event) => {
		event.preventDefault();
		console.log("submitted!");
	};
	handleChangeFor = (event) => {
		console.log("inHandleChangeFor", event.target.value);
	};
	nextPage = () => {
		console.log(this.props.history, "next page");
		this.props.history.push("/3");
	};
	render() {
		return (
			<div>
				How well are you understanding the content?
				<form onSubmit={this.handleSubmit}>
					Understanding?
					<input
						required
						type='Number'
						placeholder='Select a Number'
						onChange={(event) => this.handleChangeFor(event)}></input>
					<button type='submit' onClick={this.nextPage}>
						Next
					</button>
				</form>
			</div>
		);
	}
}

//export default FeedbackFormTwo;
export default withRouter(FeedbackFormTwo);
