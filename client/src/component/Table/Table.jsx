import React from 'react';
import TableBodyCell from './TableBodyCell';

function Table({ columns, data, addClassToLastCell = true }) { 
    return (
        <>
            <table className="table align-middle m-0">
                <thead>
                    <tr>
                        {columns.map((name, index) => (
                            <th key={index} scope="col">{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => {
                        const isDeposited = row[row.length - 1] === "INR Deposited";
                        const isBuy = row[row.length - 1] === "Buy";
                        const isSell = row[row.length - 1] === "Sell";
                        return (
                            <tr key={rowIndex}>
                                <TableBodyCell coinName={row[0]} coinType={row[0]} CoinImg='../../assets/img/doge.png' />
                                {row.slice(1).map((cell, cellIndex) => (
                                    <td key={cellIndex} className={addClassToLastCell && cellIndex === row.length - 2 ? 
                                        (isDeposited ? "text-theme3" : (isBuy ? "text-theme3" : (isSell ? "text-theme4" : "text-theme4"))) : ""}>{cell}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table;

