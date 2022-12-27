import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './ProductsArray'
type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}
type Props = {
    addProductToCart: (count: number, price: number) => void
}

const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                sx={{ margin: '25px 0', textTransform: 'uppercase' }}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
