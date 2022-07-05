import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';

function App() {
	console.log('Componente padre');
	const [clicksNumber, setClicksNumber] = useState(0);

	const clickEvent = () => {
		setClicksNumber(clicksNumber + 1);
	};

	const restartCounterEvent = () => {
		setClicksNumber(0);
	};

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
				<Counter clicksNumber={clicksNumber} />
				<Button
					name='Click'
					isClickButton={true}
					clickHandler={clickEvent}
				/>
				<Button
					name='Restart'
					isClickButton={false}
					clickHandler={restartCounterEvent}
				/>
			</main>
		</div>
	);
}

export default App;
