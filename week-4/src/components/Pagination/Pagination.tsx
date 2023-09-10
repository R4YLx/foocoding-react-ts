import Button from '../Button'
import type { PaginationProps } from './Pagination.types'

import './Pagination.css'

function Pagination({ info, onSetSearchParams, page, query }: PaginationProps) {
	return (
		<div className='pagination'>
			<Button
				className='pagination-button'
				disabled={!info?.previousPage}
				onClick={() => {
					onSetSearchParams({
						page: String(Number(page) - 1),
						query: query || ''
					}),
						window.scrollTo(0, 0)
				}}
			>
				Previous Page
			</Button>

			<Button
				className='pagination-button'
				disabled={!info?.nextPage}
				onClick={() => {
					onSetSearchParams({
						page: String(Number(page) + 1),
						query: query || ''
					}),
						window.scrollTo(0, 0)
				}}
			>
				Next
			</Button>
		</div>
	)
}

export default Pagination
