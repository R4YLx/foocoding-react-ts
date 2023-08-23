import { IPost } from '../../types/post.types'

import './Post.css'

// I'm writing my interface in this file since the component so small, but you can create a separate file for it if you want.
interface PostItemProps {
	post: IPost
	index: number
}

function PostItem({ post, index }: PostItemProps) {
	return (
		<div className='post' key={index}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	)
}

export default PostItem
