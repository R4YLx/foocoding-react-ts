import './styles/App.css'

function App() {
	return (
		<div className='wrapper'>
			<h1 className='headline'>Create new post</h1>

			<form className='form'>
				<div className='text-inputs'>
					<input type='text' placeholder='Post title' required />

					<textarea placeholder='Write your post...' />
				</div>

				<button type='submit' className='btn'>
					Post
				</button>
			</form>

			<h2>Posts</h2>
			<div className='post-wrapper'></div>
		</div>
	)
}

export default App
