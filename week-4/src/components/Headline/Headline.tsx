import './Headline.css'

interface HeadlineProps
	extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'> {
	element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children?: string
}

const Headline = ({ className, element, children, ...rest }: HeadlineProps) => {
	const Element = element

	return (
		<Element {...rest} className={className}>
			{children}
		</Element>
	)
}

export default Headline
