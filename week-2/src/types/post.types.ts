// Sometimes I prefix interfaces with I to indicate that they are interfaces.
// This is my preference, but it is not required.
// It's an old convention that some people still use.
// I chose to have this interface in a separate file because it is used in multiple places.

export interface IPost {
	title: string
	body: string
}
