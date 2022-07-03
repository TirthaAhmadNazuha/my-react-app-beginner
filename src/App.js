import React, { useState } from 'react';
import './App.css';
import Header from './components/heading';
import MyButton from './components/mybtn';

const App = () => {
	const [getNameValue, setNameValue] = useState('')
	const changeNameUser = () => {
		const getNameUser = prompt('masukan nama kamu!')
		setNameValue(getNameUser)
	}
	return (
		<div className='App'>
			<Header name={getNameValue} />
			<MyButton triger={changeNameUser} />
		</div>
	);
}

export default App;
