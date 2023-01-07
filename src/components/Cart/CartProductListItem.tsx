import { Product } from 'components/Products/ProductsArray'
type Props = {
    product: Product
    productCount: number
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.name}: {productCount}
        </div>
    )
}

export default CartProductListItem
