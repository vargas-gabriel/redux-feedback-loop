import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WelcomeForm extends Component {
	nextPage = () => {
		//sends you to first question
		this.props.history.push("/1");
	};

	render() {
		return (
			<div>
				<p>Ready to give feedback?</p>
				<button onClick={this.nextPage}>Yes!</button>
			</div>
		);
	}
}

//export default FeedbackFormTwo;
export default connect()(withRouter(WelcomeForm));
