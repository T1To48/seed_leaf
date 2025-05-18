
const SORTMETHODS = {
    AtoZ: "AtoZ",
    ZtoA: "ZtoA",
    LOWtoHIGH: "LOWtoHIGH",
    HIGHtoLOW: "HIGHtoLOW"
} as const;
type SortMethods = keyof typeof SORTMETHODS;

interface SortOption {
    id: SortMethods;
    text: string;
}

const CATEGORIES = {
    microgreens: "microgreens",
    herbs: "herbs",
    oils: "oils",
} as const;
type Categories = keyof typeof CATEGORIES;

interface Filter {
    title: "Category" | "Price",
    value: Categories | number
}

export { CATEGORIES, SORTMETHODS }
export type { SortMethods,SortOption, Categories, Filter }