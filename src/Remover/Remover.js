import React, { Component } from 'react';
import './Remover.scss';

class Remover extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: [
				'Abby Mecoil',
				'Toni Zuck',
				'Peter Hanshfield',
				'Rose Tobernak'
			]
		};
	}

	onRemoved (student) {
		this.setState({
			students: this.state.students.filter(s => student !== s)
		})
	}

	render() {
		return (
			<div className="Remover">
				<h3>Remover:</h3>
				<p>Add a delete button for each student to remove it from the list.</p>
				<ul className="Remover__list">
					{this.state.students.map((student, i) => {
						return <li key={i}>{student} <button onClick={this.onRemoved.bind(this, student)}>Remove</button></li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Remover;
