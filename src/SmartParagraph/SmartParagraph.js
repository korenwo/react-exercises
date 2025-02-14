import React, { Component } from 'react';
import './SmartParagraph.scss';

class SmartParagraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of great explorers.',
			isCut: false
		};
	}

	cutText () {
		let indexOfLetter = 99;
		while (this.state.text[indexOfLetter] !== " ") {
			indexOfLetter++;
		}
		return this.state.text.slice(0, indexOfLetter);
	}

	onToggle () {
		this.setState({
			isCut: !this.state.isCut
		});
	}

	render() {
		return (
			<div className="SmartParagraph">
				<p className="SmartParagraph__explanation">
					When clicking on "Toggle" button,
					the following paragraph should display only 100 characters.
					The challenge is cutting between words!
					Clicking again should show all of the text back.
				</p>
				<p className="SmartParagraph__value">
					{this.state.isCut ? this.cutText(this.state.text) : this.state.text}
				</p>
				<button onClick={this.onToggle.bind(this)}>Toggle</button>
			</div>
		)
	}
}

export default SmartParagraph;
