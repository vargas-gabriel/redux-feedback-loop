import React, { Component } from "react";
import { connect } from "react-redux";
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
		this.nextPage();
	};
	handleChangeFor = (event) => {
		this.props.dispatch({
			type: "SET_SUPPORT",
			payload: event.target.value,
		});
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
					Select a number
					<input
						required
						type='Number'
						min='1'
						max='5'
						placeholder='Select a Number'
						onChange={this.handleChangeFor}></input>
					<button type='submit'>Next</button>
				</form>
			</div>
		);
	}
}

//export default FeedbackFormThree;
export default connect()(withRouter(FeedbackFormThree));
