import React, { Component } from "react";
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
		console.log("inHandleChangeFor", event.target.value);
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
						placeholder='Add a comment'
						onChange={(event) => this.handleChangeFor(event)}></input>
					<button type='submit'>Next</button>
				</form>
			</div>
		);
	}
}

//export default FeedbackFormFour;
export default withRouter(FeedbackFormFour);
