import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import { StyledEngineProvider } from '@mui/material'
type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
