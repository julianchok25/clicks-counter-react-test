import React from 'react';
import '../css/Button.css';

class Button extends React.Component {
	render() {
		return (
			<button
				className={
					this.props.isClickButton
						? 'button-click'
						: 'button-restart'
				}
				onClick={this.props.clickHandler}
			>
				{this.props.name}
			</button>
		);
	}
}

export default Button;
