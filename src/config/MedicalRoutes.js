import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const MedicalRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default MedicalRoutes
