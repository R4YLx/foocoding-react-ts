import { myAllan, myBarbie, myKen } from './exercise-1/doll'
import './styles/App.css'

function App() {
	console.log('Barbie', myBarbie)
	console.log('Ken', myKen.speak('Sublime!'))
	console.log('Allan', myAllan.beAllan())

	return <div className='wrapper'></div>
}

export default App
