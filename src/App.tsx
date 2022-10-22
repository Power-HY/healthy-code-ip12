import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages';
import PlayGroundPage from './pages/playgroundCode';
import TravelCodePage from './pages/travelCode';
import ReportPage from './pages/report';
import FormPage from './pages/form';

function App() {
	return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/palyGround' element={<PlayGroundPage />} />
                <Route path='/travelCode' element={<TravelCodePage />} />
                <Route path='/report' element={<ReportPage />} />
                <Route path='/form' element={<FormPage />} />
                <Route path='*' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
