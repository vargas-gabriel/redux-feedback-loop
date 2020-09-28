import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

class ReviewFeedBack extends Component {
	componentDidMount() {
		console.log("component mounted Review");
	}
	// // handleSubmit = (event) => {
	// // 	event.preventDefault();
	// // 	console.log("submitted!");
	// // };
	// // handleChangeFor = (event) => {
	// // 	console.log("inHandleChangeFor", event.target.value);
	// };
	submitFeedback = () => {
		//send to db
		axios({
			method: "POST",
			url: "/feedback",
			data: this.props.reduxState,
		})
			.then((response) => {
				console.log("here is your response:", response);
			})
			.catch((err) => {
				console.log(err);
			});
		this.submitForm();
	};
	submitForm = () => {
		this.props.history.push("/6");
	};
	render() {
		console.log(this.props.reduxState);
		return (
			<div>
				Review Your Feedback
				<form>
					Feeling: {this.props.feeling} {""} Understanding:{""}
					{this.props.understanding} {""}
					Support: {this.props.support} {""} Comments: {this.props.comments}
					<button onClick={this.submitFeedback}>Submit</button>
				</form>
			</div>
		);
	}
}
//map through and render
const mapStateToProps = (reduxState) => ({
	reduxState: reduxState.theFeedBack,
	feeling: reduxState.theFeedBack.feeling,
	understanding: reduxState.theFeedBack.understanding,
	support: reduxState.theFeedBack.support,
	comments: reduxState.theFeedBack.comments,
});
export default connect(mapStateToProps)(withRouter(ReviewFeedBack));
