import React from 'react';
import { useSelector } from 'react-redux';
import { data } from '../redux/reducer';
import "./Popup.css";

function Popup() {
    const btnOpen = useSelector((store: data) => store.open);
    return (
        <div className={`popup ${btnOpen ? 'active' : ''}`}>
            <input type="text" placeholder="login" />
            <input type="password" placeholder="password" />
        </div>
    );
}
export { Popup };
