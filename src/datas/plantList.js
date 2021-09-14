
import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',	
		water: 3,
		light: 2,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		water: 1,
		light: 3,
		cover: lyrata,
		price: 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isSpecialOffer: true,
		water: 2,
		light: 1,
		cover: pothos,
		price: 9
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		water: 3,
		light: 2,
		cover: calathea,
		price: 20
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isAvailable: false,
		water: 1,
		light: 3,
		cover: olivier,
		price: 25
	},
	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',	
		water: 2,
		light: 2,
		cover: mint,
		price: 4
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isSpecialOffer: true,
		water: 3,
		light: 2,
		cover: basil,
		price: 5
	},
	{
		name: 'cactus',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		water: 2,
		light: 1,
		cover: cactus,
		price: 6
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		water: 1,
		light: 2,
		cover: succulent,
		price: 8
	}
]
