import ProductSkeleton from "./ProductSkeleton"

const ProductsSkeleton = ({ count }) => {
    return (
        <>{Array.from({ length: count }).map((_, i) => (<ProductSkeleton key={i} />))}</>
    )
}

export default ProductsSkeleton