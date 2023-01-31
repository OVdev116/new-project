import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { perPage } from '../shared/variables';
import './Pagination.css';

function Pagination({ total, paginate }) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="pagination">
            {pageNumber.map((number) => (
                <a
                    href="#"
                    className="paginate__btn"
                    onClick={() => {
                        paginate(number);
                    }}
                >
                    {number}
                </a>
            ))}
        </div>
    );
}

export default Pagination;
