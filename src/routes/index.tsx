import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const PageListClient = lazy(() => import('../pages/Client'));



export const RoutesComponent = () => (
    <Routes>
        <Route path={'/'} index element={<PageListClient />} />
    </Routes>
)
