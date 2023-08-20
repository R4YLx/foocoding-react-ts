/* eslint-disable @typescript-eslint/no-unused-vars */
let firstName = 'John'
let age = 25
let hasPet = true
let petNames = ['Mimi', 'Momo', 'Mumu']

interface Person {
	name: string
	age: number
	hasPet: boolean
	petNames: string[]
	hobbies?: string[]
	favoriteFood?: string
}

const John: Person = {
	name: 'John',
	age: 25,
	hasPet: true,
	petNames: ['Mimi', 'Momo', 'Mumu']
}

const Raymond: Person = {
	name: 'Raymond',
	age: 33,
	hasPet: true,
	petNames: ['Molly', 'Leo'],
	hobbies: ['Gaming', 'Coding', 'Fighting'],
	favoriteFood: 'Pizza'
}

const Jane: Person = {
	name: 'Jane',
	age: 25,
	hasPet: true,
	petNames: ['Fido', 'Garfield'],
	hobbies: ['Crossfit', 'Play the piano', 'Coding'],
	favoriteFood: 'Sushi'
}

const people: Person[] = [Raymond, John, Jane]

function Card({ name, age, hasPet, petNames, hobbies, favoriteFood }: Person) {
	return (
		<ul>
			<li>Name: {name}</li>
			<li>Age: {age}</li>
			<li>HasPet: {hasPet}</li>
			<ul>
				{petNames.map((petName) => (
					<li>{petName}</li>
				))}
			</ul>
			<ul>
				{hobbies?.map((hobby) => (
					<li>{hobby}</li>
				))}
			</ul>
			<li>FavoriteFood: {favoriteFood}</li>
		</ul>
	)
}
