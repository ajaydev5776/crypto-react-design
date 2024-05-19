import React, { useState } from 'react'

const FormUser = ({ fields, tabHeading, onClickOpenModal, btnColorClass,btnColorClass2,validateFunction, formBtnName="Submit" }) => {
    console.log("fileds",fields)
    const[formData,setFormData] = useState(fields)

    function HandelSubmit(){
        onClickOpenModal(formData)
    }

    function HandelSupportFunction(){
        validateFunction(formData)
    }

    function HandelOnChange(key,newValue){
        console.log("valyue", newValue, "key ",key)
        setFormData(formData.map(field =>
        field.key === key ? {...field, value: newValue} : field
        ));
    }
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
                  <label
                    htmlFor={`field-${index}`}
                    className="col-xxl-3 col-lg-4 col-md-3 col-sm-4 col-form-label form-label"
                  >
                    {field.label}
                  </label>
                  <div className="col-xxl-9 col-lg-8 col-md-9 col-sm-8">
                  {field.type !== "select" && (  <div className="mb-3">
                      <input
                        type={field.type}
                        className="form-control"
                        name={`field-${index}`}
                        id={`field-${index}`}
                        placeholder={field.placeholder}
                        aria-label={field.label}
                        onBlur={(e) =>
                          HandelOnChange(field.key, e.target.value)
                        }
                      />
                    </div>)}
                    {field.type === "select" &&(<div className="mb-3">


                      <select className='form-control'  onChange={(e) => HandelOnChange(field.key, e.target.value)}>
                      <option value={""} >{field.label}</option>
                        {field.options.map((option) => (
                          <option value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>)}
                    
                    {field.description && (
                      <div>
                        {field.descriptionTitle && (
                          <h6>{field.descriptionTitle}</h6>
                        )}
                        <ul className="mx-5 content">
                          {field.description.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-end">
              { validateFunction != null && (
                <div className="d-flex p-2">
                <button
                  type="button"
                  className={`btn  ${btnColorClass2}`}
                  onClick={HandelSupportFunction}
                >
                  Validate Details
                </button>
              </div>
              )}
              <div className="d-flex justify-content-end p-2">
                <button
                  type="button"
                  className={`btn ${btnColorClass}`}
                  onClick={HandelSubmit}
                >
                  {formBtnName}
                </button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default FormUser