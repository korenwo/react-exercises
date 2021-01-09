import React, { Component } from 'react';
import './LastClick.scss';

class LastClick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			LastClicked: ""
		}
	}
	LastClick(e) {
		this.setState({
			LastClicked: e.target.value
		})
	}

	render() {
		return (
			<div className="LastClick">
				<p>
					There are <b>3</b> buttons.<br />
					Make the box show the number of the last clicked button.
				</p>
				<div className="LastClick__buttons">
					<button onClick= {this.LastClick.bind(this)} value="1">1</button>
					<button onClick= {this.LastClick.bind(this)} value="2">2</button>
					<button onClick= {this.LastClick.bind(this)} value="3">3</button>
				</div>
				<div className="LastClick__box">
					{this.state.LastClicked}
				</div>
			</div>
		)
	}
}

export default LastClick;
