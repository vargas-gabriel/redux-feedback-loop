import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class FeedbackFormOne extends Component {
	componentDidMount() {
		console.log("component mounted");
	}
	handleSubmit = (event) => {
		//event.preventDefault();
		console.log("submitted!");
		this.nextPage();
	};
	handleChangeFor = (event) => {
		this.props.dispatch({
			type: "SET_FEELING",
			payload: event.target.value,
		});
	};
	nextPage = () => {
		console.log(this.props.history, "next page");
		//send to second question
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

export default connect()(withRouter(FeedbackFormOne));
