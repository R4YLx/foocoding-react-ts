import { Route, Routes } from 'react-router-dom'

import Navigation from './components/Navigation'
import Logo from './components/Logo'

import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage'
import SearchPage from './pages/SearchPage'
import PageNotFound from './pages/PageNotFound'

function App() {
	return (
		<main>
			<Navigation />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/characters' element={<CharactersPage />} />
				<Route path='/characters/:id' element={<CharacterPage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>

			<Logo className='logo' />
		</main>
	)
}

export default App
