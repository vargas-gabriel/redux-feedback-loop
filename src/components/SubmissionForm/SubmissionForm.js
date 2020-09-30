import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SubmissionForm extends Component {
	refreshFeedBack = () => {
		this.props.dispatch({
			type: "CLEAR_VALUES",
		});
		this.props.history.push("/");
	};
	render() {
		return (
			<div>
				<p>Thank You!</p>
				<button onClick={this.refreshFeedBack}>Leave New Feedback</button>
			</div>
		);
	}
}

//export default FeedbackFormTwo;
export default connect()(withRouter(SubmissionForm));
