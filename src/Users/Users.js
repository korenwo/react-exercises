import React, { Component } from 'react';
import './Users.scss';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state={ 
			users: []
		}
	}

	componentDidMount () {
		this.getUsers();
	}

	getUsers () {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/users.json')
			.then(response => response.json())
			.then(data => {
				this.setState({users: data});
			});
	}

	render() {
		return (
			<div className="Users">
				<h3>Users:</h3>
				<p>
					Use the following API to make a list of user names:<br />
					<code>https://netcraft2.s3-eu-west-1.amazonaws.com/users.json</code>
				</p>
				<ul>
					{this.state.users.map((item,i) => <li key={i}>{item.name}</li>)}	
				</ul>
			</div>
		)
	}
}

export default Users;
