import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasicDemo from '../components/BasicDemo'
import Form from '../components/Form'
import Layout from '../components/Layout';
import UploadReport from '../components/Imaging-study';
import ServiceOrder from "../components/ServiceOrder";
const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<BasicDemo />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/serviceorder" element={<ServiceOrder />} />
                    <Route path="/uploadscan" element={<UploadReport />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter