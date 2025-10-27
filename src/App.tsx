import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ParkingList from '~/pages/ParkingList/ParkingList';
import DetailsPage from '~/pages/DetailsPage/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParkingList />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
