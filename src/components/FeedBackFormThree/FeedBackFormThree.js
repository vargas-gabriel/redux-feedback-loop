import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FeedbackFormThree extends Component {
	state = {
		support: [],
	};
	componentDidMount() {
		console.log("component mounted 3");
	}
	handleSubmit = (event) => {
		//event.preventDefault();
		console.log("submitted!");
	};
	handleChangeFor = (event) => {
		console.log("inHandleChangeFor", event.target.value);
	};
	nextPage = () => {
		console.log(this.props.history, "next page");
		this.props.history.push("/4");
	};
	render() {
		return (
			<div>
				How well are you being supported?
				<form onSubmit={this.handleSubmit}>
					Support?
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

//export default FeedbackFormThree;
export default withRouter(FeedbackFormThree);
