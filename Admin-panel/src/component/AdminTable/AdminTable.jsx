import React, { useState } from 'react';

const AdminTable = ({ headers, data,updateSelectedUserArray ,Actionname,action, removebtnclass}) => {
    

    return (
        <>
            <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle align-middle card-table">
                <thead className="thead-light">
                    <tr>
                    {updateSelectedUserArray &&<th scope="col" className="check">
                            <div className="form-check mb-0 justify-content-center d-flex">
                                {/* <input className="form-check-input" type="checkbox" value="" id="datatableCheckAll" /> */}
                                <label className="form-check-label" htmlFor="datatableCheckAll"></label>
                            </div>
                        </th>}
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        {action && <th> Action </th>}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                           {updateSelectedUserArray && <td>
                                {/* {row} */}
                                <div className="form-check justify-content-center d-flex">
                                    <input className="form-check-input" type="checkbox" value="" defaultChecked={false} onChange={(e) => {updateSelectedUserArray(row[0])}} id={`usersDataCheck${index}`} />
                                    <label className="form-check-label" htmlFor={`usersDataCheck${index}`}></label>
                                </div>
                            </td>}
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                            {action && <td> <button className={`btn btn-sm ${removebtnclass}`} onClick={(e)=>{action(row[0])}}>{Actionname}</button> </td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AdminTable;
