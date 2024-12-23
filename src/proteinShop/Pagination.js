// components/common/Pagination.js
import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination-container">
            <div className="pagination">
                <button 
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    이전
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onPageChange(index +1 )}
                        className={currentPage === (index +1) ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages }
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default Pagination;