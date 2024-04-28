import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const List = lazy(() => import('../pages/Client/List.tsx'));



export const RoutesComponent = () => (
    <Routes>
        <Route index element={<List />} />
    </Routes>
)
