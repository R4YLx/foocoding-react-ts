import './Textarea.css'

// I'm using type instead of interface because I'm not extending the HTMLTextAreaElement interface. I'm just using it as a type
// I'm writing my type in this file since the component so small, but you can create a separate file for it if you want.
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

function Textarea({ ...rest }: TextareaProps) {
	return <textarea {...rest} className='textarea' />
}

export default Textarea
