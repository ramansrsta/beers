import { Box } from "@mui/material";
import useGet from "./hooks/useGet";
import ListCard from "./components/Card/Card";

function App() {
	// const queryParams = {
	// 	page: 2,
	// 	per_page: 10,
	// };
	// const { data, error, loading } = useGet(
	// 	"https://api.punkapi.com/v2/beers",
	// 	queryParams
	// );

	// {
	// 	console.log(data, "d");
	// }

	const data = [
		{
			id: 11,
			name: "Misspent Youth",
			tagline: "Milk & Honey Scotch Ale.",
			first_brewed: "04/2013",
			description:
				"The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.",
			image_url: "https://images.punkapi.com/v2/keg.png",
			abv: 7.3,
			ibu: 30,
			target_fg: 1020,
			target_og: 1079,
			ebc: 120,
			srm: 60,
			ph: 4.4,
			attenuation_level: 74.7,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 67,
							unit: "celsius",
						},
						duration: 75,
					},
				],
				fermentation: {
					temp: {
						value: 19,
						unit: "celsius",
					},
				},
				twist: "See honey and lactose additions",
			},
			ingredients: {
				malt: [
					{
						name: "Pale Ale",
						amount: {
							value: 2.18,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 0.3,
							unit: "kilograms",
						},
					},
					{
						name: "Dark Crystal",
						amount: {
							value: 0.3,
							unit: "kilograms",
						},
					},
					{
						name: "Smoked Weyermann",
						amount: {
							value: 1.8,
							unit: "kilograms",
						},
					},
					{
						name: "Flaked Oats",
						amount: {
							value: 0.6,
							unit: "kilograms",
						},
					},
					{
						name: "Brown",
						amount: {
							value: 0.6,
							unit: "kilograms",
						},
					},
					{
						name: "Amber",
						amount: {
							value: 0.1,
							unit: "kilograms",
						},
					},
					{
						name: "Chocolate",
						amount: {
							value: 0.05,
							unit: "kilograms",
						},
					},
					{
						name: "Munich",
						amount: {
							value: 0.6,
							unit: "kilograms",
						},
					},
					{
						name: "Crystal 150",
						amount: {
							value: 0.2,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "First Gold",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Fuggles",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Honey",
						amount: {
							value: 250,
							unit: "grams",
						},
						add: "middle",
						attribute: "Flavour",
					},
					{
						name: "Lactose",
						amount: {
							value: 375,
							unit: "grams",
						},
						add: "middle",
						attribute: "Flavour",
					},
					{
						name: "First Gold",
						amount: {
							value: 10,
							unit: "grams",
						},
						add: "end",
						attribute: "aroma",
					},
					{
						name: "Fuggles",
						amount: {
							value: 10,
							unit: "grams",
						},
						add: "end",
						attribute: "aroma",
					},
				],
				yeast: "Wyeast 1056 - American Ale™",
			},
			food_pairing: [
				"Roasted garlic and chilli infused camembert cheese",
				"Korean style chicken wings",
				"Chocolate milk shake",
			],
			brewers_tips:
				"Lots of malt in this one. Mash-in in stages, and spread the pale ale malt throughout the mash to provide stability. If the mash starts to sink, stop, wait a few minutes while mixing, then start again.",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 12,
			name: "Arcade Nation",
			tagline: "Seasonal Black IPA.",
			first_brewed: "12/2015",
			description:
				"Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.",
			image_url: "https://images.punkapi.com/v2/12.png",
			abv: 5.3,
			ibu: 60,
			target_fg: 1012,
			target_og: 1052,
			ebc: 200,
			srm: 100,
			ph: 4.2,
			attenuation_level: 77,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 65,
							unit: "celsius",
						},
						duration: null,
					},
				],
				fermentation: {
					temp: {
						value: 19,
						unit: "celsius",
					},
				},
				twist: null,
			},
			ingredients: {
				malt: [
					{
						name: "Pale Ale",
						amount: {
							value: 3.13,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 0.25,
							unit: "kilograms",
						},
					},
					{
						name: "Crystal 150",
						amount: {
							value: 0.18,
							unit: "kilograms",
						},
					},
					{
						name: "Carafa Special Malt Type 1",
						amount: {
							value: 0.25,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Simcoe",
						amount: {
							value: 12.5,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Simcoe",
						amount: {
							value: 19,
							unit: "grams",
						},
						add: "middle",
						attribute: "flavour",
					},
					{
						name: "Simcoe",
						amount: {
							value: 12.5,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Amarillo",
						amount: {
							value: 12.5,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Citra",
						amount: {
							value: 12.5,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Simcoe",
						amount: {
							value: 62.5,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Amarillo",
						amount: {
							value: 62.5,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Citra",
						amount: {
							value: 62.5,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
				],
				yeast: "Wyeast 1056 - American Ale™",
			},
			food_pairing: [
				"King prawn kebabs",
				"Halibut with a mango and tomato salad",
				"Mint chocloate ice cream",
			],
			brewers_tips:
				"Be as accurate as possible when weighing out your malts to ensure you strike the right balance.",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 13,
			name: "Movember",
			tagline: "Moustache-Worthy Beer.",
			first_brewed: "11/2009",
			description:
				"A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.",
			image_url: "https://images.punkapi.com/v2/13.png",
			abv: 4.5,
			ibu: 50,
			target_fg: 1012,
			target_og: 1047,
			ebc: 140,
			srm: 70,
			ph: 5.2,
			attenuation_level: 74.5,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 68,
							unit: "celsius",
						},
						duration: 50,
					},
				],
				fermentation: {
					temp: {
						value: 19,
						unit: "celsius",
					},
				},
				twist: null,
			},
			ingredients: {
				malt: [
					{
						name: "Maris Otter Extra Pale",
						amount: {
							value: 3.44,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 0.63,
							unit: "kilograms",
						},
					},
					{
						name: "Crystal 150",
						amount: {
							value: 0.31,
							unit: "kilograms",
						},
					},
					{
						name: "Carafa Special Malt Type 1",
						amount: {
							value: 0.31,
							unit: "kilograms",
						},
					},
					{
						name: "Carafa Special Malt Type 3",
						amount: {
							value: 0.31,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Cascade",
						amount: {
							value: 43.8,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Cascade",
						amount: {
							value: 81.3,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Cascade",
						amount: {
							value: 250,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
				],
				yeast: "Wyeast 1056 - American Ale™",
			},
			food_pairing: [
				"Vegetable egg scramble",
				"Margherita pizza",
				"Fresh berry crisp tart",
			],
			brewers_tips:
				"If you can’t find really fresh cascade, substitute it for Amarillo or Ahtanum.",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 14,
			name: "Alpha Dog",
			tagline: "Existential Red Ale.",
			first_brewed: "02/2010",
			description:
				"A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.",
			image_url: "https://images.punkapi.com/v2/14.png",
			abv: 4.5,
			ibu: 42,
			target_fg: 1025,
			target_og: 1046,
			ebc: 62,
			srm: 31,
			ph: 4.4,
			attenuation_level: 72.8,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 65,
							unit: "celsius",
						},
						duration: 25,
					},
				],
				fermentation: {
					temp: {
						value: 22,
						unit: "celsius",
					},
				},
				twist: null,
			},
			ingredients: {
				malt: [
					{
						name: "Maris Otter Extra Pale",
						amount: {
							value: 2.5,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 1.25,
							unit: "kilograms",
						},
					},
					{
						name: "Munich",
						amount: {
							value: 0.61,
							unit: "kilograms",
						},
					},
					{
						name: "Crystal 150",
						amount: {
							value: 0.28,
							unit: "kilograms",
						},
					},
					{
						name: "Dark Crystal 350-400",
						amount: {
							value: 0.2,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Nelson Sauvin",
						amount: {
							value: 15,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Amarillo",
						amount: {
							value: 10,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Nelson Sauvin",
						amount: {
							value: 30,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
				],
				yeast: "Wyeast 1056 - American Ale™",
			},
			food_pairing: [
				"Pastrami",
				"Swiss and horseradish sandwich",
				"Sharp cheddar cheese and onion/ raisin chutney",
				"Peanut brittle",
			],
			brewers_tips:
				"Crush the malt as close to brewing time as possible. The fresher the malt, the more intense caramel flavours will be released in the wort.",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 15,
			name: "Mixtape 8",
			tagline:
				"An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.",
			first_brewed: "01/2012",
			description:
				"This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.",
			image_url: "https://images.punkapi.com/v2/15.png",
			abv: 14.5,
			ibu: 50,
			target_fg: 1014,
			target_og: 1093,
			ebc: 40,
			srm: 20,
			ph: 4.4,
			attenuation_level: 85,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 65,
							unit: "celsius",
						},
						duration: 40,
					},
				],
				fermentation: {
					temp: {
						value: 21,
						unit: "celsius",
					},
				},
				twist: "Barrel aged and blended with Anarchist Alchemist",
			},
			ingredients: {
				malt: [
					{
						name: "Pale Ale - Tipple",
						amount: {
							value: 11.1,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 0.94,
							unit: "kilograms",
						},
					},
					{
						name: "Crystal",
						amount: {
							value: 0.44,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Columbus Extract",
						amount: {
							value: 12.5,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Centennial",
						amount: {
							value: 37.5,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Cascade",
						amount: {
							value: 37.5,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Simcoe",
						amount: {
							value: 37.5,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
				],
				yeast: "Wyeast 3522 - Belgian Ardennes™",
			},
			food_pairing: [
				"Coriander & chilli crab cakes",
				"Goats cheese salad with walnuts, radish and blood orange",
				"Pistachio cake",
			],
			brewers_tips:
				"Brew twice as much Belgian Tripel as you were planning on ageing - it's awesome on its own too!",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 16,
			name: "Libertine Porter",
			tagline: "Dry-Hopped Aggressive Porter.",
			first_brewed: "01/2012",
			description:
				"An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.",
			image_url: "https://images.punkapi.com/v2/16.png",
			abv: 6.1,
			ibu: 45,
			target_fg: 1020,
			target_og: 1067,
			ebc: 219,
			srm: 109.5,
			ph: 4.4,
			attenuation_level: 70.1,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 68,
							unit: "celsius",
						},
						duration: 35,
					},
				],
				fermentation: {
					temp: {
						value: 18,
						unit: "celsius",
					},
				},
				twist: null,
			},
			ingredients: {
				malt: [
					{
						name: "Extra Pale - Spring Blend",
						amount: {
							value: 5,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 1.25,
							unit: "kilograms",
						},
					},
					{
						name: "Crystal 150",
						amount: {
							value: 0.63,
							unit: "kilograms",
						},
					},
					{
						name: "Chocolate",
						amount: {
							value: 0.63,
							unit: "kilograms",
						},
					},
					{
						name: "Roasted Barley",
						amount: {
							value: 0.63,
							unit: "kilograms",
						},
					},
					{
						name: "Wheat",
						amount: {
							value: 0.31,
							unit: "kilograms",
						},
					},
					{
						name: "Flaked Oats",
						amount: {
							value: 0.31,
							unit: "kilograms",
						},
					},
					{
						name: "Smoked Malt",
						amount: {
							value: 0.06,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Columbus",
						amount: {
							value: 31.25,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Columbus",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "end",
						attribute: "bitter",
					},
					{
						name: "Willamette",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Galena",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Columbus",
						amount: {
							value: 75,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Galena",
						amount: {
							value: 75,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Simcoe",
						amount: {
							value: 100,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
				],
				yeast: "Wyeast 1056 - American Ale™",
			},
			food_pairing: [
				"Blue cheese beef burger",
				"Glazed short ribs",
				"Chocolate cake",
			],
			brewers_tips:
				"Mash in at a higher temperature to leave more unfermentable sugars in the wort. This gives the beer a sweeter porter profile.",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 17,
			name: "AB:06",
			tagline: "Imperial Black IPA.",
			first_brewed: "04/2011",
			description:
				"Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops. Roasty and resinous.",
			image_url: "https://images.punkapi.com/v2/17.png",
			abv: 11.2,
			ibu: 150,
			target_fg: 1013,
			target_og: 1098,
			ebc: 70,
			srm: 35,
			ph: null,
			attenuation_level: 87,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 65,
							unit: "celsius",
						},
						duration: 90,
					},
				],
				fermentation: {
					temp: {
						value: 17,
						unit: "celsius",
					},
				},
				twist: "White cane sugar: 150g at middle",
			},
			ingredients: {
				malt: [
					{
						name: "Pale Ale",
						amount: {
							value: 6.13,
							unit: "kilograms",
						},
					},
					{
						name: "Crystal 150",
						amount: {
							value: 0.25,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 0.38,
							unit: "kilograms",
						},
					},
					{
						name: "Carafa Special Malt Type 1",
						amount: {
							value: 0.13,
							unit: "kilograms",
						},
					},
					{
						name: "Carafa Special Malt Type 3",
						amount: {
							value: 0.13,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Hop Extract",
						amount: {
							value: 20,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Amarillo",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Chinook",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Cascade",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Centennial",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Columbus",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Chinook",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Cascade",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Centennial",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Columbus",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Amarillo",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
				],
				yeast: "Wyeast 1272 - American Ale II™",
			},
			food_pairing: [
				"Coffee dusted venison loin",
				"Memphis-style beef short ribs",
				"Chocolate orange brownies",
			],
			brewers_tips: "Boil down to desired OG (about 17 litres).",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 18,
			name: "Russian Doll – India Pale Ale",
			tagline: "Nesting Hop Bomb.",
			first_brewed: "08/2014",
			description:
				"The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each",
			image_url: "https://images.punkapi.com/v2/18.png",
			abv: 6,
			ibu: 70,
			target_fg: 1012,
			target_og: 1058,
			ebc: 25,
			srm: 12.5,
			ph: 5.2,
			attenuation_level: 79.3,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 65,
							unit: "celsius",
						},
						duration: 75,
					},
				],
				fermentation: {
					temp: {
						value: 19,
						unit: "celsius",
					},
				},
				twist: null,
			},
			ingredients: {
				malt: [
					{
						name: "Extra Pale",
						amount: {
							value: 5.06,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 0.25,
							unit: "kilograms",
						},
					},
					{
						name: "Dark Crystal",
						amount: {
							value: 0.06,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Cascade",
						amount: {
							value: 2.5,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Centennial",
						amount: {
							value: 12.5,
							unit: "grams",
						},
						add: "middle",
						attribute: "flavour",
					},
					{
						name: "Simcoe",
						amount: {
							value: 17.5,
							unit: "grams",
						},
						add: "middle",
						attribute: "flavour",
					},
					{
						name: "Simcoe",
						amount: {
							value: 17.5,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Citra",
						amount: {
							value: 17.5,
							unit: "grams",
						},
						add: "end",
						attribute: "flavour",
					},
					{
						name: "Simcoe",
						amount: {
							value: 75,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Cascade",
						amount: {
							value: 75,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Centennial",
						amount: {
							value: 75,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Citra",
						amount: {
							value: 25,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
				],
				yeast: "Wyeast 1056 - American Ale™",
			},
			food_pairing: [
				"Spicy chicken skewers",
				"Fish tacos with hot sauce",
				"Lemon pound cake with a ice sugar glaze",
			],
			brewers_tips:
				"Create balance through experimentation with the hop amounts and malt backbone.",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 19,
			name: "Hello My Name Is Mette-Marit",
			tagline: "Lingonberry Double IPA.",
			first_brewed: "06/2013",
			description:
				"We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.",
			image_url: "https://images.punkapi.com/v2/19.png",
			abv: 8.2,
			ibu: 70,
			target_fg: 1013,
			target_og: 1076,
			ebc: null,
			srm: null,
			ph: 4.4,
			attenuation_level: 83,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 66,
							unit: "celsius",
						},
						duration: 90,
					},
				],
				fermentation: {
					temp: {
						value: 19,
						unit: "celsius",
					},
				},
				twist:
					"Infusion of lingonberries alongside the dry hops, Cranberry Juice: 5.5g at 30mins, Lingonberries: 10g Twist",
			},
			ingredients: {
				malt: [
					{
						name: "Extra Pale",
						amount: {
							value: 6.12,
							unit: "kilograms",
						},
					},
					{
						name: "Caramalt",
						amount: {
							value: 0.8,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Tomahawk",
						amount: {
							value: 7,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Motueka",
						amount: {
							value: 5.5,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Galena",
						amount: {
							value: 2.5,
							unit: "grams",
						},
						add: "middle",
						attribute: "flavour",
					},
					{
						name: "Mt.Hood",
						amount: {
							value: 2.5,
							unit: "grams",
						},
						add: "middle",
						attribute: "flavour",
					},
					{
						name: "Challenger",
						amount: {
							value: 15,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Galena",
						amount: {
							value: 15,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
					{
						name: "Nelson Sauvin",
						amount: {
							value: 20,
							unit: "grams",
						},
						add: "dry hop",
						attribute: "aroma",
					},
				],
				yeast: "Wyeast 1056 - American Ale™",
			},
			food_pairing: [
				"Fårikål (mutton stew) with a spicy twist",
				"Fenalår (salted cured lamb)",
				"Krumkake with lingonberry jam",
			],
			brewers_tips:
				"Using crushed cranberries will dry out the beer further, drawing out their natural astringent character.",
			contributed_by: "Sam Mason <samjbmason>",
		},
		{
			id: 20,
			name: "Rabiator",
			tagline: "Imperial Wheat Beer",
			first_brewed: "03/2011",
			description:
				"Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff.",
			image_url: "https://images.punkapi.com/v2/keg.png",
			abv: 10.27,
			ibu: 26,
			target_fg: 1014,
			target_og: 1092,
			ebc: 24,
			srm: 12,
			ph: 4.4,
			attenuation_level: 85,
			volume: {
				value: 20,
				unit: "litres",
			},
			boil_volume: {
				value: 25,
				unit: "litres",
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 64,
							unit: "celsius",
						},
						duration: 60,
					},
				],
				fermentation: {
					temp: {
						value: 21,
						unit: "celsius",
					},
				},
				twist: null,
			},
			ingredients: {
				malt: [
					{
						name: "Extra Pale",
						amount: {
							value: 5.63,
							unit: "kilograms",
						},
					},
					{
						name: "Wheat",
						amount: {
							value: 0.69,
							unit: "kilograms",
						},
					},
					{
						name: "Crystal",
						amount: {
							value: 0.63,
							unit: "kilograms",
						},
					},
				],
				hops: [
					{
						name: "Columbus",
						amount: {
							value: 12.5,
							unit: "grams",
						},
						add: "start",
						attribute: "bitter",
					},
					{
						name: "Hersbrucker",
						amount: {
							value: 12.5,
							unit: "grams",
						},
						add: "middle",
						attribute: "flavour",
					},
				],
				yeast: "Wyeast 3333 - German Wheat™",
			},
			food_pairing: [
				"Grilled portabello mushroom burger",
				"Chicken sausages with creamy mash",
				"Caramel and banana meringue pie",
			],
			brewers_tips:
				"If you are struggling to get that authentic head retention increase your mash temperature to about 70°C.",
			contributed_by: "Sam Mason <samjbmason>",
		},
	];

	return (
		<>
			{data?.map((beer) => (
				<Box key={beer?.id} mb={2}>
					<ListCard
						title={beer?.name}
						subHeading={beer?.tagline}
						descriptionText={beer?.description}
					/>
				</Box>
			))}
		</>
	);
}

export default App;
