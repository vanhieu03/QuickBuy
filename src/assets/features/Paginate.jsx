import ReactPaginate from 'react-paginate';

const Paginate = () => {
    const handlePageClick = () =>{

    }
    return (
        <div>
            <ReactPaginate
                className='flex gap-2'
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={10}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Paginate