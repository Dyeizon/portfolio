import { useState } from 'react';
import CurrentPageContext from './contexts/CurrentPageContext';
import {App} from './App';

export const CurrentPageHandler = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    return (
        <CurrentPageContext.Provider value={[currentPage, setCurrentPage]}>
            <App/>
        </CurrentPageContext.Provider>
    );
}