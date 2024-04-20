import React from 'react'

const FormUser = ({ fields,lastField, tabHeading, onClickOpenModal, btnColorClass, formBtnName="Submit" }) => {
    return (
        <>
            <div className="card overflow-hidden">
                <div className="card-header bg-white">
                    <h5 className="card-title my-2">{tabHeading}</h5>
                </div>
                <div className="card-body">
                    <form>
                        {fields.map((field, index) => (
                            <div key={index} className="row mb-4">
                                <label htmlFor={`field-${index}`} className="col-xxl-3 col-lg-4 col-md-3 col-sm-4 col-form-label form-label">{field.label}</label>
                                <div className="col-xxl-9 col-lg-8 col-md-9 col-sm-8">
                                    <input type={field.type} className="form-control" name={`field-${index}`} id={`field-${index}`} placeholder={field.placeholder} aria-label={field.label} />
                                </div>
                            </div>
                        ))}
                        {lastField && (
                            <div className="row mb-4">
                                <label htmlFor="lastField" className="col-xxl-3 col-lg-4 col-md-3 col-sm-4 col-form-label form-label">{lastField.label}</label>
                                <div className="col-xxl-9 col-lg-8 col-md-9 col-sm-8">
                                    <div className="mb-3">
                                        <input type={lastField.type} className="form-control" name="lastField" id="lastField" placeholder={lastField.placeholder} aria-label={lastField.label} />
                                    </div>
                                    {lastField.description && 
                                    <div>
                                        {lastField.descriptionTitle && <h6>{lastField.descriptionTitle}</h6>}
                                        <ul className='mx-5 content'>
                                        {lastField.description.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                        </ul>
                                    </div>}
                                </div>
                            </div>
                            )}
                        <div className="d-flex justify-content-end">
                            <button type="button" className={`btn ${btnColorClass}`} onClick={onClickOpenModal}>{formBtnName}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormUser