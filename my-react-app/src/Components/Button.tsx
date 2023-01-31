import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../shared/types';

function Button({ text, onClick }) {
    // const dispatch = useDispatch();
    // const btnOpen = useSelector((store: data) => store.open);
    return <button onClick={onClick}>{text}</button>;
}
export { Button };
