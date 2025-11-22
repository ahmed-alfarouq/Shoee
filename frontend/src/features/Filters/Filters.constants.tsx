import { RatingStars } from "@features/RatingStars";

export const categoriesFilter = [
  {
    key: "category",
    value: "mens-shirts",
    label: "mens shirts",
  },
  {
    key: "category",
    value: "mens-watches",
    label: "mens watches",
  },
  {
    key: "category",
    value: "mens-shoes",
    label: "mens shoes",
  },
];

export const ratingsOptions = Array.from({ length: 5 }, (_, i) => {
  const n = i + 1;
  return {
    key: "rating",
    value: String(n),
    label: (
      <>
        <RatingStars aria-hidden="true" rating={n} />
        <span aria-hidden="true"> & More</span>
      </>
    ),
  };
});
