import { SortOption } from "src/types";

const defaultSortOption:SortOption={
    id: "AtoZ",
    text: "Alphabetically: A to Z",
  }
const otherSortOptionsArr:SortOption[] = [
  {
    id: "ZtoA",
    text: "Alphabetically: Z to A",
  },
  {
    id: "LOWtoHIGH",
    text: "Price: Low to High",
  },
  {
    id: "HIGHtoLOW",
    text: "Price: High to Low",
  },
];

export {defaultSortOption,otherSortOptionsArr}
