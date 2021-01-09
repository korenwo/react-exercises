import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		};
	}

	increase() {
		this.setState({
			num: Math.min(this.state.num + 1, )
		});
	}

	render() {
		return (
			<div>
				<h1>Counter: </h1>
				<button onClick={this.increase.bind(this)}>Increase</button>
				<span>{this.state.num}</span>
			</div>
		);
	}
}

export default Counter;


