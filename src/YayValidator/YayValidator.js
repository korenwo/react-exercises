import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	handleChange(e) {
		if (e.target.value === "yay") {
			this.setState({
				bgColor: "green"
			})
		}
	}

	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input type="text" className="text-box" style={{ backgroundColor: this.state.bgColor }} onChange={e=>this.handleChange(e)} />
			</div>
		)
	}
}

export default YayValidator;
