import { useState } from 'react'
import type { IPost } from './types/post.types'

import Form from './components/Form'
import Post from './components/Post'
import Headline from './components/Headline/Headline'
import Wiiiiieee from './components/Wiiiiieee/Wiiiiieee'

import './styles/App.css'

function App() {
	const [awesome, setAwesome] = useState(false)
	const [posts, setPosts] = useState<IPost[]>([
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
		setAwesome(true)

		element.reset()

		setTimeout(() => {
			setAwesome(false)
		}, 1500)
	}

	return (
		<div className='wrapper'>
			{/* You may wonder what this is, try to run it and see for yourself */}
			{awesome && <Wiiiiieee className='wiiiiie' />}

			<Headline className='headline' element='h1'>
				Create new post
			</Headline>

			<Form onSubmit={handleFormSubmit} />

			<Headline element='h2'>Posts</Headline>

			{/* I'm not creating a Posts/PostList component since it will only be used for this case. Nothing wrong with creating a component tho */}
			<div className='post-wrapper'>
				{posts.map((post, index) => (
					<Post key={index} post={post} index={index} />
				))}
			</div>
		</div>
	)
}

export default App
