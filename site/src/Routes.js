import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './Cadastro'
import Feed from './Feed'
import Home from './Home'

export default function Index() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
        <Route path='/Feed' element={<Feed/>}/>
        </Routes>
        </BrowserRouter>
    )
}