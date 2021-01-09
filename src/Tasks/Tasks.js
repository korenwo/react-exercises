import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.state= {
			tasks: [],
			task: ''
		}
	}

	addTask () {
		this.state.tasks.push(this.state.task);
		this.setState({task: ''});
	}
	
	handleChange(event) {
		this.setState({task: event.target.value});
	}	

	render() {
		return (
			<div className="Tasks">
				<h3>Tasks:</h3>
				<ul>
					{this.state.tasks.map(item => <li>{item}</li>)}
				</ul>
				<p>Make a Todo list (add only):</p>
				<input placeholder="Your task..." value={this.state.task} onChange={this.handleChange.bind(this)} /> 
				<button onClick={this.addTask.bind(this)}>Add task</button>
			</div>
		)
	}
}

export default Tasks;
