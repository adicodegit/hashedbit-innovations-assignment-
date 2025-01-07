import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import MoviesShow from './pages/Movies/Show';
import BookingsCreate from './pages/Bookings/Create/Create';
import BookingsShow from './pages/Bookings/Show/Show';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/movies/:id' element={<MoviesShow />} />
          <Route path='/bookings' element={<BookingsCreate />} />
          <Route path='/bookings/:id' element={<BookingsShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
