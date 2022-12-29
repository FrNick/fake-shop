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
    const addProductToCart = (id: number, count: number) => {
        setproductsInCart((prevState: AppProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(2, 5)}>Add to CarT</button>
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
