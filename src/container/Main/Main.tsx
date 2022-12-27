import { Container } from '@mui/system'
import Home from 'pages/Home/Home'
import React from 'react'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <>
            <Container maxWidth="lg">
                <Home addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}

export default Main
