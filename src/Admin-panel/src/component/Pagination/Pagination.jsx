import React from 'react'

const Pagination = () => {
    return (
        <>
        <div className="p-3 pt-0">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-md-end justify-content-center">
                    <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                    <li class="page-item"><a class="page-link active" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Pagination