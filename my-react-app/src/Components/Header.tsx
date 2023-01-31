import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { data } from '../shared/types';
import { Button } from './Button';
import './Header.css';

function Header() {
    // const dispatch = useDispatch();
    // const btnOpen = useSelector((store: data) => store.open);
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/search">Поиск</Link>
        </div>
    );
}
export default Header;
