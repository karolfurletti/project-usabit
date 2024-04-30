import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const PageListClient = lazy(() => import('../pages/Client'));
const PageClientAdd = lazy(() => import('../pages/ClientAdd'));
const PageClientEdit = lazy(() => import('../pages/ClientEdit'));

export const RoutesComponent = () => (
    <Routes>
        <Route path={'/'} element={<PageListClient />} />
        <Route path={'/addClient'} element={<PageClientAdd />} />
        <Route path={'/editClient'} element={<PageClientEdit />} />
    </Routes>
)
