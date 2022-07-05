import React from 'react';
import '../css/Button.css';

function Button({ name, isClickButton, clickHandler }) {
	return (
		<button
			className={
				isClickButton ? 'button-click' : 'button-restart'
			}
			onClick={clickHandler}
		>
			{name}
		</button>
	);
}

export default Button;
