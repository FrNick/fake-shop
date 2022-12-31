import { Container } from '@mui/system'
import CartPage from 'pages/Cart/CartPage'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <>
            <Container maxWidth="lg">
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="cart" element={<CartPage />} />
                </Routes>
            </Container>
        </>
    )
}

export default Main
