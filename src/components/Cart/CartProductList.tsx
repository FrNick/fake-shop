import { keys } from 'lodash'
import productsArray, {
    getProductsObject,
    Product,
} from 'components/Products/ProductsArray'
import CartProductListItem from './CartProductListItem'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [key: number]: Product
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
}: Props) => {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    ProductCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                />
            ))}
        </>
    )
}

export default CartProductList
