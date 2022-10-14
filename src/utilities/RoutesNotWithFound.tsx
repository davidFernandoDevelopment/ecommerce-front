import { Navigate, Route, Routes } from 'react-router-dom';

interface Props {
    path: string;
    children: React.ReactNode;
}

const RoutesNotWithFound = ({ children, path }: Props) => {
    return (
        <Routes>
            {children}
            <Route path='*' element={<Navigate to={path} />} />
        </Routes>
    );
};
export default RoutesNotWithFound;