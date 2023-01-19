import React from 'react';
import './Pagination.css';

function Pagination() {
    return (
        <>
            <div className="pagination__btns">
                <button>Назад</button>
                <button>Вперед</button>
            </div>
            <div className="pagination__pages">
                <span className="active__page">1</span>of{' '}
                <div className="all__pages">20</div>
            </div>
        </>
    );
}
export default Pagination;
