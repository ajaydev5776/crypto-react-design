import React from 'react';

function TableBodyCell({ coinName, coinType, CoinImg }) {
    return (
        <td>
            <div className="d-flex align-items-center gap-2">
                <span className="coinImg d-flex">
                    <img src={CoinImg} alt={coinName} className="h-100 w-100" />
                </span>
                <span className="coinName">{coinName} <span className="bracket">({coinType})</span></span>
            </div>
        </td>
    );
}

export default TableBodyCell;
