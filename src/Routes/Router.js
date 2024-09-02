import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
// import Home from '../Pages/Home/Home'
import SinginForm from '../Pages/SignInForm/SignInForm'
import Dashboard from '../Pages/Dashboard/Dashboard'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<SinginForm />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default Router
