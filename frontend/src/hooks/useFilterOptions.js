import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";


const useFilterOptions = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({});

    const clearFilters = useCallback(() => {
        setFilters({});
        setSearchParams({});
    }, [setSearchParams]);

    const updateFilter = useCallback((type, value) => {
        const newFilters = type === "price" ? { ...filters, minPrice: value[0], maxPrice: value[1] } : { ...filters, [type]: value };
        setSearchParams(newFilters);
        setFilters(newFilters);
    }, [filters, setSearchParams]);

    useEffect(() => {
        const rating = searchParams.get("rating");
        const category = searchParams.get("category");
        const minPrice = searchParams.get("minPrice");
        const maxPrice = searchParams.get("maxPrice");

        const newFilters = {}
        if (rating && rating !== "null") newFilters.rating = rating;
        if (category && category !== "null") newFilters.category = category;
        if (minPrice && minPrice !== "null") newFilters.minPrice = minPrice;
        if (maxPrice && maxPrice !== "null") newFilters.maxPrice = maxPrice;

        setFilters(newFilters);
    }, [searchParams])

    return { filters, updateFilter, clearFilters };
};

export default useFilterOptions;