import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import type { CharacterResponse } from '../../types/types'

import LoadingSpinner from '../../components/LoadingSpinner'
import Headline from '../../components/Headline'
import List from '../../components/List'
import Button from '../../components/Button'

import './CharacterPage.css'
import '../_styles/shared.css'

function CharacterPage() {
	const { id } = useParams()

	const {
		data: character,
		error,
		isError,
		isLoading
	} = useFetch<CharacterResponse>(`http://api.disneyapi.dev/character/${id}`)

	const navigate = useNavigate()

	return (
		<div className='character-page page'>
			{isError && <div>{error?.message}</div>}
			{isLoading && <LoadingSpinner />}

			<Button className='character-back-button' onClick={() => navigate(-1)}>
				Back
			</Button>

			<div className='character-details-container'>
				<div className='character-details-image-container'>
					<img
						src={character?.data.imageUrl}
						alt={character?.data.name}
						className='character-details-image'
					/>
				</div>
				<div className='character-details-info'>
					<Headline element='h3'>{character?.data.name}</Headline>

					<hr />

					<p className='details-title'>Films:</p>
					<List data={character?.data.films} />

					<p className='details-title'>Allies:</p>
					<List data={character?.data.allies} />

					<p className='details-title'>Enemies:</p>
					<List data={character?.data.enemies} />

					<p className='details-title'>Video Games:</p>
					<List data={character?.data.videoGames} />
				</div>
				B
			</div>
		</div>
	)
}

export default CharacterPage
