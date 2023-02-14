
import { useContext } from 'react';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import CurrentPageContext from './contexts/CurrentPageContext';

export const App = () => {
    
    function renderHeader(show) {
        if(show) {
            return (<Header/>);
        } else {
            return;
        }
    } 

    function renderPresentation(show) {
        if(show) {
            return (<Presentation/>);
        } else {
            return;
        }
    } 

    const [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    return (
        <>
            {renderHeader(true)}
            {renderPresentation(true)}
        </>
    );
}
