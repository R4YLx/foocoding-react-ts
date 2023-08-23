import './Input.css'

// I'm using type instead of interface because I'm not extending the HTMLInputElement interface. I'm just using it as a type
// I'm writing my type in this file since the component so small, but you can create a separate file for it if you want.
type InputProps = React.InputHTMLAttributes<HTMLInputElement>

function Input({ type = 'text', ...rest }: InputProps) {
	return <input {...rest} className='input-field' type={type} />
}

export default Input
