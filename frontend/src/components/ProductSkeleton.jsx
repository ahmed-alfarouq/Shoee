const ProductSkeleton = () => (
    <div className="card">
        <div class="card-thumbnail">
            <a href="/">
                <div class="blur-image-wrapper">
                    <img src="https://placehold.co/300x300" alt="" class="placeholder" />
                </div>
            </a>
        </div>
        <div className="card-content">
            <span className="loading-skeleton mx-auto my-3" style={{ width: "35%"}} />
            <span className="loading-skeleton mx-auto my-3" style={{ width: "60%"}} />
            <span className="loading-skeleton mx-auto my-3" style={{ width: "35%"}} />
            <span className="loading-skeleton mx-auto my-3" style={{ width: "45%"}} />
        </div>
    </div>);

export default ProductSkeleton