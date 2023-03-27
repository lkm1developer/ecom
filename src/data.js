const categories = [
	{
		title: 'hats',
		imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
		id: 1,
		linkUrl: 'shop/hats'
	},
	{
		title: 'jackets',
		imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/jackets.png',
		id: 2,
		linkUrl: 'shop/jackets'
	},
	{
		title: 'sneakers',
		imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
		id: 3,
		linkUrl: 'shop/sneakers'
	},
	{
		title: 'womens',
		imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
		size: 'large',
		id: 4,
		linkUrl: 'shop/womens'
	},
	{
		title: 'mens',
		imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/mc.png',
		size: 'large',
		id: 5,
		linkUrl: 'shop/mens'
	}
]
const SHOP_DATA = {
	'hats': {
		id: 1,
		title: 'Hats',
		routeName: 'hats',
		items: [
			{
				id: 1,
				name: 'Brown Brim',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 25
			},
			{
				id: 2,
				name: 'Blue Beanie',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 18
			},
			{
				id: 3,
				name: 'Brown Cowboy',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 35
			},
			{
				id: 4,
				name: 'Grey Brim',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 25
			},
			{
				id: 5,
				name: 'Green Beanie',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 18
			},
			{
				id: 6,
				name: 'Palm Tree Cap',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 14
			},
			{
				id: 7,
				name: 'Red Beanie',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 18
			},
			{
				id: 8,
				name: 'Wolf Cap',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 14
			},
			{
				id: 9,
				name: 'Blue Snapback',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/hats.png',
				price: 16
			}
		]
	},
	'sneakers': {
		id: 2,
		title: 'Sneakers',
		routeName: 'sneakers',
		items: [
			{
				id: 10,
				name: 'Adidas NMD',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
				price: 220
			},
			{
				id: 11,
				name: 'Adidas Yeezy',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
				price: 280
			},
			{
				id: 12,
				name: 'Black Converse',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
				price: 110
			},
			{
				id: 13,
				name: 'Nike White AirForce',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
				price: 160
			},
			{
				id: 14,
				name: 'Nike Red High Tops',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
				price: 160
			},
			{
				id: 15,
				name: 'Nike Brown High Tops',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
				price: 160
			},
			{
				id: 16,
				name: 'Air Jordan Limited',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
				price: 190
			},
			{
				id: 17,
				name: 'Timberlands',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/sneakers.png',
				price: 200
			}
		]
	},
	'jackets': {
		id: 3,
		title: 'Jackets',
		routeName: 'jackets',
		items: [
			{
				id: 18,
				name: 'Black Jean Shearling',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/jackets.png',
				price: 125
			},
			{
				id: 19,
				name: 'Blue Jean Jacket',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/jackets.png',
				price: 90
			},
			{
				id: 20,
				name: 'Grey Jean Jacket',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/jackets.png',
				price: 90
			},
			{
				id: 21,
				name: 'Brown Shearling',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/jackets.png',
				price: 165
			},
			{
				id: 22,
				name: 'Tan Trench',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/jackets.png',
				price: 185
			}
		]
	},
	'womens': {
		id: 4,
		title: 'Womens',
		routeName: 'womens',
		items: [
			{
				id: 23,
				name: 'Blue Tanktop',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
				price: 25
			},
			{
				id: 24,
				name: 'Floral Blouse',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
				price: 20
			},
			{
				id: 25,
				name: 'Floral Dress',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
				price: 80
			},
			{
				id: 26,
				name: 'Red Dots Dress',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
				price: 80
			},
			{
				id: 27,
				name: 'Striped Sweater',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
				price: 45
			},
			{
				id: 28,
				name: 'Yellow Track Suit',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
				price: 135
			},
			{
				id: 29,
				name: 'White Blouse',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/wc.png',
				price: 20
			}
		]
	},
	'mens': {
		id: 5,
		title: 'Mens',
		routeName: 'mens',
		items: [
			{
				id: 30,
				name: 'Camo Down Vest',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/mc.png',
				price: 325
			},
			{
				id: 31,
				name: 'Floral T-shirt',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/mc.png',
				price: 20
			},
			{
				id: 32,
				name: 'Black & White Longsleeve',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/mc.png',
				price: 25
			},
			{
				id: 33,
				name: 'Pink T-shirt',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/mc.png',
				price: 25
			},
			{
				id: 34,
				name: 'Jean Long Sleeve',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/mc.png',
				price: 40
			},
			{
				id: 35,
				name: 'Burgundy T-shirt',
				imageUrl: 'https://talentcocomedia.s3.amazonaws.com/ecom/assets/mc.png',
				price: 25
			}
		]
	}
};

export { categories, SHOP_DATA };
