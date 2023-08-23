import './Headline.css'

// I'm writing my interface in this file since the component so small, but you can create a separate file for it if you want.
interface HeadlineProps
	extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'children'> {
	element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: string
}

const Headline = ({ className, element, children, ...rest }: HeadlineProps) => {
	// I'm using the element prop to determine which HTML element to render
	const Element = element

	return (
		// In the CSS file, I've targeted the h1, h2, h3, h4, h5, and h6 elements. The reason I pass className to the element is because I want to be able to add additional classes to the element
		<Element {...rest} className={className}>
			{children}
		</Element>
	)
}

export default Headline
