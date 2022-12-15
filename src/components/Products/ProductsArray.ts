type Product = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}
const productsArray: Product[] = [
    {
        name: 'iPhoneX',
        description: 'This is iPhoneX',
        type: 'phone',
        capacity: 64,
        price: 500,
    },
    {
        name: 'iPhone 13 Pro',
        description: 'This is iPhone 13Pro',
        type: 'phone',
        capacity: 128,
        price: 1000,
    },
    {
        name: 'iPhoneX5',
        description: 'This is iPhone X5',
        type: 'phone',
        capacity: 512,
        price: 200,
    },
    {
        name: 'iPhone 14Pro Max',
        description: 'This is iPhone 14Pro Max',
        type: 'phone',
        capacity: 256,
        price: 200,
    },
    {
        name: 'iPhone8 Plus',
        description: 'This is iPhone 8 Plus',
        type: 'phone',
        capacity: 64,
        price: 500,
    },
    {
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: 128,
        price: 100,
    },
]
export default productsArray
