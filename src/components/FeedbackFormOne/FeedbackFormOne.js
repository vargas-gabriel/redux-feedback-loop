import React, { Component } from "react";
import { Route, HashRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class FeedbackFormOne extends Component {
	state = {
		newFeeling: {
			feeling: "",
		},
	};
	componentDidMount() {
		console.log("component mounted");
	}
	handleSubmit = (event) => {
		//event.preventDefault();
		console.log("submitted!");
		this.nextPage();
	};
	handleChangeFor = (propertyName, event) => {
		console.log([propertyName], "is:", event.target.value);
		this.setState({
			newFeeling: {
				...this.state.newFeeling,
				[propertyName]: event.target.value,
			},
		});
		console.log(this.state.newFeeling);
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
						onChange={(event) =>
							this.handleChangeFor("feeling", event)
						}></input>
					<button type='submit'>Next</button>
				</form>
			</div>
		);
	}
}

//export default FeedbackFormOne;
export default withRouter(FeedbackFormOne);
