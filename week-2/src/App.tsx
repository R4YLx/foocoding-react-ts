import { useState } from 'react'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState<any>([
		{ title: 'Hello World', body: 'This is my first post' },
		{ title: 'Pizza is great', body: 'I love pizza' },
		{ title: 'Coding is fun', body: 'I enjoy coding' },
		{ title: 'TypeScript is awesome but', body: 'is slowly killing me 💀' }
	])

	function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const element = event.target as HTMLFormElement

		const formData = new FormData(element)

		const newTitle = formData.get('title') as string
		const newBody = formData.get('body') as string

		const newPost = { title: newTitle, body: newBody }

		setPosts([...posts, newPost])

		element.reset()
	}

	return (
		<div className='wrapper'>
			<h1 className='headline'>Create new post</h1>

			<form className='form' onSubmit={handleFormSubmit}>
				<input name='title' type='text' placeholder='Title here' required />
				<textarea name='body' placeholder='Write your post here' />
				<button type='submit' className='btn'>
					Post
				</button>
			</form>

			<div className='post-wrapper'>
				{posts.map((post, index) => (
					<div className='post' key={index}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
