import { useFetch } from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
import type { CharactersResponse } from '../../types/types'

import Headline from '../../components/Headline'
import LoadingSpinner from '../../components/LoadingSpinner'
import CharacterCard from '../../components/CharacterCard'
import Pagination from '../../components/Pagination'

import './CharactersPage.css'
import '../_styles/shared.css'

function CharactersPage() {
	const [searchParams, setSearchParams] = useSearchParams({ page: '1' })

	const page = searchParams.get('page')

	const {
		data: characters,
		error,
		isError,
		isLoading
	} = useFetch<CharactersResponse>(
		`http://api.disneyapi.dev/character?page=${page}&pageSize=20`
	)

	return (
		<div className='page'>
			<Headline element='h3' className='characters-page-title'>
				Characters
			</Headline>

			{isLoading && <LoadingSpinner />}
			{isError && <p>{error?.message}</p>}

			<div className='character-wrapper'>
				{characters?.data.map((character) => (
					<CharacterCard key={character._id} character={character} />
				))}
			</div>

			{characters && (
				<Pagination
					page={page}
					info={characters?.info}
					onSetSearchParams={setSearchParams}
				/>
			)}
		</div>
	)
}

export default CharactersPage
