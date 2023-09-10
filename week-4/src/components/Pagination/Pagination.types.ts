import type { SetURLSearchParams } from 'react-router-dom'
import type { Info } from '../../types/types'

export interface PaginationProps {
	info?: Info
	page?: string | null
	query?: string | null
	onSetSearchParams: SetURLSearchParams
}
