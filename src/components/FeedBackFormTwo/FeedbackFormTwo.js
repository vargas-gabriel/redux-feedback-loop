import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class FeedbackFormTwo extends Component {
	state = {
		newUnderstanding: {
			understanding: "",
		},
	};
	componentDidMount() {
		console.log("component mounted 2");
	}
	handleSubmit = (event) => {
		//event.preventDefault();
		console.log("submitted!");
		this.nextPage();
	};
	handleChangeFor = (event) => {
		this.props.dispatch({
			type: "SET_UNDERSTANDING",
			payload: event.target.value,
		});
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
					Select a number
					<input
						required
						type='number'
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

//export default FeedbackFormTwo;
export default connect()(withRouter(FeedbackFormTwo));
