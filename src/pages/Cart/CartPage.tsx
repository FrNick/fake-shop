import { Grid, Typography } from '@mui/material'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from '../../components/Cart/CartProductList'
type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{ textAlign: 'center', margin: '0 20px' }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </>
    )
}

export default CartPage
