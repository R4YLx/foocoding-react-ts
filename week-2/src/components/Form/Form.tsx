import Button from '../Button'
import Input from '../Input'
import Textarea from '../Textarea'

import './Form.css'

// I'm using type instead of interface because I'm not extending the HTMLFormElement interface. I'm just using it as a type
// I'm writing my type in this file since the component so small, but you can create a separate file for it if you want.
type FormProps = React.FormHTMLAttributes<HTMLFormElement>

// This component is a bit limited. I've added input and textarea only, and if I would want a new form with other elements, I would have to create a new component.
// There's a way to make this component more flexible, and that's by using React.Children. I'll leave that for you to explore. Keep in mind that this approach is in the React Legacy API, aka they don't recommend using it anymore.
// Another way to make this component more flexible is by specifying the type of the children. I'll leave that for you to explore as well.
function Form({ onSubmit, ...rest }: FormProps) {
	return (
		<form {...rest} className='form' onSubmit={onSubmit}>
			<div className='text-inputs'>
				<Input name='title' placeholder='Post title' required />

				<Textarea name='body' placeholder='Write your post...' />
			</div>

			<Button type='submit'>Submit</Button>
		</form>
	)
}

export default Form
