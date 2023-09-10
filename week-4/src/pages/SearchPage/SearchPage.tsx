import { useSearchParams } from 'react-router-dom'
import type { CharactersResponse } from '../../types/types'
import { useFetch } from '../../hooks/useFetch'

import Headline from '../../components/Headline'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LoadingSpinner from '../../components/LoadingSpinner'
import CharacterCard from '../../components/CharacterCard'
import Pagination from '../../components/Pagination'

import './SearchPage.css'
import '../_styles/shared.css'

function SearchPage() {
	const [searchParams, setSearchParams] = useSearchParams({
		query: 'null',
		page: '1'
	})

	const query = searchParams.get('query')
	const page = searchParams.get('page')

	const {
		data: results,
		error,
		isError,
		isLoading
	} = useFetch<CharactersResponse>(
		`https://api.disneyapi.dev/character?name=${query}&page=${page}&pageSize=20`
	)

	const hasResults = results && results.data.length > 0

	function onSearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const element = event.target as HTMLFormElement

		const formData = new FormData(element)

		const query = formData.get('query') as string

		if (query === '') return

		setSearchParams({ query, page: '1' })

		element.reset()
	}

	return (
		<div className='page'>
			<Headline element='h2' className='search-title'>
				Search for a character
			</Headline>

			<form className='search-form' onSubmit={onSearch}>
				<label className='search-label'>
					<Input type='search' placeholder='Search...' name='query' />
				</label>
				<Button type='submit'>Search</Button>
			</form>

			{isError && <p>{error?.message}</p>}
			{isLoading && <LoadingSpinner />}

			{!hasResults && query !== 'null' && (
				<p className='no-results'>{`No results found of "${query}"`}</p>
			)}

			<div className='results-wrapper'>
				{results?.data.map((result) => (
					<CharacterCard character={result} key={result._id} />
				))}
			</div>

			{hasResults && (
				<Pagination
					page={page}
					query={query}
					info={results.info}
					onSetSearchParams={setSearchParams}
				/>
			)}
		</div>
	)
}

export default SearchPage
