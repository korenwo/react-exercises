import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			second: 0,
			isPause: false
		}
	}
	
	onStart () {
		this.interval = setInterval(() => {
			this.setState({second: this.state.second+1}); 
		}, 1000)
	}

	onReset () {
		clearInterval(this.interval);
		this.setState({second: 0});
	}

	onPause () {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.onStart.bind(this)}>Play</button>
					<button onClick={this.onPause.bind(this)}>Pause</button>
					<button onClick={this.onReset.bind(this)}>reset</button>
				</div>
				<div className="Timer__value">{this.state.second}</div>
			</div>
		)
	}
}

export default Timer;
