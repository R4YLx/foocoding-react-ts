import { NavLink, useLocation } from 'react-router-dom'

import './Navigation.css'

function Navigation() {
	const location = useLocation()

	return (
		<nav className='navigation'>
			<span className='page-title'>DCDB</span>

			<ul className='navigation-list'>
				<li className='list-item'>
					<NavLink
						to='/'
						className={location.pathname === '/' ? 'active' : 'title'}
					>
						Home
					</NavLink>
				</li>
				<li className='list-item'>
					<NavLink
						to='/characters'
						className={location.pathname === '/characters' ? 'active' : 'title'}
					>
						Characters
					</NavLink>
				</li>
				<li className='list-item'>
					<NavLink
						to='/search'
						className={location.pathname === '/search' ? 'active' : 'title'}
					>
						Search
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
