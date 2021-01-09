import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			itemsFiltered: [],

		};
	}
	componentDidMount() {
		this.setState({
			itemsFiltered: this.state.items
		})
	}


	toFilter(e) {
		const value = e.target.value.toLowerCase();
		this.setState({
			itemsFiltered: this.state.items.filter(item => item.toLowerCase().includes(value)),
		})
	}
	render() {
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onChange={e => this.toFilter(e)} />
				<ul>
					{this.state.itemsFiltered.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Filter;