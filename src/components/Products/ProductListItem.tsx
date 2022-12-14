import { CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { CardActions } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4>iPhone X</h4>
                <p>This is description</p>
                <div>Type: phone</div>
                <div>Capacity: 64 Gb</div>
                <div>Price:$500</div>
            </CardContent>
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
