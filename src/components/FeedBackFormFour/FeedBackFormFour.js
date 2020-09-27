import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class FeedbackFormFour extends Component {
	componentDidMount() {
		console.log("component mounted 4");
	}
	handleSubmit = (event) => {
		//event.preventDefault();
		console.log("submitted!");
		this.nextPage();
	};
	handleChangeFor = (event) => {
		this.props.dispatch({
			type: "SET_COMMENTS",
			payload: event.target.value,
		});
	};

	nextPage = () => {
		console.log(this.props.history, "next page");
		this.props.history.push("/5");
	};
	render() {
		return (
			<div>
				Any comments you want to leave?
				<form onSubmit={this.handleSubmit}>
					Comments?
					<input
						type='text'
						min='1'
						max='5'
						placeholder='Leave a comment'
						onChange={this.handleChangeFor}></input>
					<button type='submit'>Next</button>
				</form>
			</div>
		);
	}
}

//export default FeedbackFormFour;
export default connect()(withRouter(FeedbackFormFour));
