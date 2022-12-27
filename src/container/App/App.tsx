import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { StyledEngineProvider } from '@mui/material'
import 'style/style.scss'

type Props = {}
type CartData = {
    totalCount: number
    totalPrice: number
}
const App = (props: Props) => {
    const [cartData, setcartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })
    const addProductToCart = (count: number, price: number) => {
        setcartData((prevState: CartData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
