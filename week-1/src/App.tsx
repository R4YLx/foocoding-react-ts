import { useState } from 'react'
import './App.css'

function App() {
	const [isPlaying, setIsPlaying] = useState(false)

	function handleClick() {
		setIsPlaying(!isPlaying)
	}

	return (
		<div className='wrapper'>
			<h1>Hello 👋</h1>
			<h2>I'm Raymond</h2>

			<button onClick={handleClick} className={isPlaying ? 'pause' : 'play'}>
				{isPlaying ? 'Pause' : 'Play'}
			</button>
		</div>
	)
}

export default App
