import { nanoid } from 'nanoid'

import coversGlass from '../img/products/covers/glass_covers.png';
import coversSilicone from '../img/products/covers/silicone_covers.png'
import coversLeather from '../img/products/covers/leather_covers.png'
import headphones1 from '../img/products/headphones/headphones1.png'
import headphones2 from '../img/products/headphones/headphones2.png'
import headphones3 from '../img/products/headphones/headphones3.png'
import wirelessHeadphones1 from '../img/products/wireless_headphones/wireless_headphones1.png'
import wirelessHeadphones2 from '../img/products/wireless_headphones/wireless_headphones2.png'
import wirelessHeadphones3 from '../img/products/wireless_headphones/wireless_headphones3.png'

class Database {
    data = {
        productsGroup : [
            {
                name: 'Чехлы',
                active: true,
                product: [
                    {
                        name: 'Стеклянные',
                        img: coversGlass,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'Силиконовые',
                        img: coversSilicone,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'Кожаные',
                        img: coversLeather,
                        active: true,
                        id: nanoid()
                    }
                ]
            },
            {
                name : 'Наушники',
                active: true,
                product: [
                    {
                        name: 'Apple BYZ S852I',
                        img: headphones1,
                        price : 9.5,
                        discount: 20,
                        rating: 4.7,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'Apple EarPods',
                        img: headphones2,
                        price : 8,
                        discount: null,
                        rating: 4.5,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'Apple EarPods',
                        img: headphones3,
                        price : 12,
                        discount: 10,
                        rating: 4.5,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'Apple BYZ S852I',
                        img: headphones1,
                        price : 9.5,
                        discount: 20,
                        rating: 4.7,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'Apple EarPods',
                        img: headphones2,
                        price : 8,
                        discount: null,
                        rating: 4.5,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'Apple EarPods',
                        img: headphones3,
                        price : 12,
                        discount: 10,
                        rating: 4.5,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    },
                ]

            },
            {
                name : 'Беспроводные наушники',
                active: true,
                product: [
                    {
                        name: 'Apple AirPods',
                        img: wirelessHeadphones1,
                        price : 30,
                        discount: null,
                        rating: 4.7,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'GERLAX GH-04',
                        img: wirelessHeadphones2,
                        price : 35,
                        discount: 5,
                        rating: 4.8,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    },
                    {
                        name: 'BOROFONE BO4',
                        img: wirelessHeadphones3,
                        price : 34,
                        discount: null,
                        rating: 4.6,
                        favorites: false,
                        active: true,
                        id: nanoid()
                    }
                    
                ]

            },
            {
                name : 'Избраное',
                active: true,
                product: []

            }
            
        ]
    }
}

export default Database;