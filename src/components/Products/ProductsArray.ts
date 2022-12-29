export type Product = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}
const productsArray: Product[] = [
    {
        id: 1,
        name: 'iPhoneX',
        description: 'This is iPhoneX',
        type: 'phone',
        capacity: 64,
        price: 500,
        image: '/images/iphone-blue.jpg',
    },
    {
        id: 2,
        name: 'iPhone 13 Pro',
        description: 'This is iPhone 13Pro',
        type: 'phone',
        capacity: 128,
        price: 1000,
        image: '/images/iPhone-Gold.jpg',
    },
    {
        id: 3,
        name: 'iPhoneX5',
        description: 'This is iPhone X5',
        type: 'phone',
        capacity: 512,
        price: 200,
        image: '/images/iPhone-Pink.jpg',
    },
    {
        id: 4,
        name: 'iPhone 14Pro Max',
        description: 'This is iPhone 14Pro Max',
        type: 'phone',
        capacity: 256,
        price: 200,
        image: '/images/iPhone-Purple.jpg',
    },
    {
        id: 5,
        name: 'iPhone8 Plus',
        description: 'This is iPhone 8 Plus',
        type: 'phone',
        capacity: 64,
        price: 500,
        image: '/images/iPhone-Silver.jpg',
    },
    {
        id: 6,
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: 128,
        price: 100,
        image: '/images/iPhone-Starlight.jpg',
    },
]
export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
export default productsArray
