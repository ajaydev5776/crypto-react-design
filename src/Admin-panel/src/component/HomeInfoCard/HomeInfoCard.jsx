import React from 'react'

const HomeInfoCard = ({ title, number, svg }) => {
    return (
        <>
            <div className="col-xxl-3 col-md-6 col-12">
                <div className="card info-card border-0 h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <div className="card-title">{title}</div>
                            <div className="numb fw-bold">{number}</div>
                        </div>
                        <div>
                            <div className="avatar-sm flex-shrink-0">
                                {svg}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeInfoCard