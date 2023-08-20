/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

const isSunday: boolean = true
const daysInWeek: number = 7
const dayOfWeek: string = 'Sunday'

// Any
// Can be used when we don't know the type of the variable. May occur when we are working with a third-party library.
let anyDate: any = 31

// Unknown
// We may need to describe the type of variables that we do not know when we are writing an application.
// These values may come from e.g. a user – or we may want to intentionally accept all values in our API.

let unknownDate: unknown = 31

// Difference between unknown and any
// unknown is a type that is flexible, but still checks types. Not any
let newYearsEve: number = anyDate
let newYearsEve2: number = unknownDate as number

// null and undefined
// In TypeScript, both undefined and null actually have their own types named undefined and null respectively.
const nothing: null = null
const noValue: undefined = undefined

const daysOfWeek: string[] = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
]

const daysOfWeek2: Array<string> = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
]

const car: (string | number)[] = ['Volvo', 4]

// Typing functions

// Void
// Void is a little like the opposite of any: the absence of having any type at all.

function logToConsole(): void {
	console.log(`🍌 Hey 🍌`)
}

function getCookie(): string {
	return 'cookie'
}

function getFavoriteNumber(): number {
	return 1337
}

// Union Types
function printId(id: number | string): void {
	console.log(`Your ID is: ${id}`)
}

printId(101)
printId('202')

function printId2(id: number | string): number | string {
	return id
}

// Tuple
// Tuple types allow you to express an array with a fixed number of elements whose types are known.
let instagramPost: [string, number, boolean] = [
	'https://www.instagram.com/',
	100,
	false
]

instagramPost = ['https://www.instagram.com/', true, 100]

// Enum
// helpful addition to the standard set of datatypes from JavaScript
enum TrafficLight {
	Red,
	Yellow,
	Green
}

enum Sizes {
	XS,
	SM,
	MD = 'medium',
	LG = 'large',
	XL = 'extra large'
}

console.log(Sizes[3]) // large

const stopLight = TrafficLight.Red

// Enum is a way of giving more friendly names to sets of numeric values.
console.log(stopLight) // 0

// enum TrafficLight {
// 	Red = 0,
// 	Yellow = 1,
// 	Green = 2
// }

// enum TrafficLight {
// 	Red = 1,
// 	Yellow = 2,
// 	Green = 3
// }
