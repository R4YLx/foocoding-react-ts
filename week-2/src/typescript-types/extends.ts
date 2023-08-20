/* eslint-disable @typescript-eslint/no-unused-vars */

interface Animal {
	name: string
	numberOfLegs: number
}

interface Bear extends Animal {
	honey: boolean
	cuddly: boolean
}

interface Tiger extends Animal {
	bounce: boolean
}

interface Rabbit extends Bear {
	isWhiney: boolean
}

const pig: Animal = {
	name: 'Piglet',
	numberOfLegs: 4
}

const bear: Bear = {
	name: 'Winnie',
	numberOfLegs: 4,
	honey: true,
	cuddly: true
}

const tiger: Tiger = {
	name: 'Tigger',
	numberOfLegs: 4,
	bounce: true
}

const rabbit: Rabbit = {
	name: 'Tigger',
	numberOfLegs: 4,
	honey: false,
	cuddly: false,
	isWhiney: true
}

interface Donkey extends Omit<Bear, 'cuddly'> {
	isSad: boolean
}

// type Donkey = Omit<Bear, 'cuddly'> & {
// 	isSad: boolean
// }

const donkey: Donkey = {
	name: 'Eeyore',
	numberOfLegs: 4,
	honey: false,
	isSad: true
}

// Interface for component
interface AnimalProps {
	name: string
	numberOfLegs: number
	honey: boolean
	isSad: boolean
	bounce: boolean
	cuddly: boolean
	isWhiney: boolean
}

// Default value within component
function Animal({
	name,
	numberOfLegs = 4,
	honey,
	isSad,
	bounce,
	cuddly,
	isWhiney
}: AnimalProps) {
	return null
}
