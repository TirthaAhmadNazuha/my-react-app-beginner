import './App.css';
import Navbar from './components/nav';
import SearchBarHome from './components/home/searchbar';
import ContentHome from './components/home/conten';
const App = () => {
	return (
		<div className='App'>
			<div className='home-page'>
				<SearchBarHome />
				<ContentHome />
			</div>
			<Navbar />
		</div>
	);
}

export default App;
