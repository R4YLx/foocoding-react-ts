import Headline from '../../components/Headline'

import './HomePage.css'
import '../_styles/shared.css'

function HomePage() {
	return (
		<section className='home-page page'>
			<Headline element='h1' className='welcome-text'>
				Welcome to my Disney Characters database
			</Headline>
		</section>
	)
}

export default HomePage
