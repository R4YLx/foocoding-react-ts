import { Link } from 'react-router-dom'
import Headline from '../Headline'
import type { CharacterCardProps } from './CharacterCard.types'

import './CharacterCard.css'

function CharacterCard({ character }: CharacterCardProps) {
	return (
		<Link to={`/characters/${character._id}`} className='character-card'>
			<div className='image-container'>
				<img
					src={character.imageUrl}
					alt={character.name}
					className='character-image'
				/>

				<div className='name-container'>
					<Headline element='h3' className='character-name'>
						{character.name}
					</Headline>
				</div>
			</div>
		</Link>
	)
}

export default CharacterCard
