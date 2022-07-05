import React from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			clicksNumber: 0,
		};
		this.clickEvent = this.clickEvent.bind(this);
		this.restartCounterEvent =
			this.restartCounterEvent.bind(this);
	}

	// El objeto solo contiene las propiedades que se quieren actualizar, no todo el objeto
	clickEvent() {
		this.setState(({ clicksNumber }) => ({
			clicksNumber: clicksNumber + 1,
		}));
	}

	restartCounterEvent() {
		this.setState({ clicksNumber: 0 });
	}

	render() {
		return (
			<div className='App'>
				<div className='logo-container'>
					<img
						className='logo'
						src={freeCodeCampLogo}
						alt='freecodecamp logo'
					/>
				</div>
				<main className='main-container'>
					<Counter clicksNumber={this.state.clicksNumber} />
					<Button
						name='Click'
						isClickButton={true}
						clickHandler={this.clickEvent}
					/>
					<Button
						name='Restart'
						isClickButton={false}
						clickHandler={this.restartCounterEvent}
					/>
				</main>
			</div>
		);
	}
}

export default App;
