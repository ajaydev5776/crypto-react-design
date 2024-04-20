import React from 'react'

const FormFeild = ({labelId,labelName,laceholder, inputType }) => {
    return (
        <>
            <div class="mb-4 form-group">
                <label for={labelId} class="form-label">{labelName}</label>
                <input type={inputType} class="form-control" id={labelId} placeholder={laceholder} value={laceholder} />
            </div>
        </>
    )
}

export default FormFeild