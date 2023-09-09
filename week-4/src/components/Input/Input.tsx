import type { InputProps } from './Input.types'

import './Input.css'

function Input({ type, placeholder, ...rest }: InputProps) {
	return (
		<input {...rest} className='input' type={type} placeholder={placeholder} />
	)
}

export default Input
