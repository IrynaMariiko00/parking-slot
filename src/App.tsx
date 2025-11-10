import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ParkingList from '~/pages/ParkingList/ParkingList';
import DetailsPage from '~/pages/DetailsPage/DetailsPage';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ParkingList />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
