
import { RoutesHandler } from './routes/RoutesHandler';

import { BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <RoutesHandler/>
        </BrowserRouter>
    );
}