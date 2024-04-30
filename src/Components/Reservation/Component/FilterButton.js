const FilterButton=(({searchChange})=>{
    return(
        <div className="mt-5 text-end">
            <button className="btn btn-outline-dark px-3" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i className="bi bi-sliders me-1"></i>  Filter
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filter</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text,
                        images, lists, etc.
                    </div>
                    <div className="input-group mb-3">
                        <input onKeyDown={searchChange} onKeyUp={searchChange} type="text" id="searchBar" className="form-control" placeholder="type..."
                               aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn  btn-outline-secondary" type="button"  data-bs-dismiss="offcanvas" aria-label="Close" id="button-addon2">
                                <i className="bi bi-search"/>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
});
export default FilterButton;