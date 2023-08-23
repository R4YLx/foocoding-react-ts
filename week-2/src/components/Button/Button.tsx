import './Button.css'

// I'm writing my interface in this file since the component so small, but you can create a separate file for it if you want.
interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
	children: string
}

function Button({ type = 'button', children, ...rest }: ButtonProps) {
	return (
		<button {...rest} className='btn' type={type}>
			{children}
		</button>
	)
}

export default Button
