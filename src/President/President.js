import React, { Component } from 'react';
import './President.scss';

class President extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name:"",
			presidents: [
				{
					firstName: 'Bill',
					lastName: 'Clinton',
					image: 'bill.jpeg'
				},
				{
					firstName: 'George',
					lastName: 'Bush',
					image: 'george.jpeg'
				},
				{
					firstName: 'Barack',
					lastName: 'Obama',
					image: 'barack.jpeg'
				}
			],
		};
	}

	getPresident(president) {
		this.setState({
			name: president.firstName + " " + president.lastName
		})
	}

	render() {
		return (
			<div className="President">
				<p>When clicking on a president, display his <strong>full</strong> name below.</p>
				<div className="president-list">
					{this.state.presidents.map((president, i) => {
						return <img key={i} src={require('./images/' + president.image)} alt="" onClick={this.getPresident.bind(this, president)} />
					})}
				</div>
				<div>
					<strong>You selected: </strong> Full name here
					<p>{this.state.name}</p>
				</div>
			</div>
		)
	}
}

export default President;
