import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { StyledEngineProvider } from '@mui/material'
import 'style/style.scss'

type Props = {}
type AppProps = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setproductsInCart] = useState<AppProps>({
        1: 5,
        2: 5,
    })
    const addProductToCart = (count: number, price: number) => {
        // setcartData((prevState: CartData) => ({
        //     totalCount: prevState.totalCount + count,
        //     totalPrice: prevState.totalPrice + count * price,
        // }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
