import React from 'react';

const AdminTable = ({ headers, data }) => {
    return (
        <>
            <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle align-middle card-table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col" className="check">
                            <div className="form-check mb-0 justify-content-center d-flex">
                                <input className="form-check-input" type="checkbox" value="" id="datatableCheckAll" />
                                <label className="form-check-label" htmlFor="datatableCheckAll"></label>
                            </div>
                        </th>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <div className="form-check justify-content-center d-flex">
                                    <input className="form-check-input" type="checkbox" value="" id={`usersDataCheck${index}`} />
                                    <label className="form-check-label" htmlFor={`usersDataCheck${index}`}></label>
                                </div>
                            </td>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AdminTable;
