import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			HottestDay : 0,
			ColdestDay : 0
		}
	}

	componentDidMount() {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(response => response.json())
			.then(weatherI => {
				const weather = weatherI.map(element => {
					return element.temperature
				});
				const hot = Math.max(...weather);
				const cold = Math.min(...weather);
				console.log(hot);
				this.setState({
					hot: hot,
					cold : cold
				})
			})
	}

	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is:</strong>
					{this.state.hot}
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is:</strong>
					{this.state.cold}
				</div>
			</div>
		)
	}
}

export default Weather;
