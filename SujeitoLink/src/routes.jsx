import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Links from './pages/Links/Links'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/links'} element={<Links />} />
            </Routes>
        </BrowserRouter>)

}

export default RoutesApp