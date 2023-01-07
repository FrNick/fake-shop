import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { StyledEngineProvider } from '@mui/material'
import 'style/style.scss'
import { omit } from 'lodash'

type Props = {}
type AppProps = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setproductsInCart] = useState<AppProps>({
        1: 5,
        2: 5,
    })
    const addProductToCart = (id: number, count: number) => {
        setproductsInCart((prevState: AppProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) => {
        setproductsInCart((prevState: AppProps) => omit(prevState, id))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(1)}>Delete</button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
