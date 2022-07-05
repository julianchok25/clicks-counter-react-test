import React from 'react';
import '../css/Counter.css';

class Counter extends React.Component {
	render() {
		return (
			<div className='counter'>{this.props.clicksNumber}</div>
		);
	}
}

export default Counter;
