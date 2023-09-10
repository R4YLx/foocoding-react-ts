export interface Character {
	_id: number
	name: string
	imageUrl: string
	films: string[]
	allies: string[]
	enemies: string[]
	videoGames: string[]
}

export interface Info {
	count: number
	nextPage: string | null
	previousPage: string | null
}

export interface CharactersResponse {
	data: Character[]
	info: Info
}

export interface CharacterResponse {
	data: Character
	info: Info
}
