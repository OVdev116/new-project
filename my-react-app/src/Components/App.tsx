import { useState } from 'react';
import './App.css';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux/es/exports';
import { Route, Routes } from 'react-router-dom';
// import Filter from './Filter';
// import Header from './Header';
// import List from './List';
// import { films } from '../films';
// import Context from '../assets/js/Context';
import Pagination from './Pagination';
import Home from '../pages/home';
import PageCard from './PageCard';
import Layout from './Layout';
import { FavoritesList } from '../pages/favorites-list';
import { Popup } from './Popup';
import { Search } from '../pages/search';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="sign-in" element={<Popup />} />
                    <Route path="card/:id" element={<PageCard />} />
                    <Route path="favorites" element={<FavoritesList />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
