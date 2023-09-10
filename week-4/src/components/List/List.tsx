import { ListProps } from './List.types'

import './List.css'

function List({ data, ...rest }: ListProps) {
	return (
		<ul {...rest} className='list'>
			{data?.map((data, index) => (
				<li key={index} className='list-item'>
					{data}
				</li>
			))}
		</ul>
	)
}

export default List
