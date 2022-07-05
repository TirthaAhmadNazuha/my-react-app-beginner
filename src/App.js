import './App.css';
import Navbar from './components/nav';
import SearchBarHome from './components/home/searchbar';
import ContentHome from './components/home/conten';
const App = () => {
	// document.querySelector('.home-page .con').style.overflowY = 'hidden'
	// window.addEventListener('scroll', () => {
	// 	const searchBarHome = document.querySelector('.home-page .search-bar-home').offsetTop + document.querySelector('.home-page .search-bar-home').clientHeight
	// 	if (window.scrollY >= searchBarHome) {
	// 		document.querySelector('.home-page .con').style.overflowY = 'auto'
	// 		window.blur()
	// 		document.querySelector('.home-page .con').focus()
	// 	} else {
	// 		document.querySelector('.home-page .con').style.overflowY = 'hidden'
	// 		document.querySelector('.home-page .con').blur()
	// 		window.focus()
	// 	}
	// })
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
