import React, { Component } from "react";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class FeedbackFormOne extends Component {
	state = {
		feeling: [],
	};
	componentDidMount() {
		console.log("component mounted");
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
		this.props.history.push("/2");
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
						onChange={(event) => this.handleChangeFor(event)}></input>
					<button type='submit' onClick={this.nextPage}>
						Next
					</button>
				</form>
			</div>
		);
	}
}

//export default FeedbackFormOne;
export default withRouter(FeedbackFormOne);
//allows to programatically change which page we're on
