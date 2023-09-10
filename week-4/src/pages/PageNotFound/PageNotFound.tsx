import Headline from '../../components/Headline'

import './PageNotFound.css'

function PageNotFound() {
	return (
		<div className='page page-not-found'>
			<Headline element='h1' className='page-not-found-title'>
				Sorry, couldn't find the page you were looking for
			</Headline>
		</div>
	)
}

export default PageNotFound
