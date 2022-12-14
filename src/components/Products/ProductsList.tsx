import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductsList = (props: Props) => {
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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhoneX"
                        description="This is iPhoneX"
                        type="phone"
                        capacity={64}
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhoneXS"
                        description="This is iPhoneXS"
                        type="phone"
                        capacity={128}
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone12 pro"
                        description="This is iPhone12"
                        type="phone"
                        capacity={512}
                        price={800}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
